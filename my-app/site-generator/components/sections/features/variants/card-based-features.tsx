import React from 'react';
import { cn } from '@/site-generator/utils/cn';
import { FeaturesProps } from '../types';

/**
 * Card-based Features Section Variant
 * 
 * Displays features in card format with images, titles, and descriptions.
 * Each feature is presented in its own card with shadow and hover effects.
 */
const CardBasedFeatures: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  className,
  cta,
  children,
}) => {
  return (
    <section className={cn("py-16 px-4 bg-background", className)}>
      <div className="max-w-6xl mx-auto">
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
        
        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Feature Icon/Image */}
              {feature.icon && (
                <div className="mb-4 text-primary">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10">
                    {feature.icon}
                  </div>
                </div>
              )}
              
              {/* Feature Title */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              
              {/* Feature Description */}
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Optional CTA */}
              {feature.cta && (
                <a 
                  href={feature.cta.href} 
                  className="inline-flex items-center mt-4 text-primary hover:underline"
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

export default CardBasedFeatures;
