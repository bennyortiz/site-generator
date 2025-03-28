import React from 'react';
import { cn } from '@/site-generator/utils/cn';
import { FeaturesProps } from '../types';

/**
 * Numbered Features List Section Variant
 * 
 * Displays features in a vertical list with numbered indicators,
 * ideal for step-by-step processes or prioritized feature lists.
 */
const NumberedFeaturesList: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  className,
  cta,
  children,
}) => {
  return (
    <section className={cn("py-16 px-4 bg-background", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {subheading && (
            <h3 className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              {subheading}
            </h3>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {heading}
            </h2>
          )}
        </div>
        
        {/* Numbered Features List */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              {/* Number Indicator */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              
              {/* Feature Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {feature.title}
                  {feature.icon && (
                    <span className="inline-flex ml-2 text-primary">
                      {feature.icon}
                    </span>
                  )}
                </h3>
                
                <p className="text-muted-foreground mb-3">{feature.description}</p>
                
                {/* Optional Image */}
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.imageAlt || feature.title}
                    className="mt-4 rounded-lg w-full max-w-md"
                  />
                )}
                
                {/* Optional CTA */}
                {feature.cta && (
                  <a 
                    href={feature.cta.href} 
                    className="inline-flex items-center mt-2 text-primary hover:underline"
                  >
                    {feature.cta.text}
                    <svg 
                      className="ml-1 h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Section CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <a 
              href={cta.href}
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium",
                cta.variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90",
                cta.variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                cta.variant === 'outline' && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                cta.variant === 'link' && "text-primary underline-offset-4 hover:underline",
                !cta.variant && "bg-primary text-primary-foreground hover:bg-primary/90" // Default to primary
              )}
            >
              {cta.text}
            </a>
          </div>
        )}
        
        {/* Additional Content */}
        {children}
      </div>
    </section>
  );
};

export default NumberedFeaturesList;
