import React, { useState, useId } from 'react';
import { TabsProps, TabItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Vertical Tabs Variant
 * 
 * Tabs displayed vertically on the left with content on the right.
 */
export const VerticalTabs: React.FC<TabsProps> = ({
  items,
  defaultIndex = 0,
  activeIndex,
  onChange,
  variant = 'default',
  fullWidth = false,
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
      tabList: 'flex flex-col border-r',
      tab: (isActive: boolean) => cn(
        'py-2 px-4 text-left font-medium',
        isActive 
          ? 'bg-background text-primary border-r-2 border-primary -mr-px' 
          : 'text-muted-foreground hover:text-foreground bg-muted/30',
        'transition-all'
      )
    },
    underlined: {
      tabList: 'flex flex-col border-r',
      tab: (isActive: boolean) => cn(
        'py-2 px-4 text-left font-medium',
        isActive 
          ? 'text-primary border-r-2 border-primary -mr-px' 
          : 'text-muted-foreground hover:text-foreground',
        'transition-all'
      )
    },
    pills: {
      tabList: 'flex flex-col space-y-1 pr-2',
      tab: (isActive: boolean) => cn(
        'py-2 px-4 text-left font-medium rounded-md',
        isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted',
        'transition-all'
      )
    },
    boxed: {
      tabList: 'flex flex-col',
      tab: (isActive: boolean) => cn(
        'py-2 px-4 text-left font-medium border-t border-b border-l rounded-l-md',
        isActive 
          ? 'bg-card text-foreground border-border' 
          : 'bg-muted text-muted-foreground hover:text-foreground border-transparent',
        'transition-all mb-1'
      )
    }
  };

  // Apply variant styles with fallback to default
  const tabVariant = variantStyles[variant] || variantStyles.default;

  return (
    <div 
      className={cn(
        'flex w-full',
        fullWidth && 'h-full',
        className
      )} 
      {...props}
    >
      {/* Vertical Tab List */}
      <div 
        className={cn(
          tabVariant.tabList,
          'flex-shrink-0',
          tabListClassName
        )}
        role="tablist"
        aria-orientation="vertical"
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
                item.disabled && 'opacity-50 cursor-not-allowed',
                item.className
              )}
              disabled={item.disabled}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-2 flex-shrink-0">{item.icon}</span>
                )}
                <span>{item.title}</span>
                {item.badge && (
                  <span className="ml-2 flex-shrink-0">{item.badge}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Tab Panels */}
      <div className={cn('ml-4 flex-1', tabPanelClassName)}>
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
                equalHeight && 'absolute inset-0',
                fullWidth && 'h-full'
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

export default VerticalTabs;
