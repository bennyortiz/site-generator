'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemePreset } from './theme-presets/types';
import { themePresetManager, loadCustomPresets, saveCustomPreset, createCustomPreset } from './theme-presets';

type Theme = 'light' | 'dark' | 'system';

interface EnhancedThemeContextType {
  // Basic theme mode (light/dark/system)
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Theme preset functionality
  currentPreset?: ThemePreset;
  presets: ThemePreset[];
  applyPreset: (preset: ThemePreset) => void;
  applyPresetById: (presetId: string) => boolean;
  createNewPreset: (name: string, description: string, basePreset?: ThemePreset) => ThemePreset;
  savePreset: (preset: ThemePreset) => void;
  getCategoryPresets: (category: string) => ThemePreset[];
}

const EnhancedThemeContext = createContext<EnhancedThemeContextType | undefined>(undefined);

export function EnhancedThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [currentPreset, setCurrentPreset] = useState<ThemePreset | undefined>();
  const [presets, setPresets] = useState<ThemePreset[]>([]);
  
  // Initialize presets
  useEffect(() => {
    // Load presets including any custom ones from localStorage
    loadCustomPresets();
    setPresets(themePresetManager.getAllPresets());
    
    // Set default preset if none selected (professional preset)
    if (!currentPreset) {
      const defaultPreset = themePresetManager.getPresetById('professional-services');
      if (defaultPreset) {
        setCurrentPreset(defaultPreset);
      }
    }
  }, []);
  
  // Load saved theme preference
  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Default to system preference if no stored preference
      setTheme('system');
    }
    
    // Check for stored preset preference
    const storedPresetId = localStorage.getItem('currentPresetId');
    if (storedPresetId) {
      const preset = themePresetManager.getPresetById(storedPresetId);
      if (preset) {
        setCurrentPreset(preset);
      }
    }
  }, []);
  
  // Apply theme mode
  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);

    // Apply theme class to document
    const root = window.document.documentElement;
    root.classList.remove('dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
      if (systemTheme === 'dark') root.classList.add('dark');
    } else if (theme === 'dark') {
      root.classList.add('dark');
    }
  }, [theme]);
  
  // Apply current preset CSS variables
  useEffect(() => {
    if (!currentPreset) return;
    
    // Store current preset ID
    localStorage.setItem('currentPresetId', currentPreset.id);
    
    // Apply the preset by setting CSS variables
    const root = window.document.documentElement;
    
    // Helper function to set CSS variables
    const setCSSVars = (prefix: string, values: Record<string, string>) => {
      Object.entries(values).forEach(([key, value]) => {
        root.style.setProperty(`--${prefix}-${key}`, value);
      });
    };
    
    // Apply color variables
    const colors = theme === 'dark' ? currentPreset.colors.dark : currentPreset.colors.light;
    setCSSVars('color', colors as unknown as Record<string, string>);
    
    // Apply typography variables
    // Fonts
    Object.entries(currentPreset.typography.fontFamily).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
    
    // Font sizes would require more complex handling as they're arrays with objects
    // For now, we'll set them as generic variables
    Object.entries(currentPreset.typography.fontSize).forEach(([key, [size]]) => {
      root.style.setProperty(`--font-size-${key}`, size as string);
    });
    
    // Apply border radius
    Object.entries(currentPreset.borders.borderRadius).forEach(([key, value]) => {
      key = key === 'DEFAULT' ? 'default' : key;
      root.style.setProperty(`--radius-${key}`, value);
    });
    
    // Apply shadows
    Object.entries(currentPreset.borders.boxShadow).forEach(([key, value]) => {
      key = key === 'DEFAULT' ? 'default' : key;
      root.style.setProperty(`--shadow-${key}`, value);
    });
    
    // Apply custom properties if any
    if (currentPreset.customProperties) {
      Object.entries(currentPreset.customProperties).forEach(([key, value]) => {
        // Handle nested objects
        if (typeof value === 'object' && value !== null) {
          Object.entries(value as Record<string, any>).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'string') {
              root.style.setProperty(`--${key}-${subKey}`, subValue);
            }
          });
        } 
        // Handle direct string values
        else if (typeof value === 'string') {
          root.style.setProperty(`--${key}`, value);
        }
      });
    }
  }, [currentPreset, theme]);
  
  // Apply a preset
  const applyPreset = (preset: ThemePreset) => {
    setCurrentPreset(preset);
  };
  
  // Apply a preset by ID
  const applyPresetById = (presetId: string): boolean => {
    const preset = themePresetManager.getPresetById(presetId);
    if (preset) {
      setCurrentPreset(preset);
      return true;
    }
    return false;
  };
  
  // Create a new custom preset
  const createNewPreset = (name: string, description: string, basePreset?: ThemePreset): ThemePreset => {
    const preset = createCustomPreset(name, description, basePreset);
    return preset;
  };
  
  // Save a preset
  const savePreset = (preset: ThemePreset) => {
    saveCustomPreset(preset);
    setPresets(themePresetManager.getAllPresets());
  };
  
  // Get presets by category
  const getCategoryPresets = (category: string) => {
    return themePresetManager.getPresetsByCategory(category as any);
  };
  
  return (
    <EnhancedThemeContext.Provider 
      value={{ 
        theme, 
        setTheme,
        currentPreset,
        presets,
        applyPreset,
        applyPresetById,
        createNewPreset,
        savePreset,
        getCategoryPresets
      }}
    >
      {children}
    </EnhancedThemeContext.Provider>
  );
}

export function useEnhancedTheme(): EnhancedThemeContextType {
  const context = useContext(EnhancedThemeContext);
  if (context === undefined) {
    throw new Error('useEnhancedTheme must be used within an EnhancedThemeProvider');
  }
  return context;
}
