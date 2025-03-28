import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';
import { TabsProps, TabItemProps } from '../types';

/**
 * Icon Tabs Variant Component
 * 
 * Tabs with icons for more visual navigation
 */
const IconTabs: React.FC<TabsProps> = ({ 
  items, 
  defaultIndex = 0, 
  activeIndex, 
  onChange,
  className 
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultIndex);
  const activeTab = activeIndex !== undefined ? activeIndex : internalActiveTab;

  const handleTabChange = (index: number) => {
    if (onChange) {
      onChange(index);
    }
    if (activeIndex === undefined) {
      setInternalActiveTab(index);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="flex flex-wrap border-b border-gray-200 mb-4">
        {items.map((item: TabItemProps, index: number) => (
          <button
            key={index}
            className={cn(
              'px-4 py-3 text-center flex flex-col items-center gap-1 min-w-[80px] transition-colors',
              activeTab === index 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50',
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
            onClick={() => !item.disabled && handleTabChange(index)}
            aria-selected={activeTab === index}
            role="tab"
            disabled={item.disabled}
          >
            <div className="text-lg">
              {item.icon || (
                // Default icon if none provided
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 12h14M12 5l7 7-7 7" 
                  />
                </svg>
              )}
            </div>
            <span className="text-xs font-medium">{item.title}</span>
            {item.badge && <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">{item.badge}</span>}
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        {items.map((item: TabItemProps, index: number) => (
          <div 
            key={index} 
            className={cn('transition-opacity', {
              'block': activeTab === index,
              'hidden': activeTab !== index
            })}
            role="tabpanel"
            id={item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconTabs;
