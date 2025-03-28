import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';
import { TabsProps, TabItemProps } from '../types';

/**
 * Boxed Tabs Variant Component
 * 
 * Tabbed interface with each tab having a boxed appearance
 */
const BoxedTabs: React.FC<TabsProps> = ({ 
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
      <div className="flex flex-wrap mb-4 border-b border-gray-200">
        {items.map((item: TabItemProps, index: number) => (
          <button
            key={index}
            className={cn(
              'px-4 py-2 text-sm font-medium border-t border-l border-r rounded-t-md transition-colors -mb-px',
              activeTab === index 
                ? 'bg-white border-gray-200 text-blue-600' 
                : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100',
              index === 0 ? 'rounded-tl-md' : '',
              index === items.length - 1 ? 'rounded-tr-md' : '',
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
      
      <div className="mt-4 bg-white border border-gray-200 rounded-md p-4">
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

export default BoxedTabs;
