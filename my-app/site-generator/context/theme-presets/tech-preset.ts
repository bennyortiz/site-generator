import { ThemePreset } from './types';

/**
 * Technical Theme Preset
 * 
 * A modern, tech-focused theme suitable for SaaS companies, startups,
 * technology products, and digital services. Features crisp design,
 * vibrant accents, and a sleek, contemporary feel.
 */
export const techPreset: ThemePreset = {
  // Metadata
  id: 'tech-startup',
  name: 'Tech Startup',
  description: 'A modern, tech-focused theme for SaaS, startups, and technology products',
  category: 'technical',
  tags: ['startup', 'saas', 'technology', 'product', 'app', 'modern'],
  thumbnail: '/thumbnails/themes/tech.jpg',
  
  // Theme settings
  colors: {
    light: {
      // Primary colors - vibrant blue
      primary: '#0091ff',
      primaryLight: '#33a7ff',
      primaryDark: '#0077e6',
      primaryForeground: '#ffffff',
      
      // Secondary colors - coral/orange
      secondary: '#ff6b35',
      secondaryLight: '#ff8c62',
      secondaryDark: '#e54f24',
      secondaryForeground: '#ffffff',
      
      // Semantic colors
      success: '#00c853',
      warning: '#ffab00',
      danger: '#ff3d00',
      info: '#00b0ff',
      
      // Background colors
      background: '#f8fafc',
      foreground: '#0f172a',
      card: '#ffffff',
      cardForeground: '#0f172a',
      popover: '#ffffff',
      popoverForeground: '#0f172a',
      
      // UI colors
      muted: '#f1f5f9',
      mutedForeground: '#64748b',
      accent: '#e0f2fe',
      accentForeground: '#0c4a6e',
      border: '#e2e8f0',
      input: '#e2e8f0',
      ring: '#bae6fd',
    },
    dark: {
      // Primary colors - vibrant blue
      primary: '#3b82f6',
      primaryLight: '#60a5fa',
      primaryDark: '#2563eb',
      primaryForeground: '#ffffff',
      
      // Secondary colors - coral/orange
      secondary: '#fb923c',
      secondaryLight: '#fdba74',
      secondaryDark: '#f97316',
      secondaryForeground: '#000000',
      
      // Semantic colors
      success: '#4ade80',
      warning: '#fbbf24',
      danger: '#f87171',
      info: '#38bdf8',
      
      // Background colors
      background: '#0f172a',
      foreground: '#f8fafc',
      card: '#1e293b',
      cardForeground: '#f8fafc',
      popover: '#1e293b',
      popoverForeground: '#f8fafc',
      
      // UI colors
      muted: '#1e293b',
      mutedForeground: '#94a3b8',
      accent: '#0f2942',
      accentForeground: '#e0f2fe',
      border: '#334155',
      input: '#334155',
      ring: '#0c4a6e',
    }
  },
  typography: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'Merriweather, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'JetBrains Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.2' }],
      '6xl': ['3.75rem', { lineHeight: '1.2' }],
      '7xl': ['4.5rem', { lineHeight: '1.2' }],
      '8xl': ['6rem', { lineHeight: '1.1' }],
      '9xl': ['8rem', { lineHeight: '1.1' }],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    spacing: {
      '0': '0px',
      '1': '0.25rem', // 4px
      '2': '0.5rem',  // 8px
      '3': '0.75rem', // 12px
      '4': '1rem',    // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem',  // 24px
      '8': '2rem',    // 32px
      '10': '2.5rem', // 40px
      '12': '3rem',   // 48px
      '16': '4rem',   // 64px
      '20': '5rem',   // 80px
      '24': '6rem',   // 96px
      '32': '8rem',   // 128px
      '40': '10rem',  // 160px
      '48': '12rem',  // 192px
      '56': '14rem',  // 224px
      '64': '16rem',  // 256px
    },
    margin: {
      auto: 'auto',
      // Additional margin presets can be added here
    },
    padding: {
      // Additional padding presets can be added here
    },
    gap: {
      // Additional gap presets can be added here
    },
  },
  borders: {
    borderRadius: {
      none: '0',
      sm: '0.125rem', // 2px
      md: '0.375rem',  // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem',   // 12px
      '2xl': '1rem', // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },
  },
  // Tech theme custom properties
  customProperties: {
    sectionSpacing: '6rem',
    contentWidth: {
      narrow: '45rem',
      default: '70rem',
      wide: '85rem',
    },
    animations: {
      transition: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        default: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      hover: {
        scale: 'scale(1.02)',
        shadow: 'var(--shadow-lg)',
      },
    },
    buttons: {
      primary: {
        hover: {
          transform: 'translateY(-2px)',
          shadow: '0 10px 15px -3px rgba(0, 145, 255, 0.2), 0 4px 6px -2px rgba(0, 145, 255, 0.1)',
        },
      },
      secondary: {
        hover: {
          transform: 'translateY(-2px)',
          shadow: '0 10px 15px -3px rgba(255, 107, 53, 0.2), 0 4px 6px -2px rgba(255, 107, 53, 0.1)',
        },
      },
    },
    features: {
      icons: {
        size: '3rem',
        color: 'var(--color-primary)',
        background: 'var(--color-accent)',
        padding: '1rem',
        borderRadius: 'var(--radius-xl)',
      },
    },
    code: {
      background: '#1e293b',
      color: '#e2e8f0',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9em',
      padding: '0.2em 0.4em',
      borderRadius: '0.25em',
    },
    glassmorphism: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
  },
};

export default techPreset;
