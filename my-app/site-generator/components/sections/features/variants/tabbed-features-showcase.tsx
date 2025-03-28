import React, { useState } from 'react';
import { cn } from '@/site-generator/utils/cn';
import { FeaturesProps } from '../types';

/**
 * Tabbed Features Showcase Section Variant
 * 
 * Displays features in a tabbed interface, showing one feature at a time
 * with larger content area for more detailed descriptions and visuals.
 */
const TabbedFeaturesShowcase: React.FC<FeaturesProps> = ({
  heading,
  subheading,
  features,
  className,
  cta,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  
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
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-2 text-sm md:text-base font-medium transition-colors border-b-2 -mb-px",
                activeTab === index 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {feature.title}
            </button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        <div className="mt-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                activeTab !== index && "hidden"
              )}
            >
              {/* Feature Content */}
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                
                {/* Optional CTA */}
                {feature.cta && (
                  <a 
                    href={feature.cta.href} 
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    {feature.cta.text}
                  </a>
                )}
              </div>
              
              {/* Feature Image/Icon */}
              <div className="order-1 md:order-2 flex justify-center">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.imageAlt || feature.title}
                    className="rounded-lg max-h-80 object-contain"
                  />
                ) : feature.icon ? (
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                ) : null}
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

export default TabbedFeaturesShowcase;
