'use client';

import React, { useState } from 'react';
import { cn } from '@/site-generator/utils/cn';
import ThemePresetPanel from './ThemePresetPanel';

interface ThemeEditorProps {
  className?: string;
}

const ThemeEditor: React.FC<ThemeEditorProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');
  
  return (
    <div className={cn("p-6", className)}>
      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('presets')}
            className={cn(
              "pb-2 px-1 font-medium text-sm transition-colors relative",
              activeTab === 'presets' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Theme Presets
          </button>
          
          <button
            onClick={() => setActiveTab('custom')}
            className={cn(
              "pb-2 px-1 font-medium text-sm transition-colors relative",
              activeTab === 'custom' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Custom Theme
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-2">
        {/* Theme Presets Panel */}
        <ThemePresetPanel active={activeTab === 'presets'} />
        
        {/* Custom Theme Panel (placeholder for now) */}
        {activeTab === 'custom' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Custom Theme</h2>
              <p className="text-muted-foreground">
                Fine-tune colors, typography, and other design elements to create your custom theme.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Color Customization */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Colors</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Primary Color */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Color</label>
                    <div className="flex gap-2">
                      <input 
                        type="color" 
                        className="w-10 h-10 rounded-md overflow-hidden cursor-pointer"
                        value="#3b82f6"
                      />
                      <input 
                        type="text" 
                        className="flex-1 rounded-md border px-3 py-2"
                        value="#3b82f6"
                      />
                    </div>
                  </div>
                  
                  {/* Secondary Color */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Secondary Color</label>
                    <div className="flex gap-2">
                      <input 
                        type="color" 
                        className="w-10 h-10 rounded-md overflow-hidden cursor-pointer"
                        value="#f97316"
                      />
                      <input 
                        type="text" 
                        className="flex-1 rounded-md border px-3 py-2"
                        value="#f97316"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Typography Customization */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Typography</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Font Family */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Font Family</label>
                    <select className="w-full rounded-md border px-3 py-2">
                      <option>Inter</option>
                      <option>Roboto</option>
                      <option>Open Sans</option>
                      <option>Montserrat</option>
                    </select>
                  </div>
                  
                  {/* Font Size Base */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Base Font Size</label>
                    <select className="w-full rounded-md border px-3 py-2">
                      <option>14px</option>
                      <option>16px</option>
                      <option>18px</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Spacing and Borders */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Spacing & Borders</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Border Radius */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Border Radius</label>
                    <select className="w-full rounded-md border px-3 py-2">
                      <option>None</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  
                  {/* Box Shadow */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Shadow Style</label>
                    <select className="w-full rounded-md border px-3 py-2">
                      <option>None</option>
                      <option>Light</option>
                      <option>Medium</option>
                      <option>Heavy</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="pt-4 flex justify-between">
              <button className="text-sm text-primary underline">Reset to Default</button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Save Custom Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeEditor;
