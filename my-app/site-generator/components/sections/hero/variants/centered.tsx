import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { HeroProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Centered Hero Variant
 * 
 * A hero section with centered content and an optional background image.
 * This variant is ideal for creating a strong visual impact at the top of a page.
 */
const CenteredHero: React.FC<HeroProps> = ({ 
  heading, 
  subheading, 
  cta, 
  image,
  className,
  id
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <section 
      id={id} 
      className={cn(
        "relative py-20 px-4 text-center min-h-[70vh] flex items-center justify-center",
        className
      )}
    >
      {/* Background image with overlay */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={image} 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
          image ? "text-white" : "text-gray-900 dark:text-white"
        )}>
          {heading}
        </h1>
        
        {subheading && (
          <p className={cn(
            "text-xl md:text-2xl mb-10 max-w-3xl mx-auto",
            image ? "text-white/90" : "text-gray-600 dark:text-gray-300"
          )}>
            {subheading}
          </p>
        )}
        
        {cta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.primary && (
              <a 
                href={cta.primary.href}
                tabIndex={0}
                aria-label={`${cta.primary.text} button`}
                onClick={(e) => e.currentTarget.blur()}
                onKeyDown={(e) => handleKeyDown(e, cta.primary!.href)}
                className={cn(
                  "bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium",
                  "inline-flex items-center justify-center transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                )}
              >
                {cta.primary.text}
                <IconArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            )}
            
            {cta.secondary && (
              <a 
                href={cta.secondary.href}
                tabIndex={0}
                aria-label={`${cta.secondary.text} button`}
                onClick={(e) => e.currentTarget.blur()}
                onKeyDown={(e) => handleKeyDown(e, cta.secondary!.href)}
                className={cn(
                  image 
                    ? "bg-white/10 hover:bg-white/20 text-white" 
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white",
                  "px-8 py-3 rounded-full font-medium",
                  "inline-flex items-center justify-center transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                )}
              >
                {cta.secondary.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CenteredHero;
