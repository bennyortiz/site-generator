import { ThemePreset, ThemePresetManager, ThemeCategory } from './types';
import professionalPreset from './professional-preset';
import creativePreset from './creative-preset';
import techPreset from './tech-preset';

/**
 * Available Theme Presets
 * 
 * Collection of all available theme presets.
 */
export const themePresets: ThemePreset[] = [
  professionalPreset,
  creativePreset,
  techPreset,
  // Additional presets will be added here
];

/**
 * Get all available theme presets
 */
export const getAllPresets = (): ThemePreset[] => {
  return themePresets;
};

/**
 * Get a theme preset by ID
 * 
 * @param id The ID of the preset to find
 */
export const getPresetById = (id: string): ThemePreset | undefined => {
  return themePresets.find(preset => preset.id === id);
};

/**
 * Get theme presets by category
 * 
 * @param category The category to filter by
 */
export const getPresetsByCategory = (category: ThemeCategory): ThemePreset[] => {
  return themePresets.filter(preset => preset.category === category);
};

/**
 * Get custom theme presets
 * 
 * These are presets created by the user
 */
export const getCustomPresets = (): ThemePreset[] => {
  return getPresetsByCategory('custom');
};

/**
 * Save a custom theme preset to localStorage
 * 
 * @param preset The custom preset to save
 */
export const saveCustomPreset = (preset: ThemePreset): void => {
  if (preset.category !== 'custom') {
    throw new Error('Only custom presets can be saved');
  }
  
  try {
    // Get existing custom presets from localStorage
    const storedPresets = localStorage.getItem('customThemePresets');
    let customPresets: ThemePreset[] = storedPresets ? JSON.parse(storedPresets) : [];
    
    // Check if preset with this ID already exists
    const existingIndex = customPresets.findIndex(p => p.id === preset.id);
    
    if (existingIndex >= 0) {
      // Update existing preset
      customPresets[existingIndex] = preset;
    } else {
      // Add new preset
      customPresets.push(preset);
    }
    
    // Save back to localStorage
    localStorage.setItem('customThemePresets', JSON.stringify(customPresets));
    
    // Add to the runtime collection if not already there
    if (!themePresets.some(p => p.id === preset.id)) {
      themePresets.push(preset);
    }
  } catch (error) {
    console.error('Failed to save custom theme preset', error);
    throw new Error('Failed to save custom theme preset');
  }
};

/**
 * Load custom presets from localStorage
 * 
 * This should be called during initialization
 */
export const loadCustomPresets = (): void => {
  try {
    const storedPresets = localStorage.getItem('customThemePresets');
    if (storedPresets) {
      const customPresets: ThemePreset[] = JSON.parse(storedPresets);
      
      // Remove any existing custom presets
      const standardPresets = themePresets.filter(p => p.category !== 'custom');
      
      // Add the custom presets
      themePresets.length = 0;
      themePresets.push(...standardPresets, ...customPresets);
    }
  } catch (error) {
    console.error('Failed to load custom theme presets', error);
  }
};

/**
 * Delete a custom theme preset
 * 
 * @param id The ID of the custom preset to delete
 */
export const deleteCustomPreset = (id: string): void => {
  try {
    // Get existing custom presets from localStorage
    const storedPresets = localStorage.getItem('customThemePresets');
    if (!storedPresets) return;
    
    let customPresets: ThemePreset[] = JSON.parse(storedPresets);
    
    // Filter out the preset to delete
    customPresets = customPresets.filter(p => p.id !== id);
    
    // Save back to localStorage
    localStorage.setItem('customThemePresets', JSON.stringify(customPresets));
    
    // Remove from the runtime collection
    const presetIndex = themePresets.findIndex(p => p.id === id);
    if (presetIndex >= 0) {
      themePresets.splice(presetIndex, 1);
    }
  } catch (error) {
    console.error('Failed to delete custom theme preset', error);
    throw new Error('Failed to delete custom theme preset');
  }
};

/**
 * Create a new custom theme preset
 * 
 * @param name The name of the new preset
 * @param description A description of the preset
 * @param basePreset Optional preset to use as a base
 */
export const createCustomPreset = (
  name: string, 
  description: string,
  basePreset?: ThemePreset
): ThemePreset => {
  // Generate a unique ID
  const id = `custom-${Date.now()}`;
  
  // Start with a base preset or create a new one
  const preset: ThemePreset = basePreset ? { ...basePreset } : {
    id,
    name,
    description,
    category: 'custom',
    tags: ['custom'],
    colors: {
      light: {
        // Default color palette
        primary: '#3b82f6',
        primaryLight: '#60a5fa',
        primaryDark: '#2563eb',
        primaryForeground: '#ffffff',
        secondary: '#f97316',
        secondaryLight: '#fb923c',
        secondaryDark: '#ea580c',
        secondaryForeground: '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
        background: '#ffffff',
        foreground: '#1f2937',
        card: '#ffffff',
        cardForeground: '#1f2937',
        popover: '#ffffff',
        popoverForeground: '#1f2937',
        muted: '#f3f4f6',
        mutedForeground: '#6b7280',
        accent: '#f9fafb',
        accentForeground: '#1f2937',
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#d1d5db',
      },
      dark: {
        // Default dark mode colors
        primary: '#3b82f6',
        primaryLight: '#60a5fa',
        primaryDark: '#2563eb',
        primaryForeground: '#ffffff',
        secondary: '#f97316',
        secondaryLight: '#fb923c',
        secondaryDark: '#ea580c',
        secondaryForeground: '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
        background: '#1f2937',
        foreground: '#f9fafb',
        card: '#1f2937',
        cardForeground: '#f9fafb',
        popover: '#1f2937',
        popoverForeground: '#f9fafb',
        muted: '#374151',
        mutedForeground: '#9ca3af',
        accent: '#374151',
        accentForeground: '#f9fafb',
        border: '#4b5563',
        input: '#4b5563',
        ring: '#1f2937',
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
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      margin: {
        auto: 'auto',
      },
      padding: {},
      gap: {},
    },
    borders: {
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
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
    customProperties: {},
  };
  
  // Override with new metadata
  preset.id = id;
  preset.name = name;
  preset.description = description;
  preset.category = 'custom';
  preset.tags = [...(preset.tags || []), 'custom'];
  
  return preset;
};

/**
 * Theme Preset Manager
 * 
 * Provides functionality for managing theme presets.
 */
export const themePresetManager: ThemePresetManager = {
  getAllPresets,
  getPresetsByCategory,
  getPresetById,
  
  // These are placeholders; the actual implementations will be in the ThemeContext
  applyPreset: (preset: ThemePreset) => {
    console.log('Applying preset:', preset.name);
    // This will be implemented in the ThemeContext
  },
  
  createCustomPreset: (name: string, description: string) => {
    const preset = createCustomPreset(name, description);
    // Would normally save this here, but that will be handled in the ThemeContext
    return preset;
  },
  
  saveCustomPreset: (preset: ThemePreset) => {
    saveCustomPreset(preset);
  }
};

export default themePresetManager;
