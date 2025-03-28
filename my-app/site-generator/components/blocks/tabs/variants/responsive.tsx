import React, { useState, useEffect } from 'react';
import { cn } from '../../../../utils/cn';
import { TabsProps, TabItemProps } from '../types';

/**
 * Responsive Tabs Variant Component
 * 
 * Tabs that automatically adjust to available space on different devices
 */
const ResponsiveTabs: React.FC<TabsProps> = ({ 
  items, 
  defaultIndex = 0, 
  activeIndex, 
  onChange,
  className 
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultIndex);
  const [isCompact, setIsCompact] = useState(false);
  const activeTab = activeIndex !== undefined ? activeIndex : internalActiveTab;

  // Check window width and determine if we should use compact mode
  useEffect(() => {
    const checkWidth = () => {
      setIsCompact(window.innerWidth < 640); // sm breakpoint
    };
    
    // Initial check
    checkWidth();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkWidth);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

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
      {/* Desktop: Horizontal tabs for larger screens */}
      {!isCompact ? (
        <div className="hidden sm:flex border-b border-gray-200 mb-4">
          {items.map((item: TabItemProps, index: number) => (
            <button
              key={index}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                activeTab === index 
                  ? 'border-b-2 border-blue-600 text-blue-600 -mb-px' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50',
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
      ) : (
        /* Mobile: Dropdown selector for smaller screens */
        <div className="sm:hidden mb-4">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={activeTab}
            onChange={(e) => handleTabChange(parseInt(e.target.value))}
          >
            {items.map((item: TabItemProps, index: number) => (
              <option key={index} value={index} disabled={item.disabled}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {/* Tab content */}
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

export default ResponsiveTabs;
