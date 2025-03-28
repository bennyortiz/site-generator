import React from 'react';
import { FeaturesProps, FeatureItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Centered Features Variant
 * 
 * A centered layout with a main feature showcase and surrounding details.
 */
export const CenteredFeatures: React.FC<FeaturesProps> = ({
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

  // Set spacing between elements
  const spacingClass = {
    tight: 'space-y-8',
    normal: 'space-y-12',
    loose: 'space-y-16'
  }[spacing] || 'space-y-12';

  // Section padding
  const sectionPadding = 'py-12 md:py-16 lg:py-24';

  // Get first feature as main feature (if available)
  const mainFeature = features[0];
  const secondaryFeatures = features.slice(1);

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

        {/* Main Feature */}
        {mainFeature && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <MainFeature feature={mainFeature} />
          </div>
        )}

        {/* Secondary Features */}
        {secondaryFeatures.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {secondaryFeatures.map((feature, index) => (
              <SecondaryFeature key={index} feature={feature} />
            ))}
          </div>
        )}

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
 * Main feature component - displayed prominently in the center
 */
const MainFeature: React.FC<{
  feature: FeatureItemProps;
}> = ({ feature }) => {
  return (
    <div className="text-center">
      {feature.icon && (
        <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 text-primary inline-flex">
          <div className="w-16 h-16 flex items-center justify-center text-4xl">
            {feature.icon}
          </div>
        </div>
      )}
      
      {feature.image && (
        <div className="mb-8">
          <img 
            src={feature.image} 
            alt={feature.imageAlt || feature.title} 
            className="mx-auto rounded-lg max-w-full shadow-lg" 
          />
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4">
        {feature.title}
      </h3>
      
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
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
  );
};

/**
 * Secondary feature component - displayed in a grid below the main feature
 */
const SecondaryFeature: React.FC<{
  feature: FeatureItemProps;
}> = ({ feature }) => {
  return (
    <div className={cn('flex flex-col', feature.className)}>
      {feature.icon && (
        <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary inline-flex self-start">
          <div className="w-8 h-8 flex items-center justify-center text-xl">
            {feature.icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 grow">
        {feature.description}
      </p>
      
      {feature.cta && (
        <a
          href={feature.cta.href}
          className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
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

export default CenteredFeatures;
