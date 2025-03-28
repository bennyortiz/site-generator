import React, { useState, useId } from 'react';
import { AccordionProps, AccordionItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Simple Accordion Variant
 * 
 * A clean accordion with minimal styling.
 */
export const SimpleAccordion: React.FC<AccordionProps> = ({
  items,
  type = 'single',
  defaultValue,
  appearance = 'simple',
  className,
  compact = false,
  collapsedIcon,
  expandedIcon,
  ...props
}) => {
  // Generate unique IDs for items that don't have one
  const idPrefix = useId();
  
  // State to track which items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    
    if (type === 'single' && typeof defaultValue === 'string') {
      // If single type, only one item can be open
      items.forEach((item, index) => {
        const itemId = item.id || `${idPrefix}-item-${index}`;
        initialState[itemId] = itemId === defaultValue;
      });
    } else if (type === 'multiple' && Array.isArray(defaultValue)) {
      // If multiple type, multiple items can be open
      items.forEach((item, index) => {
        const itemId = item.id || `${idPrefix}-item-${index}`;
        initialState[itemId] = defaultValue.includes(itemId);
      });
    } else {
      // Default: use the defaultOpen property of each item
      items.forEach((item, index) => {
        const itemId = item.id || `${idPrefix}-item-${index}`;
        initialState[itemId] = !!item.defaultOpen;
      });
    }
    
    return initialState;
  });

  // Toggle an accordion item
  const toggleItem = (itemId: string) => {
    if (type === 'single') {
      // If single type, close all other items
      const newState: Record<string, boolean> = {};
      Object.keys(openItems).forEach(key => {
        newState[key] = key === itemId ? !openItems[itemId] : false;
      });
      setOpenItems(newState);
    } else {
      // If multiple type, just toggle the clicked item
      setOpenItems(prev => ({
        ...prev,
        [itemId]: !prev[itemId]
      }));
    }
  };

  // Default icons for accordion
  const DefaultCollapsedIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="shrink-0 transition-transform duration-200"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
  
  const DefaultExpandedIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="shrink-0 transition-transform duration-200"
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );

  // Appearance styles
  const appearanceStyles = {
    simple: '',
    bordered: 'border rounded-md',
    separated: 'space-y-2',
  };

  return (
    <div 
      className={cn(
        'w-full',
        appearanceStyles[appearance],
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const itemId = item.id || `${idPrefix}-item-${index}`;
        const isOpen = openItems[itemId];
        
        return (
          <div 
            key={itemId}
            className={cn(
              'border-b last:border-b-0',
              appearance === 'separated' && 'border rounded-md',
              item.className
            )}
          >
            <button
              type="button"
              onClick={() => !item.disabled && toggleItem(itemId)}
              className={cn(
                'flex w-full items-center justify-between py-4 font-medium transition-all hover:text-primary',
                compact ? 'px-3' : 'px-4',
                appearance === 'bordered' && !isOpen && 'border-b-0',
                item.disabled && 'cursor-not-allowed opacity-50'
              )}
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={`content-${itemId}`}
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
              
              {isOpen 
                ? (expandedIcon || <DefaultExpandedIcon />)
                : (collapsedIcon || <DefaultCollapsedIcon />)
              }
            </button>
            
            <div
              id={`content-${itemId}`}
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen 
                  ? 'animate-accordion-down' 
                  : 'animate-accordion-up h-0'
              )}
              aria-hidden={!isOpen}
            >
              <div className={cn(
                'pb-4 pt-0',
                compact ? 'px-3' : 'px-4',
              )}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion;
