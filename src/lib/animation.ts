export const DURATION_BASE = 0.6;
export const EASE_DEFAULT = "easeOut" as const;
export const SECTION_STAGGER = 0.12;
export const SECTION_DELAY_CHILDREN = 0.12;

// Utilitário para sequência de delays por índice
export const seqDelay = (index: number, base: number = SECTION_STAGGER, start: number = 0) => {
  return start + base * index;
};