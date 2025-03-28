import React from 'react';
import { FeaturesProps, FeatureItemProps } from '../types';
import { cn } from '../../../../utils/cn';
import Card from '../../../blocks/card';

/**
 * Grid Features Variant
 * 
 * A simple grid layout with for displaying multiple features.
 */
export const GridFeatures: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  columns = 3,
  background = 'light',
  spacing = 'normal',
  dividers = false,
  cta,
  className,
  children,
  ...props
}) => {
  // Calculate grid columns class
  const gridColumnsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-3';

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

        {/* Features Grid */}
        <div className={cn('grid', gridColumnsClass, spacingClass)}>
          {features && features.length > 0 ? features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              divider={dividers}
            />
          )) : (
            // Render placeholders if no features are provided
            Array.from({ length: 3 }).map((_, index) => (
              <FeatureCard 
                key={index} 
                feature={{
                  title: 'Feature placeholder',
                  description: 'This is a placeholder for a feature item. Add content in the inspector.',
                  icon: '✨'
                }} 
                divider={dividers}
              />
            ))
          )}
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
 * Feature Card component for the grid layout
 */
const FeatureCard: React.FC<{ 
  feature: FeatureItemProps; 
  divider?: boolean;
}> = ({ feature, divider }) => {
  return (
    <Card.Feature
      title={feature.title}
      content={feature.description}
      icon={feature.icon}
      className={cn('h-full', feature.className)}
    />
  );
};

export default GridFeatures;
