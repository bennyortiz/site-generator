import React from 'react';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import { VariantMetadata } from '../../engine/enhanced-component-registry';
import { cn } from '../../utils/cn';

interface VariantSelectorProps {
  /**
   * Available variants to choose from
   */
  variants: VariantMetadata[];
  
  /**
   * Currently selected variant ID
   */
  selectedVariant: string;
  
  /**
   * Handle variant selection
   */
  onSelectVariant: (variantId: string) => void;
  
  /**
   * Optional title for the selector
   */
  title?: string;
  
  /**
   * Optional description for the selector
   */
  description?: string;
  
  /**
   * Layout style: 'grid' or 'list'
   * @default 'grid'
   */
  layout?: 'grid' | 'list';
}

/**
 * Component for selecting section/block/element variants
 */
const VariantSelector: React.FC<VariantSelectorProps> = ({
  variants,
  selectedVariant,
  onSelectVariant,
  title = 'Select a Variant',
  description,
  layout = 'grid'
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, variantId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectVariant(variantId);
    }
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}
      
      <div
        className={cn(
          "gap-4",
          layout === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "flex flex-col space-y-4"
        )}
      >
        {variants.map((variant) => (
          <div
            key={variant.id}
            role="button"
            tabIndex={0}
            aria-pressed={selectedVariant === variant.id}
            className={cn(
              "cursor-pointer group transition-all duration-200 rounded-xl overflow-hidden",
              "border-2",
              selectedVariant === variant.id 
                ? "border-primary shadow-sm" 
                : "border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            )}
            onClick={() => onSelectVariant(variant.id)}
            onKeyDown={(e) => handleKeyDown(e, variant.id)}
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
              {variant.thumbnail ? (
                <img
                  src={variant.thumbnail}
                  alt={variant.name}
                  className={cn(
                    "w-full h-full object-cover",
                    "transition-transform duration-300 group-hover:scale-105"
                  )}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400 dark:text-gray-600 text-sm">
                    No preview
                  </span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-4 bg-white dark:bg-gray-900">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {variant.name}
                </h4>
                
                {selectedVariant === variant.id && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    <IconCheck className="mr-1 h-3 w-3" />
                    Selected
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
                {variant.description}
              </p>
              
              {variant.tags && variant.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {variant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <button
                className={cn(
                  "mt-3 text-sm font-medium flex items-center",
                  "transition-colors",
                  selectedVariant === variant.id
                    ? "text-primary"
                    : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectVariant(variant.id);
                }}
              >
                {selectedVariant === variant.id ? "Selected" : "Select"} 
                <IconArrowRight className="ml-1 h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
