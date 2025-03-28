'use client';

import React from 'react';
import ThemePresetSelector from './ThemePresetSelector';

interface ThemePresetPanelProps {
  active?: boolean;
}

const ThemePresetPanel: React.FC<ThemePresetPanelProps> = ({ active = true }) => {
  if (!active) return null;
  
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Theme Presets</h2>
        <p className="text-muted-foreground">
          Choose from pre-designed theme presets or create your own custom theme.
        </p>
      </div>
      
      <ThemePresetSelector />
      
      <div className="mt-10 pt-6 border-t">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Advanced Customization</h3>
          <button className="text-sm text-primary hover:underline">
            Show advanced options
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Fine-tune colors, typography, spacing, and other design elements for a truly custom look.
        </p>
      </div>
    </div>
  );
};

export default ThemePresetPanel;
