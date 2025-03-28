import { ThemeConfig } from '../types/config';

/**
 * Processed theme configuration
 */
export interface ProcessedTheme {
  /**
   * Colors object for Tailwind config
   */
  colors: Record<string, string>;
  
  /**
   * Typography settings
   */
  typography: {
    fontFamily: Record<string, string[]>;
  };
  
  /**
   * Other theme settings like spacing, borderRadius, etc.
   */
  settings: Record<string, any>;
  
  /**
   * Generated Tailwind config
   */
  tailwindConfig: string;
  
  /**
   * Generated CSS variables
   */
  cssVariables: string;
}

/**
 * Process theme configuration
 * 
 * This takes a theme configuration from the site builder config
 * and converts it to Tailwind CSS configuration and CSS variables.
 * 
 * @param theme The theme configuration
 * @returns Processed theme data
 */
export function processThemeConfig(theme: ThemeConfig): ProcessedTheme {
  // Process colors
  const colors = processColors(theme.colors);
  
  // Process typography
  const typography = processTypography(theme.fonts);
  
  // Process other settings
  const settings = processSettings(theme);
  
  // Generate Tailwind config
  const tailwindConfig = generateTailwindConfig(colors, typography, settings);
  
  // Generate CSS variables
  const cssVariables = generateCssVariables(colors, typography, settings);
  
  return {
    colors,
    typography,
    settings,
    tailwindConfig,
    cssVariables,
  };
}

/**
 * Process color configuration
 * 
 * @param colors The color configuration
 * @returns Processed colors
 */
function processColors(colors: ThemeConfig['colors']): Record<string, string> {
  const processedColors: Record<string, string> = {};
  
  // Copy direct colors
  Object.entries(colors).forEach(([key, value]) => {
    processedColors[key] = value;
  });
  
  // Use primary color as a base for other shades if not provided
  if (colors.primary && !colors.primary.startsWith('rgb')) {
    // This is a simplified approach - in a real implementation,
    // we would use a library like chroma.js to generate proper shades
    processedColors['primary-light'] = lightenColor(colors.primary, 0.2);
    processedColors['primary-dark'] = darkenColor(colors.primary, 0.2);
  }
  
  // Similar for secondary color
  if (colors.secondary && !colors.secondary.startsWith('rgb')) {
    processedColors['secondary-light'] = lightenColor(colors.secondary, 0.2);
    processedColors['secondary-dark'] = darkenColor(colors.secondary, 0.2);
  }
  
  // Add text color variations if not explicitly provided
  if (colors.text) {
    processedColors['text-light'] = lightenColor(colors.text, 0.6); // Light variant of text color
    processedColors['text-dark'] = darkenColor(colors.text, 0.3); // Dark variant of text color
  } else {
    processedColors['text-light'] = '#F8FAFC'; // Default light text
    processedColors['text-dark'] = '#1E293B'; // Default dark text
  }
  
  return processedColors;
}

/**
 * Process typography configuration
 * 
 * @param fonts The fonts configuration
 * @returns Processed typography
 */
function processTypography(fonts: ThemeConfig['fonts']): { fontFamily: Record<string, string[]> } {
  return {
    fontFamily: {
      heading: [fonts.heading, 'sans-serif'],
      body: [fonts.body, 'sans-serif'],
      // For system fonts fallbacks
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  };
}

/**
 * Process other theme settings
 * 
 * @param theme The theme configuration
 * @returns Processed settings
 */
function processSettings(theme: ThemeConfig): Record<string, any> {
  const settings: Record<string, any> = {};
  
  if (theme.borderRadius) {
    settings.borderRadius = {
      DEFAULT: theme.borderRadius,
      sm: multiplySize(theme.borderRadius, 0.5),
      md: theme.borderRadius,
      lg: multiplySize(theme.borderRadius, 1.5),
      xl: multiplySize(theme.borderRadius, 2),
      full: '9999px',
    };
  }
  
  if (theme.boxShadow) {
    settings.boxShadow = {
      DEFAULT: theme.boxShadow,
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: theme.boxShadow,
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      none: 'none',
    };
  }
  
  if (theme.spacing) {
    settings.spacing = theme.spacing;
  }
  
  return settings;
}

/**
 * Generate Tailwind config from processed theme data
 * 
 * @param colors Processed colors
 * @param typography Processed typography
 * @param settings Processed other settings
 * @returns Tailwind config as a string
 */
function generateTailwindConfig(
  colors: Record<string, string>,
  typography: { fontFamily: Record<string, string[]> },
  settings: Record<string, any>
): string {
  const config = {
    theme: {
      extend: {
        colors,
        fontFamily: typography.fontFamily,
        ...settings,
      },
    },
  };
  
  return `module.exports = ${JSON.stringify(config, null, 2)}`;
}

/**
 * Generate CSS variables from processed theme data
 * 
 * @param colors Processed colors
 * @param typography Processed typography
 * @param settings Processed other settings
 * @returns CSS variables as a string
 */
function generateCssVariables(
  colors: Record<string, string>,
  typography: { fontFamily: Record<string, string[]> },
  settings: Record<string, any>
): string {
  let css = ':root {\n';
  
  // Add color variables
  Object.entries(colors).forEach(([key, value]) => {
    css += `  --color-${key}: ${value};\n`;
  });
  
  // Add typography variables
  Object.entries(typography.fontFamily).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      css += `  --font-${key}: ${value[0]};\n`;
    }
  });
  
  // Add other settings as variables
  if (settings.borderRadius?.DEFAULT) {
    css += `  --border-radius: ${settings.borderRadius.DEFAULT};\n`;
  }
  
  if (settings.boxShadow?.DEFAULT) {
    css += `  --box-shadow: ${settings.boxShadow.DEFAULT};\n`;
  }
  
  css += '}\n';
  
  return css;
}

/**
 * Utility functions for color manipulation
 * 
 * Note: These are simplified versions. In a real implementation,
 * we would use a library like chroma.js or color2k for proper color manipulation.
 */

/**
 * Lighten a hex color
 * 
 * @param color The hex color to lighten
 * @param amount The amount to lighten (0-1)
 * @returns Lightened hex color
 */
function lightenColor(color: string, amount: number): string {
  // Simple implementation for demo purposes
  // Just adds white transparency to make it lighter
  return color + Math.round(amount * 100).toString(16);
}

/**
 * Darken a hex color
 * 
 * @param color The hex color to darken
 * @param amount The amount to darken (0-1)
 * @returns Darkened hex color
 */
function darkenColor(color: string, amount: number): string {
  // Simple implementation for demo purposes
  // Just adds black transparency to make it darker
  return color + Math.round(amount * 100).toString(16);
}

/**
 * Multiply a size by a factor
 * 
 * @param size The size (with units)
 * @param factor The factor to multiply by
 * @returns Multiplied size
 */
function multiplySize(size: string, factor: number): string {
  // Parse the size to separate the value and unit
  const match = size.match(/^([\d.]+)([a-z%]*)$/);
  
  if (!match) {
    return size;
  }
  
  const [, value, unit] = match;
  const multiplied = parseFloat(value) * factor;
  
  return `${multiplied}${unit}`;
}
