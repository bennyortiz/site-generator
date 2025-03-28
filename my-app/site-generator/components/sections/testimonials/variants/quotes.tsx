import React from 'react';
import { TestimonialsProps, TestimonialItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Quotes-Focused Testimonials Variant
 * 
 * Minimalist design focusing on the quotes with subtle attribution.
 */
export const QuotesTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  columns = 2,
  background = 'light',
  showRatings = false,
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
  }[columns] || 'grid-cols-1 md:grid-cols-2';

  // Set background styles
  const bgClass = {
    light: 'bg-background',
    dark: 'bg-gray-900 text-white',
    colored: 'bg-primary/10',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    none: ''
  }[background] || 'bg-background';

  // Text color based on background
  const textClass = background === 'dark' ? 'text-white' : 'text-foreground';
  const mutedTextClass = background === 'dark' ? 'text-gray-300' : 'text-muted-foreground';

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

        {/* Quote-focused Testimonials */}
        <div className={cn('grid gap-10 md:gap-12', gridColumnsClass)}>
          {testimonials.map((testimonial, index) => (
            <QuoteItem
              key={index}
              testimonial={testimonial}
              showRating={showRatings}
              background={background}
            />
          ))}
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
 * Quote item component
 */
const QuoteItem: React.FC<{
  testimonial: TestimonialItemProps;
  showRating?: boolean;
  background?: string;
}> = ({ testimonial, showRating = false, background = 'light' }) => {
  const isDarkMode = background === 'dark';
  const quoteSizingClass = testimonial.content.length > 200 ? "text-lg" : "text-xl md:text-2xl";
  
  return (
    <div className="relative">
      {/* Large quotation mark in background */}
      <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 opacity-5 pointer-events-none">
        <svg
          className="w-28 h-28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.921-3.995 5.273h4v10.576h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.921-3.996 5.273h4v10.576h-10z" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <p className={cn(
          quoteSizingClass,
          "font-light leading-relaxed mb-8",
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        )}>
          "{testimonial.content}"
        </p>
        
        {/* Rating */}
        {showRating && testimonial.rating && (
          <div className="mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={cn(
                    "h-4 w-4",
                    star <= testimonial.rating! 
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
          </div>
        )}
        
        {/* Attribution line */}
        <div className="flex items-center">
          {testimonial.image && (
            <div className="mr-3 flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.imageAlt || `${testimonial.name}'s avatar`}
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col md:flex-row md:items-center text-sm">
            <span className={cn(
              "font-medium",
              isDarkMode ? 'text-white' : 'text-foreground'
            )}>
              {testimonial.name}
            </span>
            {testimonial.title && (
              <>
                <span className="hidden md:inline mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">{testimonial.title}</span>
              </>
            )}
            {testimonial.source && (
              <>
                <span className="hidden md:inline mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {testimonial.sourceLink ? (
                    <a 
                      href={testimonial.sourceLink}
                      className="hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {testimonial.source}
                    </a>
                  ) : testimonial.source}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesTestimonials;
