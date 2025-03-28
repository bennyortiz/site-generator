/**
 * Theme Preset Types
 * 
 * Defines the types for theme presets in the site generator.
 */

/**
 * Color Palette Definition
 * 
 * Defines the color values for a theme.
 */
export interface ColorPalette {
  // Primary colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryForeground: string;
  
  // Secondary colors
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryForeground: string;
  
  // Semantic colors
  success: string;
  warning: string;
  danger: string;
  info: string;
  
  // Background colors
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  
  // UI colors
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
}

/**
 * Typography Settings
 * 
 * Defines the typography settings for a theme.
 */
export interface TypographySettings {
  // Font families
  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
  };
  
  // Font weights
  fontWeight: {
    thin: number;
    extralight: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  
  // Font sizes (with line heights)
  fontSize: {
    xs: [string, { lineHeight: string }];
    sm: [string, { lineHeight: string }];
    base: [string, { lineHeight: string }];
    lg: [string, { lineHeight: string }];
    xl: [string, { lineHeight: string }];
    '2xl': [string, { lineHeight: string }];
    '3xl': [string, { lineHeight: string }];
    '4xl': [string, { lineHeight: string }];
    '5xl': [string, { lineHeight: string }];
    '6xl': [string, { lineHeight: string }];
    '7xl': [string, { lineHeight: string }];
    '8xl': [string, { lineHeight: string }];
    '9xl': [string, { lineHeight: string }];
  };
  
  // Letter spacing
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

/**
 * Spacing Settings
 * 
 * Defines the spacing settings for a theme.
 */
export interface SpacingSettings {
  // Common spacing values
  spacing: Record<string, string>;
  
  // Margin and padding presets
  margin: Record<string, string>;
  padding: Record<string, string>;
  
  // Gap presets
  gap: Record<string, string>;
}

/**
 * Border and Radius Settings
 * 
 * Defines the border and radius settings for a theme.
 */
export interface BorderSettings {
  // Border radiuses
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  
  // Border widths
  borderWidth: {
    DEFAULT: string;
    '0': string;
    '2': string;
    '4': string;
    '8': string;
  };
  
  // Box shadows
  boxShadow: {
    none: string;
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
  };
}

/**
 * Theme Preset
 * 
 * Represents a complete theme preset.
 */
export interface ThemePreset {
  // Metadata
  id: string;
  name: string;
  description: string;
  category: ThemeCategory;
  tags: string[];
  thumbnail?: string;
  
  // Theme settings
  colors: {
    light: ColorPalette;
    dark: ColorPalette;
  };
  typography: TypographySettings;
  spacing: SpacingSettings;
  borders: BorderSettings;
  
  // Additional custom properties
  customProperties?: Record<string, any>;
}

/**
 * Theme Category
 * 
 * Categories for organizing themes.
 */
export type ThemeCategory = 
  | 'professional' 
  | 'creative' 
  | 'technical' 
  | 'minimal' 
  | 'vibrant'
  | 'custom';

/**
 * Theme Preset Manager
 * 
 * Interface for managing theme presets.
 */
export interface ThemePresetManager {
  // Get all available presets
  getAllPresets: () => ThemePreset[];
  
  // Get presets by category
  getPresetsByCategory: (category: ThemeCategory) => ThemePreset[];
  
  // Get a preset by ID
  getPresetById: (id: string) => ThemePreset | undefined;
  
  // Apply a preset to the current theme
  applyPreset: (preset: ThemePreset) => void;
  
  // Create a custom preset from the current theme
  createCustomPreset: (name: string, description: string) => ThemePreset;
  
  // Save a custom preset
  saveCustomPreset: (preset: ThemePreset) => void;
}
