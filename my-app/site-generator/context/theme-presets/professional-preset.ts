import { ThemePreset } from './types';

/**
 * Professional Theme Preset
 * 
 * A sophisticated, clean theme suitable for professional services like law firms,
 * financial services, consulting agencies, etc. Features a conservative color
 * palette, formal typography, and understated design elements.
 */
export const professionalPreset: ThemePreset = {
  // Metadata
  id: 'professional-services',
  name: 'Professional Services',
  description: 'A sophisticated, professional theme for law firms, financial services, and consulting',
  category: 'professional',
  tags: ['corporate', 'law', 'finance', 'consulting', 'business', 'formal'],
  thumbnail: '/thumbnails/themes/professional.jpg',
  
  // Theme settings
  colors: {
    light: {
      // Primary colors - navy blue
      primary: '#1a365d',
      primaryLight: '#2c5282',
      primaryDark: '#0f2942',
      primaryForeground: '#ffffff',
      
      // Secondary colors - muted gold
      secondary: '#b7a069',
      secondaryLight: '#d0bf94',
      secondaryDark: '#8c7646',
      secondaryForeground: '#ffffff',
      
      // Semantic colors
      success: '#0e7c86',
      warning: '#d97706',
      danger: '#c81e1e',
      info: '#3f72af',
      
      // Background colors
      background: '#ffffff',
      foreground: '#1a202c',
      card: '#ffffff',
      cardForeground: '#1a202c',
      popover: '#ffffff',
      popoverForeground: '#1a202c',
      
      // UI colors
      muted: '#f8f9fa',
      mutedForeground: '#64748b',
      accent: '#f1f5f9',
      accentForeground: '#1a365d',
      border: '#e2e8f0',
      input: '#e2e8f0',
      ring: '#cbd5e1',
    },
    dark: {
      // Primary colors - navy blue
      primary: '#3182ce',
      primaryLight: '#4299e1',
      primaryDark: '#2c5282',
      primaryForeground: '#ffffff',
      
      // Secondary colors - muted gold
      secondary: '#d0bf94',
      secondaryLight: '#e2d6b4',
      secondaryDark: '#b7a069',
      secondaryForeground: '#000000',
      
      // Semantic colors
      success: '#0ca678',
      warning: '#f59e0b',
      danger: '#e11d48',
      info: '#60a5fa',
      
      // Background colors
      background: '#1a202c',
      foreground: '#f8f9fa',
      card: '#2d3748',
      cardForeground: '#f8f9fa',
      popover: '#2d3748',
      popoverForeground: '#f8f9fa',
      
      // UI colors
      muted: '#2d3748',
      mutedForeground: '#94a3b8',
      accent: '#323a4b',
      accentForeground: '#e2e8f0',
      border: '#3e4c5e',
      input: '#3e4c5e',
      ring: '#4a5568',
    }
  },
  typography: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
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
      md: '0.25rem',  // 4px
      lg: '0.375rem', // 6px
      xl: '0.5rem',   // 8px
      '2xl': '0.75rem', // 12px
      '3xl': '1rem',  // 16px
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
  // Professional theme custom properties
  customProperties: {
    sectionSpacing: '5rem', // Consistent spacing between sections
    contentWidth: {
      narrow: '45rem',
      default: '65rem',
      wide: '80rem',
    },
    articleTypography: {
      heading: {
        fontFamily: 'serif',
        letterSpacing: '-0.025em',
      },
      body: {
        maxWidth: '65ch', // Optimal reading length
        lineHeight: '1.8',
      },
    },
  },
};

export default professionalPreset;
