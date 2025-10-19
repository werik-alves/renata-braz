export interface WhatsappOptions {
  phone?: string; // pode vir com caracteres, será sanitizado
  text?: string;  // mensagem opcional
}

export function sanitizeDigits(input: string): string {
  return String(input || '').replace(/\D/g, '');
}

/**
 * Constrói o link da API oficial do WhatsApp.
 * - Usa `NEXT_PUBLIC_WHATSAPP_NUMBER` ou `WHATSAPP_NUMBER` do .env se `phone` não for informado.
 * - Sanitiza o número para conter apenas dígitos.
 * - Retorna `null` se não houver número.
 */
export function buildWhatsappLink(opts: WhatsappOptions = {}): string | null {
  const envRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER || '';
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message = opts.text ?? 'Olá! Gostaria de falar com a Renata Braz.';
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildWhatsappLinkImposto(opts: WhatsappOptions = {}): string | null {
  const envRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_IMPOSTO || process.env.WHATSAPP_NUMBER || '';
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message = opts.text ?? 'Olá! Gostaria de fazer uma consulta sobre o Imposto de Renda.';
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}

export function buildWhatsappLinkPlanosValores(opts: WhatsappOptions = {}): string | null {
  const envRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER || '';
  const raw = opts.phone ?? envRaw;
  const digits = sanitizeDigits(raw);
  if (!digits) return null;
  const message = opts.text ?? 'Olá! Gostaria de saber mais sobre os planos e valores.';
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${digits}&text=${encoded}`;
}
