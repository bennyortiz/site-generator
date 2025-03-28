'use client';

import React, { useState } from 'react';
import { useEnhancedTheme } from '@/site-generator/context/enhanced-theme-context';
import { ThemePreset, ThemeCategory } from '@/site-generator/context/theme-presets/types';
import { cn } from '@/site-generator/utils/cn';

interface ThemePresetCardProps {
  preset: ThemePreset;
  isActive: boolean;
  onClick: () => void;
}

const ThemePresetCard: React.FC<ThemePresetCardProps> = ({ preset, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative p-4 rounded-lg border cursor-pointer transition-all duration-200",
        "hover:shadow-md hover:border-primary/50",
        isActive ? "border-primary shadow-sm bg-primary/5" : "border-border",
      )}
    >
      {/* Preset thumbnail or color preview */}
      <div className="w-full h-24 mb-4 rounded overflow-hidden bg-card flex items-center justify-center">
        {preset.thumbnail ? (
          <img src={preset.thumbnail} alt={preset.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex">
            <div className="w-1/3 h-full" style={{ backgroundColor: preset.colors.light.primary }}></div>
            <div className="w-1/3 h-full" style={{ backgroundColor: preset.colors.light.secondary }}></div>
            <div className="w-1/3 h-full" style={{ backgroundColor: preset.colors.light.accent }}></div>
          </div>
        )}
      </div>
      
      {/* Preset information */}
      <h3 className="font-medium text-lg">{preset.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{preset.description}</p>
      
      {/* Category badges */}
      <div className="mt-3 flex flex-wrap gap-1">
        <span className="text-xs px-2 py-1 bg-accent rounded-full text-accent-foreground">
          {preset.category}
        </span>
        {preset.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary-foreground"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </div>
  );
};

const ThemePresetSelector: React.FC = () => {
  const { 
    currentPreset, 
    presets, 
    applyPreset, 
    getCategoryPresets 
  } = useEnhancedTheme();
  
  const [selectedCategory, setSelectedCategory] = useState<ThemeCategory>('professional');
  
  // Get presets for the selected category
  const categoryPresets = getCategoryPresets(selectedCategory);
  
  // Categories with labels
  const categories: {id: ThemeCategory; label: string}[] = [
    { id: 'professional', label: 'Professional' },
    { id: 'creative', label: 'Creative' },
    { id: 'technical', label: 'Technical' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'vibrant', label: 'Vibrant' },
    { id: 'custom', label: 'Custom' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Section title */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Theme Presets</h2>
        <p className="text-muted-foreground">
          Choose a preset theme to apply to your site
        </p>
      </div>
      
      {/* Category tabs */}
      <div className="flex space-x-1 border-b">
        {categories.map((category) => {
          // Only show categories that have presets
          const hasPresets = getCategoryPresets(category.id).length > 0;
          if (!hasPresets) return null;
          
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                "border-b-2 -mb-px",
                selectedCategory === category.id 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      
      {/* Presets grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryPresets.map((preset) => (
          <ThemePresetCard 
            key={preset.id}
            preset={preset}
            isActive={currentPreset?.id === preset.id}
            onClick={() => applyPreset(preset)}
          />
        ))}
        
        {categoryPresets.length === 0 && (
          <div className="col-span-3 py-8 text-center text-muted-foreground">
            No presets available for this category
          </div>
        )}
      </div>
      
      {/* Create custom theme */}
      {selectedCategory === 'custom' && (
        <button
          className="mt-4 w-full py-2 px-4 border border-dashed border-border rounded-lg 
                    text-muted-foreground hover:text-foreground hover:border-primary/50 
                    hover:bg-accent transition-colors flex items-center justify-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Create New Theme
        </button>
      )}
    </div>
  );
};

export default ThemePresetSelector;
