export interface WhatsappOptions {
  phone?: string; // pode vir com caracteres, será sanitizado
  text?: string; // mensagem opcional
}

export function sanitizeDigits(input: string): string {
  return String(input || "").replace(/\D/g, "");
}

export interface InstagramOptions {
  username?: string; // nome de usuário do Instagram, padrão: contadora.renatabraz
}

/**
 * Constrói o link da API oficial do WhatsApp.
 * - Usa `NEXT_PUBLIC_WHATSAPP_NUMBER` ou `WHATSAPP_NUMBER` do .env se `phone` não for informado.
 * - Sanitiza o número para conter apenas dígitos.
 * - Retorna `null` se não houver número.
 */
export function buildWhatsappLink(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message = opts.text ?? "Olá! Gostaria de falar com a Renata Braz.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildWhatsappLinkImposto(
  opts: WhatsappOptions = {}
): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ??
    "Olá! Gostaria de obter ajuda para declarar meu Imposto de Renda.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildWhatsappLinkPlanosValores(
  opts: WhatsappOptions = {}
): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ?? "Olá! Gostaria de saber mais sobre os planos e valores.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildWhatsappLinkDiferenciais(
  opts: WhatsappOptions = {}
): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ?? "Olá! Gostaria de saber mais sobre os diferenciais do plano.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function linkAcessoriaMensal(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ??
    "Olá! Gostaria de fazer uma consulta sobre a Assessoria Mensal.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function linkAcessoriaMei(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ?? "Olá! Gostaria de fazer uma consulta sobre a Assessoria MEI.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function linkRegularizacao(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ??
    "Olá! Gostaria de saber como fazer a regularização da empresa.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function linkAberturaCnpj(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ??
    "Olá! Gostaria de saber como proceder para a abertura de CNPJ.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function linkSaibaMais(opts: WhatsappOptions = {}): string | null {
  const envRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "";
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message =
    opts.text ??
    "Olá! Gostaria de saber mais sobre o que a Renata Braz pode me oferecer.";
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildInstagramLink(opts: InstagramOptions = {}): string | null {
  const username = opts.username ?? "contadora.renatabraz";
  return `https://www.instagram.com/${username}/?igshid=OGQ5ZDc2ODk2ZA%3D%3D`;
}
