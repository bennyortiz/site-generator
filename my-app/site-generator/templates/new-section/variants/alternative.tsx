import React from 'react';
import { SectionProps } from '../types';
import { cn } from '../../../utils/cn';

/**
 * Alternative Variant for the Section
 * 
 * This is an alternative implementation with a two-column layout.
 */
const AlternativeVariant: React.FC<SectionProps> = ({
  heading,
  subheading,
  background = 'light',
  spacing = 'normal',
  className,
  id,
  cta,
  children,
  imageUrl, // This variant expects an image URL
  imageAlt = 'Section image',
  imagePosition = 'right', // 'left' or 'right'
  ...props
}) => {
  // Background class based on the background prop
  const bgClass = {
    'bg-white': background === 'light',
    'bg-gray-900 text-white': background === 'dark',
    'bg-primary-100': background === 'primary',
    'bg-secondary-100': background === 'secondary',
    'bg-gradient-to-r from-primary-500 to-secondary-500 text-white': background === 'gradient',
  };
  
  // Spacing class based on the spacing prop
  const spacingClass = {
    'py-0': spacing === 'none',
    'py-4': spacing === 'small',
    'py-12': spacing === 'normal',
    'py-24': spacing === 'large',
  };
  
  // Determine the order of content and image based on imagePosition
  const contentOrder = imagePosition === 'right' ? 'order-1' : 'order-2';
  const imageOrder = imagePosition === 'right' ? 'order-2' : 'order-1';
  
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        bgClass,
        spacingClass,
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content column */}
          <div className={cn('w-full md:w-1/2', contentOrder)}>
            {heading && (
              <h2 className="text-3xl font-bold mb-4">
                {heading}
              </h2>
            )}
            
            {subheading && (
              <p className="text-xl mb-6">
                {subheading}
              </p>
            )}
            
            {/* Main content area */}
            <div className="mt-4">
              {children}
            </div>
            
            {/* Call to action button if provided */}
            {cta && (
              <div className="mt-8">
                <button
                  className={cn(
                    'px-6 py-2 rounded-md',
                    {
                      'bg-primary-600 text-white hover:bg-primary-700': cta.variant === 'primary' || !cta.variant,
                      'bg-secondary-600 text-white hover:bg-secondary-700': cta.variant === 'secondary',
                      'bg-transparent text-current underline hover:no-underline': cta.variant === 'text',
                    }
                  )}
                  onClick={cta.onClick}
                >
                  {cta.label}
                </button>
              </div>
            )}
          </div>
          
          {/* Image column */}
          <div className={cn('w-full md:w-1/2', imageOrder)}>
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-gray-200 rounded-lg w-full aspect-video flex items-center justify-center">
                <p className="text-gray-500">Image placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeVariant;
