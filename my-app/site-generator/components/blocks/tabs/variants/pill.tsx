import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';
import { TabsProps, TabItemProps } from '../types';

/**
 * Pill Tabs Variant Component
 * 
 * A tab layout with pill-shaped backgrounds for a more distinct appearance
 */
const PillTabs: React.FC<TabsProps> = ({ 
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
      <div className="flex flex-wrap gap-2 p-1 mb-4 rounded-full bg-gray-100">
        {items.map((item: TabItemProps, index: number) => (
          <button
            key={index}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-colors',
              activeTab === index 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-700 hover:bg-gray-200',
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
            onClick={() => !item.disabled && handleTabChange(index)}
            aria-selected={activeTab === index}
            role="tab"
            disabled={item.disabled}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.title}
            {item.badge && <span className="ml-2">{item.badge}</span>}
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

export default PillTabs;
