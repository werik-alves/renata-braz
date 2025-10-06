import fs from 'fs/promises';
import path from 'path';

const FIGMA_API = 'https://api.figma.com/v1';

function parseArgs() {
  const args = process.argv.slice(2);
  const map = {};
  for (const a of args) {
    if (a.startsWith('--')) {
      const [key, val] = a.replace(/^--/, '').split('=');
      map[key] = val ?? true;
    }
  }
  return map;
}

async function readTokenFromEnvFile() {
  const tryFiles = ['.env.local', '.env'];
  for (const file of tryFiles) {
    try {
      let content = await fs.readFile(file, 'utf8');
      // Remove BOM e normaliza
      content = content.replace(/^\uFEFF/, '');
      for (let line of content.split(/\r?\n/)) {
        // Ignora comentários e linhas vazias
        if (!line || line.trim().startsWith('#')) continue;
        // Captura com tolerância a espaços
        const m = line.match(/^\s*FIGMA_TOKEN\s*=\s*(.+)\s*$/);
        if (m) {
          // Remove aspas simples/duplas/backticks se existirem
          const raw = m[1].trim();
          const unquoted = raw.replace(/^["'`]|["'`]$/g, '');
          return unquoted;
        }
      }
    } catch (_) {
      // continua tentando próximo arquivo
    }
  }
  return null;
}

async function figmaFetch(url, token) {
  const res = await fetch(url, {
    // Figma API aceita autenticação via header X-Figma-Token
    headers: { 'X-Figma-Token': token },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API error ${res.status}: ${body}`);
  }
  return res.json();
}

function walkNodes(node, out = []) {
  if (!node) return out;
  out.push(node);
  if (node.children) {
    for (const c of node.children) walkNodes(c, out);
  }
  return out;
}

function rgbaToHex({ r, g, b, a = 1 }) {
  const to255 = (x) => Math.round(Math.min(1, Math.max(0, x)) * 255);
  const rh = to255(r).toString(16).padStart(2, '0');
  const gh = to255(g).toString(16).padStart(2, '0');
  const bh = to255(b).toString(16).padStart(2, '0');
  if (a !== 1) {
    const ah = to255(a).toString(16).padStart(2, '0');
    return `#${rh}${gh}${bh}${ah}`;
  }
  return `#${rh}${gh}${bh}`;
}

function collectTopColors(nodes, limit = 5) {
  const freq = new Map();
  for (const n of nodes) {
    const fills = n.fills || [];
    for (const f of fills) {
      if (f.type === 'SOLID' && f.color) {
        const hex = rgbaToHex({ ...f.color, a: f.opacity ?? 1 });
        freq.set(hex, (freq.get(hex) || 0) + 1);
      }
    }
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([hex]) => hex);
}

async function downloadImagesMap(imagesMap, outDir, format) {
  await fs.mkdir(outDir, { recursive: true });
  const entries = Object.entries(imagesMap);
  for (const [nodeId, url] of entries) {
    // Sanitiza nomes de arquivo para Windows (sem ':', '/', etc.)
    const safeId = String(nodeId).replace(/[^a-zA-Z0-9_-]/g, '_');
    const filePath = path.join(outDir, `${safeId}.${format}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Falha ao baixar ${nodeId}: ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(filePath, buf);
    console.log(`✔ Baixado: ${filePath} (nodeId=${nodeId})`);
  }
}

async function main() {
  const args = parseArgs();
  const fileKey = args.fileKey || 'RVJgsAI1L7NIqE2jQ9L3Ew';
  const idsArg = args.ids ? String(args.ids) : null;
  const format = args.format || 'png';
  const scale = args.scale || '2';

  const token = process.env.FIGMA_TOKEN || (await readTokenFromEnvFile());
  if (!token) {
    throw new Error('FIGMA_TOKEN não encontrado. Defina em .env.local, .env ou variável de ambiente.');
  }
  console.log('→ FIGMA_TOKEN carregado com sucesso.');

  console.log(`→ Lendo arquivo Figma: ${fileKey}`);
  const fileJson = await figmaFetch(`${FIGMA_API}/files/${fileKey}`, token);
  const allNodes = walkNodes(fileJson.document, []);
  // Alvo padrão: frames/sections/componentes para exportar
  const candidateTypes = new Set(['FRAME', 'SECTION', 'COMPONENT', 'INSTANCE']);
  let ids = idsArg
    ? idsArg.split(',').map((s) => s.trim()).filter(Boolean)
    : allNodes.filter((n) => candidateTypes.has(n.type)).map((n) => n.id);

  // Se nada encontrado, tente alguns tipos comuns
  if (!ids.length) {
    ids = allNodes.map((n) => n.id).slice(0, 50);
  }

  console.log(`→ Exportando ${ids.length} nodes como imagens (${format}, scale=${scale})`);
  const url = `${FIGMA_API}/images/${fileKey}?ids=${encodeURIComponent(ids.join(','))}&format=${format}&scale=${scale}`;
  const imgJson = await figmaFetch(url, token);
  const outDir = path.join('public', 'assets', 'figma');
  await downloadImagesMap(imgJson.images || {}, outDir, format);

  console.log('→ Gerando tokens de cor em design/tokens.json');
  const topColors = collectTopColors(allNodes, 5);
  const names = ['primary', 'secondary', 'accent', 'muted', 'highlight'];
  const colorsObj = {};
  for (let i = 0; i < names.length; i++) {
    colorsObj[names[i]] = topColors[i] || ['#1e293b', '#64748b', '#0ea5b7', '#94a3b8', '#f59e0b'][i];
  }
  await fs.mkdir('design', { recursive: true });
  await fs.writeFile('design/tokens.json', JSON.stringify({ colors: colorsObj }, null, 2), 'utf8');

  console.log('✔ Concluído: imagens em public/assets/figma e cores em design/tokens.json');
}

main().catch((err) => {
  console.error('Erro:', err.message);
  process.exit(1);
});