'use client';

import React, { useState } from 'react';
import { cn } from '@/site-generator/utils/cn';
import SplitView from '@/site-generator/components/ui/split-view';
import { useEnhancedTheme } from '@/site-generator/context/enhanced-theme-context';
import {
  IconMenu2,
  IconX,
  IconPalette,
  IconDeviceDesktop,
  IconDeviceTablet,
  IconDeviceMobile,
  IconSun,
  IconMoon,
  IconLayoutGrid
} from '@tabler/icons-react';

interface ModernLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
  className?: string;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  preview,
  className
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const { theme, setTheme } = useEnhancedTheme();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className={cn("flex h-screen w-full bg-background", className)}>
      {/* Sidebar Toggle for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-background p-2 rounded-md border shadow-sm"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <IconX className="h-5 w-5" />
          ) : (
            <IconMenu2 className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Main Content with SplitView */}
      <SplitView
        leftPanel={
          <div className={cn(
            "h-full flex flex-col",
            isSidebarOpen ? "block" : "hidden lg:block"
          )}>
            {children}
          </div>
        }
        rightPanel={
          <div className="h-full flex flex-col">
            {/* Preview Controls */}
            <div className="flex items-center justify-between p-2 border-b">
              <div className="flex space-x-1">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={cn(
                    "p-1.5 rounded-md",
                    previewDevice === 'desktop' 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent"
                  )}
                  aria-label="Desktop preview"
                >
                  <IconDeviceDesktop className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={cn(
                    "p-1.5 rounded-md",
                    previewDevice === 'tablet' 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent"
                  )}
                  aria-label="Tablet preview"
                >
                  <IconDeviceTablet className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={cn(
                    "p-1.5 rounded-md",
                    previewDevice === 'mobile' 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent"
                  )}
                  aria-label="Mobile preview"
                >
                  <IconDeviceMobile className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="p-1.5 rounded-md hover:bg-accent"
                  aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
                >
                  {theme === 'light' ? (
                    <IconMoon className="h-5 w-5" />
                  ) : (
                    <IconSun className="h-5 w-5" />
                  )}
                </button>
                
                <button
                  className="p-1.5 rounded-md hover:bg-accent"
                  aria-label="Toggle layout options"
                >
                  <IconLayoutGrid className="h-5 w-5" />
                </button>
                
                <button
                  className="p-1.5 rounded-md hover:bg-accent"
                  aria-label="Toggle theme editor"
                >
                  <IconPalette className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Preview Container */}
            <div className="flex-grow overflow-auto p-4 bg-accent/20">
              <div 
                className={cn(
                  "h-full mx-auto bg-background shadow-md rounded-md overflow-auto transition-all duration-300 ease-in-out",
                  previewDevice === 'desktop' && "w-full max-w-[1440px]",
                  previewDevice === 'tablet' && "w-[768px] max-w-full",
                  previewDevice === 'mobile' && "w-[375px] max-w-full"
                )}
              >
                {preview}
              </div>
            </div>
          </div>
        }
        defaultSplit={30}
        minLeftSize={250}
        minRightSize={350}
        className="h-screen"
      />
    </div>
  );
};

export default ModernLayout;
