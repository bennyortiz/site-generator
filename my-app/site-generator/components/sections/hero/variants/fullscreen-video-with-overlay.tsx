import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { HeroProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Fullscreen Video Hero with Overlay
 * 
 * A hero section with a fullscreen background video and text overlay.
 * This variant creates a dynamic and engaging introduction to your site.
 */
const FullscreenVideoHero: React.FC<HeroProps> = ({ 
  heading, 
  subheading, 
  cta, 
  videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-in-an-office-lobby-33004-large.mp4', // Default fallback video
  className,
  id,
  overlayOpacity = 0.5, // Controls the darkness of the overlay
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
        "relative py-20 px-4 text-center min-h-[85vh] flex items-center justify-center",
        className
      )}
    >
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity }}
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          {heading}
        </h1>
        
        {subheading && (
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
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
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
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

export default FullscreenVideoHero;
