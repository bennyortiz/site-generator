import React from 'react';
import { TestimonialsProps, TestimonialItemProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Spotlight Testimonials Variant
 * 
 * A large, featured testimonial with prominent quote and imagery.
 */
export const SpotlightTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  background = 'light',
  showRatings = true,
  cta,
  className,
  children,
  ...props
}) => {
  // Get the first testimonial as the featured one, or use a fallback
  const featuredTestimonial = testimonials[0] || {
    content: "No testimonial available",
    name: "Unknown",
    title: "",
  };
  
  // Get additional testimonials (if any)
  const additionalTestimonials = testimonials.slice(1);
  
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

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className={cn(
            'rounded-lg overflow-hidden shadow-lg',
            background === 'dark' ? 'bg-gray-800' : 'bg-card border'
          )}>
            <div className="md:flex">
              {/* Image Column (if available) */}
              {featuredTestimonial.image && (
                <div className="md:w-1/3 lg:w-2/5">
                  <div className="h-full">
                    <img
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.imageAlt || `${featuredTestimonial.name}'s photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Content Column */}
              <div className={cn(
                "p-8 md:p-10 flex flex-col justify-center",
                featuredTestimonial.image ? "md:w-2/3 lg:w-3/5" : "w-full"
              )}>
                {/* Quote marks */}
                <svg
                  className="h-12 w-12 text-primary/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.921-3.995 5.273h4v10.576h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.921-3.996 5.273h4v10.576h-10z" />
                </svg>
                
                {/* Content */}
                <p className={cn(
                  "text-xl md:text-2xl font-medium italic mb-8",
                  mutedTextClass
                )}>
                  "{featuredTestimonial.content}"
                </p>
                
                {/* Rating */}
                {showRatings && featuredTestimonial.rating && (
                  <div className="mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={cn(
                            "h-6 w-6",
                            star <= featuredTestimonial.rating! 
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
                
                {/* Source */}
                {featuredTestimonial.source && (
                  <div className="text-sm mb-4 text-muted-foreground">
                    {featuredTestimonial.sourceLink ? (
                      <a 
                        href={featuredTestimonial.sourceLink}
                        className="hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {featuredTestimonial.source}
                      </a>
                    ) : (
                      <span>{featuredTestimonial.source}</span>
                    )}
                  </div>
                )}
                
                {/* Author */}
                <div className="flex items-center">
                  {!featuredTestimonial.image && featuredTestimonial.image && (
                    <div className="mr-4 flex-shrink-0">
                      <img
                        src={featuredTestimonial.image}
                        alt={featuredTestimonial.imageAlt || `${featuredTestimonial.name}'s avatar`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className={cn("text-lg font-bold", textClass)}>
                      {featuredTestimonial.name}
                    </p>
                    {featuredTestimonial.title && (
                      <p className="text-md text-muted-foreground">
                        {featuredTestimonial.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional testimonials (if any) */}
        {additionalTestimonials.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalTestimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-lg",
                  background === 'dark' ? 'bg-gray-800/70' : 'bg-card/70 border'
                )}
              >
                <p className={cn(
                  "text-sm italic mb-4",
                  mutedTextClass
                )}>
                  "{testimonial.content}"
                </p>
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
                  <div>
                    <p className={cn("font-semibold text-sm", textClass)}>
                      {testimonial.name}
                    </p>
                    {testimonial.title && (
                      <p className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
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

export default SpotlightTestimonials;
