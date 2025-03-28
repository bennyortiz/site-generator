import React from 'react';
import { SectionProps } from '../types';
import { cn } from '../../../utils/cn';

/**
 * Default Variant for the Section
 * 
 * This is the standard implementation with a centered layout.
 */
const DefaultVariant: React.FC<SectionProps> = ({
  heading,
  subheading,
  background = 'light',
  spacing = 'normal',
  className,
  id,
  cta,
  children,
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
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-4">
            {heading}
          </h2>
        )}
        
        {subheading && (
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            {subheading}
          </p>
        )}
        
        {/* Main content area */}
        <div className="mt-8">
          {children}
        </div>
        
        {/* Call to action button if provided */}
        {cta && (
          <div className="mt-8 text-center">
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
    </section>
  );
};

export default DefaultVariant;
