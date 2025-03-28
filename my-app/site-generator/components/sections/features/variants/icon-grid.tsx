import React from 'react';
import { FeaturesProps, FeatureItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Icon Grid Features Variant
 * 
 * A grid of features with prominent icons and minimal text.
 */
export const IconGridFeatures: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  columns = 4,
  background = 'light',
  spacing = 'normal',
  cta,
  className,
  children,
  ...props
}) => {
  // Calculate grid columns class
  const gridColumnsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2 md:grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
  }[columns] || 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

  // Set spacing based on prop
  const spacingClass = {
    tight: 'gap-4',
    normal: 'gap-6 lg:gap-8',
    loose: 'gap-8 lg:gap-12'
  }[spacing] || 'gap-6 lg:gap-8';

  // Set background styles
  const bgClass = {
    light: 'bg-background',
    dark: 'bg-gray-900 text-white',
    colored: 'bg-primary/10',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    none: ''
  }[background] || 'bg-background';

  // Section padding
  const sectionPadding = 'py-12 md:py-16 lg:py-24';

  return (
    <section 
      className={cn(
        sectionPadding,
        bgClass,
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-muted-foreground">
              {subheading}
            </p>
          )}
        </div>

        {/* Features Icon Grid */}
        <div className={cn('grid', gridColumnsClass, spacingClass)}>
          {features.map((feature, index) => (
            <IconFeatureItem
              key={index}
              feature={feature}
            />
          ))}
        </div>

        {/* Optional CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <a
              href={cta.href}
              className={cn(
                'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors',
                cta.variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
                cta.variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
                cta.variant === 'outline' && 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                cta.variant === 'link' && 'text-primary underline-offset-4 hover:underline',
                !cta.variant && 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
            >
              {cta.text}
            </a>
          </div>
        )}

        {/* Additional content */}
        {children}
      </div>
    </section>
  );
};

/**
 * Icon feature item component
 */
const IconFeatureItem: React.FC<{
  feature: FeatureItemProps;
}> = ({ feature }) => {
  return (
    <div className={cn(
      'flex flex-col items-center text-center',
      feature.className
    )}>
      {/* Icon */}
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
        {feature.icon ? (
          <div className="w-12 h-12 flex items-center justify-center text-3xl">
            {feature.icon}
          </div>
        ) : (
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m8 12 3 3 5-5" />
          </svg>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-1">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {feature.description}
      </p>
      {feature.cta && (
        <a
          href={feature.cta.href}
          className="mt-3 text-sm text-primary font-medium inline-flex items-center hover:underline"
        >
          {feature.cta.text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default IconGridFeatures;
