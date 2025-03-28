import React from 'react';
import { FeaturesProps, FeatureItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Alternating Features Variant
 * 
 * Features shown as alternating left and right sections with images.
 */
export const AlternatingFeatures: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  background = 'light',
  spacing = 'normal',
  cta,
  className,
  children,
  ...props
}) => {
  // Set background styles
  const bgClass = {
    light: 'bg-background',
    dark: 'bg-gray-900 text-white',
    colored: 'bg-primary/10',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    none: ''
  }[background] || 'bg-background';

  // Set spacing between features
  const spacingClass = {
    tight: 'space-y-16',
    normal: 'space-y-24',
    loose: 'space-y-32'
  }[spacing] || 'space-y-24';

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-muted-foreground">
              {subheading}
            </p>
          )}
        </div>

        {/* Alternating Features */}
        <div className={cn(spacingClass)}>
          {features && features.length > 0 ? features.map((feature, index) => (
            <AlternatingFeatureItem 
              key={index} 
              feature={feature}
              reversed={index % 2 === 1}
            />
          )) : (
            // Render placeholders if no features are provided
            Array.from({ length: 2 }).map((_, index) => (
              <AlternatingFeatureItem 
                key={index} 
                feature={{
                  title: 'Feature placeholder',
                  description: 'This is a placeholder for a feature item. Add content in the inspector.',
                  icon: '✨'
                }}
                reversed={index % 2 === 1}
              />
            ))
          )}
        </div>

        {/* Optional CTA */}
        {cta && (
          <div className="mt-16 text-center">
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
 * Alternating feature item component
 */
const AlternatingFeatureItem: React.FC<{
  feature: FeatureItemProps;
  reversed?: boolean;
}> = ({ feature, reversed = false }) => {
  // Default image if none provided
  const imageSrc = feature.image || '/placeholders/feature-image.jpg';

  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center',
      feature.className
    )}>
      {/* Image Column */}
      <div className={cn(
        'order-1',
        reversed ? 'md:order-2' : 'md:order-1'
      )}>
        {feature.image ? (
          <img 
            src={imageSrc} 
            alt={feature.imageAlt || feature.title} 
            className="rounded-lg w-full h-auto object-cover shadow-md"
          />
        ) : (
          <div className="bg-muted rounded-lg w-full aspect-video flex items-center justify-center">
            {feature.icon ? (
              <div className="text-4xl">{feature.icon}</div>
            ) : (
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-muted-foreground"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Content Column */}
      <div className={cn(
        'order-2',
        reversed ? 'md:order-1' : 'md:order-2'
      )}>
        <h3 className="text-2xl font-bold mb-4">
          {feature.title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {feature.description}
        </p>
        {feature.cta && (
          <a
            href={feature.cta.href}
            className="text-primary font-medium inline-flex items-center hover:underline"
          >
            {feature.cta.text}
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
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default AlternatingFeatures;
