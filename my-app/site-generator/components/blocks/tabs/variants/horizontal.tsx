import React, { useState, useId } from 'react';
import { TabsProps, TabItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Horizontal Tabs Variant
 * 
 * Standard horizontal tabs with content displayed below the tabs.
 */
export const HorizontalTabs: React.FC<TabsProps> = ({
  items,
  defaultIndex = 0,
  activeIndex,
  onChange,
  variant = 'default',
  fullWidth = false,
  align = 'start',
  centered = false,
  equalHeight = false,
  className,
  tabListClassName,
  tabPanelClassName,
  ...props
}) => {
  // Generate unique IDs for items that don't have one
  const idPrefix = useId();
  
  // State to track active tab (controlled or uncontrolled)
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);
  
  // Use the provided activeIndex if it's controlled
  const currentIndex = activeIndex !== undefined ? activeIndex : activeTabIndex;
  
  // Handle tab click
  const handleTabClick = (index: number) => {
    if (onChange) {
      onChange(index);
    }
    
    if (activeIndex === undefined) {
      setActiveTabIndex(index);
    }
  };

  // Tab variant styles
  const variantStyles = {
    default: {
      tabList: 'flex border-b',
      tab: (isActive: boolean) => cn(
        'px-4 py-2 font-medium',
        isActive 
          ? 'text-primary border-b-2 border-primary -mb-px' 
          : 'text-muted-foreground hover:text-foreground',
        'transition-all'
      )
    },
    underlined: {
      tabList: 'flex border-b',
      tab: (isActive: boolean) => cn(
        'px-4 py-2 font-medium',
        isActive 
          ? 'text-primary border-b-2 border-primary -mb-px' 
          : 'text-muted-foreground hover:text-foreground',
        'transition-all'
      )
    },
    pills: {
      tabList: 'flex space-x-1',
      tab: (isActive: boolean) => cn(
        'px-4 py-2 rounded-full font-medium',
        isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted',
        'transition-all'
      )
    },
    boxed: {
      tabList: 'flex',
      tab: (isActive: boolean) => cn(
        'px-4 py-2 font-medium border-t border-l border-r rounded-t-md',
        isActive 
          ? 'bg-card text-foreground border-border' 
          : 'bg-muted text-muted-foreground hover:text-foreground border-transparent',
        'transition-all'
      )
    }
  };

  // Apply variant styles with fallback to default
  const tabVariant = variantStyles[variant] || variantStyles.default;

  // Apply alignment styles 
  const alignmentClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end'
  }[align] || 'justify-start';

  // Apply full width styles if needed
  const fullWidthClass = fullWidth ? 'w-full' : '';
  const tabClass = fullWidth ? 'flex-1 text-center' : '';

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Tab List */}
      <div 
        className={cn(
          tabVariant.tabList, 
          alignmentClass,
          centered && 'justify-center',
          tabListClassName
        )}
        role="tablist"
      >
        {items.map((item, index) => {
          const itemId = item.id || `${idPrefix}-tab-${index}`;
          const isActive = currentIndex === index;
          const panelId = `${itemId}-panel`;
          
          return (
            <button
              key={itemId}
              id={itemId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !item.disabled && handleTabClick(index)}
              className={cn(
                tabVariant.tab(isActive),
                tabClass,
                item.disabled && 'opacity-50 cursor-not-allowed',
                item.className
              )}
              disabled={item.disabled}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-2">{item.icon}</span>
                )}
                {item.title}
                {item.badge && (
                  <span className="ml-2">{item.badge}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Tab Panels */}
      <div className={cn('mt-4', tabPanelClassName)}>
        {items.map((item, index) => {
          const itemId = item.id || `${idPrefix}-tab-${index}`;
          const isActive = currentIndex === index;
          const panelId = `${itemId}-panel`;
          
          if (!isActive && !equalHeight) {
            return null;
          }
          
          return (
            <div
              key={panelId}
              id={panelId}
              role="tabpanel"
              aria-labelledby={itemId}
              tabIndex={0}
              hidden={!isActive}
              className={cn(
                'outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md',
                !isActive && 'hidden',
                equalHeight && 'absolute inset-0'
              )}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalTabs;
