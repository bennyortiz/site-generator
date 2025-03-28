import React, { useState, useEffect } from 'react';
import { TestimonialsProps, TestimonialItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Carousel Testimonials Variant
 * 
 * A testimonial carousel that cycles through testimonials one at a time.
 */
export const CarouselTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  background = 'light',
  showRatings = true,
  autoplay = true,
  autoplayInterval = 5000,
  cta,
  className,
  children,
  ...props
}) => {
  // State for current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle empty testimonials case
  if (!testimonials || testimonials.length === 0) {
    testimonials = [{
      content: "No testimonials available.",
      name: "N/A",
      title: ""
    }];
  }
  
  // Set background styles
  const bgClass = {
    light: 'bg-background',
    dark: 'bg-gray-900 text-white',
    colored: 'bg-primary/10',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    none: ''
  }[background] || 'bg-background';

  // Text colors based on background
  const textClass = background === 'dark' ? 'text-white' : 'text-foreground';
  const mutedTextClass = background === 'dark' ? 'text-gray-300' : 'text-muted-foreground';
  
  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, testimonials.length]);
  
  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Current testimonial
  const currentTestimonial = testimonials[currentIndex];
  
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
        
        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-background/80 dark:bg-gray-800/80 rounded-full p-2 shadow-sm border hover:bg-background"
            aria-label="Previous testimonial"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          
          {/* Testimonial Card */}
          <div className={cn(
            "transition-all duration-500 ease-in-out p-8 md:p-10 rounded-lg shadow-md mx-auto md:mx-12",
            background === 'dark' ? 'bg-gray-800' : 'bg-card',
            background !== 'none' && 'border'
          )}>
            <div className="flex flex-col items-center">
              {/* Quote marks */}
              <svg
                className="h-12 w-12 text-primary/40 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.921-3.995 5.273h4v10.576h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.921-3.996 5.273h4v10.576h-10z" />
              </svg>
              
              {/* Avatar */}
              {currentTestimonial.image && (
                <div className="w-20 h-20 mb-6">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.imageAlt || `${currentTestimonial.name}'s avatar`}
                    className="w-full h-full rounded-full object-cover mx-auto border-4 border-background"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="text-center">
                <p className={cn(
                  "text-xl md:text-2xl italic mb-8 transition-all duration-500 ease-in-out",
                  mutedTextClass
                )}>
                  "{currentTestimonial.content}"
                </p>
                
                {/* Rating */}
                {showRatings && currentTestimonial.rating && (
                  <div className="mb-4 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={cn(
                          "h-5 w-5",
                          star <= currentTestimonial.rating! 
                            ? "text-yellow-500"
                            : "text-gray-300"
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
                
                {/* Author */}
                <div className="transition-all duration-500 ease-in-out">
                  <p className={cn("font-bold text-lg", textClass)}>
                    {currentTestimonial.name}
                  </p>
                  {currentTestimonial.title && (
                    <p className="text-md text-muted-foreground">
                      {currentTestimonial.title}
                    </p>
                  )}
                </div>
                
                {/* Source */}
                {currentTestimonial.source && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    {currentTestimonial.sourceLink ? (
                      <a 
                        href={currentTestimonial.sourceLink}
                        className="hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {currentTestimonial.source}
                      </a>
                    ) : (
                      <span>{currentTestimonial.source}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Next Button */}
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-background/80 dark:bg-gray-800/80 rounded-full p-2 shadow-sm border hover:bg-background"
            aria-label="Next testimonial"
          >
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        
        {/* Carousel Indicators */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  index === currentIndex 
                    ? "bg-primary" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
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

export default CarouselTestimonials;
