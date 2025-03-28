'use client';

import React, { useState } from 'react';
import { cn } from '@/site-generator/utils/cn';
import {
  IconTemplate,
  IconLayoutGrid,
  IconArticle,
  IconPalette,
  IconEye,
  IconCode,
  IconSettings,
  IconChevronRight,
  IconAppWindow,
  IconDeviceLaptop
} from '@tabler/icons-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface StudioSidebarProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  className?: string;
}

const StudioSidebar: React.FC<StudioSidebarProps> = ({
  currentStep,
  onStepChange,
  className
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Define sidebar navigation items
  const sidebarItems: SidebarItem[] = [
    { id: 'template', label: 'Template', icon: <IconTemplate className="h-5 w-5" /> },
    { id: 'layout', label: 'Layout', icon: <IconLayoutGrid className="h-5 w-5" /> },
    { id: 'content', label: 'Content', icon: <IconArticle className="h-5 w-5" /> },
    { id: 'theme', label: 'Theme', icon: <IconPalette className="h-5 w-5" /> },
    { id: 'preview', label: 'Preview', icon: <IconEye className="h-5 w-5" /> },
    { id: 'code', label: 'Code', icon: <IconCode className="h-5 w-5" />, disabled: true },
    { id: 'settings', label: 'Settings', icon: <IconSettings className="h-5 w-5" />, disabled: true }
  ];
  
  // Status indicators for steps
  const getStepStatus = (index: number) => {
    if (index === currentStep) return 'current';
    if (index < currentStep) return 'completed';
    return 'upcoming';
  };
  
  return (
    <div className={cn(
      "h-full flex flex-col bg-background border-r",
      isCollapsed ? "w-16" : "w-64",
      "transition-all duration-300 ease-in-out",
      className
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-center p-4 border-b",
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed && (
          <div className="flex items-center">
            <IconDeviceLaptop className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold text-lg">Site Builder</span>
          </div>
        )}
        {isCollapsed && (
          <IconDeviceLaptop className="h-6 w-6 text-primary" />
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <IconChevronRight className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed ? "rotate-180" : ""
          )} />
        </button>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => !item.disabled && onStepChange(index)}
                disabled={item.disabled}
                className={cn(
                  "w-full flex items-center rounded-md p-2",
                  "transition-colors duration-200",
                  getStepStatus(index) === 'current' && "bg-primary text-primary-foreground",
                  getStepStatus(index) === 'completed' && "text-foreground hover:bg-accent",
                  getStepStatus(index) === 'upcoming' && !item.disabled && "text-muted-foreground hover:bg-accent hover:text-foreground",
                  item.disabled && "opacity-40 cursor-not-allowed"
                )}
              >
                <span className="flex-shrink-0">
                  {item.icon}
                </span>
                
                {!isCollapsed && (
                  <>
                    <span className="ml-3">{item.label}</span>
                    
                    {/* Status indicator */}
                    <span className="ml-auto">
                      {getStepStatus(index) === 'completed' && (
                        <svg className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {getStepStatus(index) === 'current' && (
                        <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                      )}
                    </span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className={cn(
        "border-t p-4",
        isCollapsed ? "flex justify-center" : ""
      )}>
        <button
          className={cn(
            "flex items-center rounded-md w-full",
            isCollapsed ? "justify-center p-2" : "px-3 py-2",
            "bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          )}
        >
          <IconAppWindow className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Export Project</span>}
        </button>
      </div>
    </div>
  );
};

export default StudioSidebar;
