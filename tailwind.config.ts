import type { Config } from 'tailwindcss';
import fs from 'fs';

const tokensPath = './design/tokens.json';
let tokens: any = { colors: {} };
try {
  if (fs.existsSync(tokensPath)) {
    const raw = fs.readFileSync(tokensPath, 'utf8');
    tokens = JSON.parse(raw);
  }
} catch {
  // fallback silencioso
}

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: tokens.colors?.brand?.primary || '#383330',
        secondary: tokens.colors?.brand?.secondary || '#B3A79B',
        accent: tokens.colors?.brand?.accent || '#B3A79B',
        highlight: tokens.colors?.brand?.highlight || tokens.colors?.brand?.accent || '#B3A79B',
        // Neutral / UI
        background:'#F8F9FA',
        foreground: tokens.colors?.neutral?.foreground || '#383330',
        // Fallbacks já existentes:
        muted: '#94a3b8',
        border: '#e5e7eb',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444'
      },
    },
  },
  plugins: [],
} satisfies Config;