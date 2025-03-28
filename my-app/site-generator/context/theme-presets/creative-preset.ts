import { ThemePreset } from './types';

/**
 * Creative Theme Preset
 * 
 * A vibrant, expressive theme suitable for creative agencies, artists,
 * designers, and other creative professionals. Features bold colors,
 * dynamic typography, and playful design elements.
 */
export const creativePreset: ThemePreset = {
  // Metadata
  id: 'creative-agency',
  name: 'Creative Agency',
  description: 'A vibrant, expressive theme for creative agencies, artists, designers, and photographers',
  category: 'creative',
  tags: ['agency', 'design', 'art', 'photography', 'bold', 'modern'],
  thumbnail: '/thumbnails/themes/creative.jpg',
  
  // Theme settings
  colors: {
    light: {
      // Primary colors - vibrant purple
      primary: '#8b5cf6',
      primaryLight: '#a78bfa',
      primaryDark: '#7c3aed',
      primaryForeground: '#ffffff',
      
      // Secondary colors - coral
      secondary: '#f87171',
      secondaryLight: '#fca5a5',
      secondaryDark: '#ef4444',
      secondaryForeground: '#ffffff',
      
      // Semantic colors
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#3b82f6',
      
      // Background colors
      background: '#ffffff',
      foreground: '#1f2937',
      card: '#ffffff',
      cardForeground: '#1f2937',
      popover: '#ffffff',
      popoverForeground: '#1f2937',
      
      // UI colors
      muted: '#f9fafb',
      mutedForeground: '#6b7280',
      accent: '#f3f4f6',
      accentForeground: '#1f2937',
      border: '#e5e7eb',
      input: '#e5e7eb',
      ring: '#d1d5db',
    },
    dark: {
      // Primary colors - vibrant purple
      primary: '#a78bfa',
      primaryLight: '#c4b5fd',
      primaryDark: '#8b5cf6',
      primaryForeground: '#ffffff',
      
      // Secondary colors - coral
      secondary: '#fca5a5',
      secondaryLight: '#fecaca',
      secondaryDark: '#f87171',
      secondaryForeground: '#111827',
      
      // Semantic colors
      success: '#34d399',
      warning: '#fbbf24',
      danger: '#f87171',
      info: '#60a5fa',
      
      // Background colors
      background: '#111827',
      foreground: '#f9fafb',
      card: '#1f2937',
      cardForeground: '#f9fafb',
      popover: '#1f2937',
      popoverForeground: '#f9fafb',
      
      // UI colors
      muted: '#1f2937',
      mutedForeground: '#9ca3af',
      accent: '#2c3444',
      accentForeground: '#f9fafb',
      border: '#374151',
      input: '#374151',
      ring: '#4b5563',
    }
  },
  typography: {
    fontFamily: {
      sans: 'Outfit, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: '"Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"Fira Code", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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
      '5xl': ['3rem', { lineHeight: '1.1' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
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
  // Creative theme custom properties
  customProperties: {
    sectionSpacing: '6rem', // More spacious for creative layouts
    contentWidth: {
      narrow: '42rem',
      default: '70rem',
      wide: '90rem',
    },
    animations: {
      transition: {
        fast: '150ms ease',
        default: '250ms ease',
        slow: '400ms ease',
      },
      hover: {
        scale: 'scale(1.05)',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
    cards: {
      hover: {
        transform: 'translateY(-5px)',
        shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
    heroSection: {
      minHeight: '90vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      headingSize: '6xl',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      secondary: 'linear-gradient(135deg, #f87171 0%, #fbbf24 100%)',
      background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
    },
  },
};

export default creativePreset;
