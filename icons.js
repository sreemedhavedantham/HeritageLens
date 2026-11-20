// Small flat block-print-style illustrations, drawn with currentColor so
// each card can tint them via CSS. No external image requests required.

const MOTIFS = {
  arch: `
    <path d="M20 96 V54 C20 34 33 20 60 20 C87 20 100 34 100 54 V96" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M34 96 V58 C34 44 44 34 60 34 C76 34 86 44 86 58 V96" fill="none" stroke="currentColor" stroke-width="3" opacity="0.6"/>
    <circle cx="60" cy="14" r="4" fill="currentColor"/>
    <rect x="14" y="96" width="92" height="6" rx="2" fill="currentColor"/>
  `,
  fort: `
    <path d="M18 100 V44 h10 V32 h10 V44 h10 V28 h12 V44 h10 V32 h10 V44 h10 V100 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="52" y="66" width="16" height="34" fill="currentColor" opacity="0.85"/>
    <circle cx="60" cy="52" r="3" fill="currentColor"/>
  `,
  palace: `
    <path d="M60 16 L84 40 H36 Z" fill="currentColor" opacity="0.85"/>
    <rect x="26" y="40" width="68" height="60" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M40 100 V70 C40 62 46 58 52 58 H68 C74 58 80 62 80 70 V100" fill="none" stroke="currentColor" stroke-width="3" opacity="0.7"/>
    <circle cx="60" cy="30" r="3" fill="currentColor"/>
  `,
  temple: `
    <path d="M60 14 L72 46 H48 Z" fill="currentColor"/>
    <path d="M52 46 H68 V58 H52 Z" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M30 100 V64 C30 54 40 50 60 50 C80 50 90 54 90 64 V100" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="16" y="100" width="88" height="6" rx="2" fill="currentColor"/>
  `,
  bowl: `
    <path d="M22 56 H98 C98 78 82 96 60 96 C38 96 22 78 22 56 Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="60" cy="56" rx="38" ry="10" fill="currentColor" opacity="0.85"/>
    <path d="M46 32 C46 24 54 22 54 30 M60 28 C60 20 68 18 68 26 M74 34 C74 26 82 24 82 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  `,
  cup: `
    <path d="M32 46 H80 L74 90 C73 96 68 100 62 100 H50 C44 100 39 96 38 90 Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M80 54 H90 C96 54 96 68 90 70 H78" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <path d="M46 22 C46 14 54 12 54 20 M60 18 C60 10 68 8 68 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  `,
  market: `
    <path d="M18 40 L26 20 H94 L102 40 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M22 40 V44 C22 50 30 50 33 44 C36 50 44 50 47 44 C50 50 58 50 61 44 C64 50 72 50 75 44 C78 50 86 50 89 44 C92 50 98 50 98 44 V40" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="30" y="50" width="60" height="50" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="48" y="70" width="24" height="30" fill="currentColor" opacity="0.8"/>
  `,
  globe: `
    <circle cx="60" cy="58" r="42" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="60" cy="58" rx="18" ry="42" fill="none" stroke="currentColor" stroke-width="3" opacity="0.7"/>
    <path d="M18 58 H102 M24 36 H96 M24 80 H96" fill="none" stroke="currentColor" stroke-width="3" opacity="0.7"/>
  `,
  compass: `
    <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M60 26 L70 54 L60 94 L50 54 Z" fill="currentColor" opacity="0.85"/>
    <circle cx="60" cy="60" r="5" fill="var(--cream)"/>
  `,
};

export function motifSVG(motif, size = 56) {
  const body = MOTIFS[motif] || MOTIFS.compass;
  return `<svg viewBox="0 0 120 120" width="${size}" height="${size}" aria-hidden="true">${body}</svg>`;
}
