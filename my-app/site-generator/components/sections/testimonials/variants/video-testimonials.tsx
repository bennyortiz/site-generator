import React, { useState } from 'react';
import { cn } from '@/site-generator/utils/cn';
import { TestimonialsProps } from '../types';

/**
 * Video Testimonials Variant
 * 
 * Displays testimonials with embedded videos or video thumbnails
 * that can be played inline. This variant is ideal for creating
 * a more engaging and personal testimonial experience.
 */
const VideoTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  className,
  columns = 2,
  autoplay = false,
  ...props
}) => {
  // Track which video is currently playing
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  
  // Function to handle video play/pause
  const handleVideoToggle = (index: number) => {
    if (activeVideo === index) {
      setActiveVideo(null);
    } else {
      setActiveVideo(index);
    }
  };
  
  return (
    <section className={cn("py-16 px-4 bg-background", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {subheading && (
            <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {heading}
            </h2>
          )}
        </div>
        
        {/* Video Testimonials Grid */}
        <div className={cn(
          "grid gap-8",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex flex-col bg-card rounded-lg shadow-md overflow-hidden h-full"
            >
              {/* Video Thumbnail or Player */}
              <div className="relative aspect-video bg-muted">
                {activeVideo === index ? (
                  // Active video player
                  <iframe 
                    src={`${testimonial.videoUrl}?autoplay=1&mute=${autoplay ? 1 : 0}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // Video thumbnail
                  <div className="relative w-full h-full">
                    <img 
                      src={testimonial.videoThumbnail || testimonial.image} 
                      alt={`${testimonial.name} testimonial video`}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                      onClick={() => handleVideoToggle(index)}
                      onKeyDown={(e) => e.key === 'Enter' && handleVideoToggle(index)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Play video testimony from ${testimonial.name}`}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21" />
                        </svg>
                      </div>
                    </div>
                    {testimonial.videoDuration && (
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs py-1 px-2 rounded">
                        {testimonial.videoDuration}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Testimonial Info */}
              <div className="p-6 flex-grow">
                <blockquote className="mb-4 text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    {testimonial.title && (
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        {props.cta && (
          <div className="mt-12 text-center">
            <a 
              href={props.cta.href}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              {props.cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
