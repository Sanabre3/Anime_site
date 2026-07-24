import type { Theme } from '../data/content'

export interface ThemeTokens {
  /** cor sólida principal */
  color: string
  /** rgb cru p/ rgba() */
  rgb: string
  /** gradiente do poster */
  gradient: string
  /** cor de glow */
  glow: string
  label: string
}

export const THEME: Record<Theme, ThemeTokens> = {
  spirit: {
    color: '#38bdf8',
    rgb: '56,189,248',
    gradient: 'linear-gradient(150deg,#0b1a2e 0%,#0e2a45 40%,#0ea5e9 130%)',
    glow: 'rgba(56,189,248,0.55)',
    label: 'Reiatsu Azul',
  },
  fire: {
    color: '#ff7a18',
    rgb: '255,122,24',
    gradient: 'linear-gradient(150deg,#1a0a02 0%,#3d1502 40%,#ff7a18 135%)',
    glow: 'rgba(255,122,24,0.55)',
    label: 'Bankai',
  },
  blood: {
    color: '#e11d2a',
    rgb: '225,29,42',
    gradient: 'linear-gradient(150deg,#180205 0%,#420810 45%,#e11d2a 140%)',
    glow: 'rgba(225,29,42,0.5)',
    label: 'Carmesim',
  },
  hollow: {
    color: '#a78bfa',
    rgb: '167,139,250',
    gradient: 'linear-gradient(150deg,#0a0512 0%,#1e1035 45%,#7c3aed 140%)',
    glow: 'rgba(167,139,250,0.5)',
    label: 'Hollow',
  },
  quincy: {
    color: '#e5e7eb',
    rgb: '229,231,235',
    gradient: 'linear-gradient(150deg,#05070d 0%,#141a2e 45%,#64748b 140%)',
    glow: 'rgba(200,214,240,0.45)',
    label: 'Quincy',
  },
  gold: {
    color: '#f5b301',
    rgb: '245,179,1',
    gradient: 'linear-gradient(150deg,#140d01 0%,#3a2702 45%,#f5b301 140%)',
    glow: 'rgba(245,179,1,0.5)',
    label: 'Reiô',
  },
}
