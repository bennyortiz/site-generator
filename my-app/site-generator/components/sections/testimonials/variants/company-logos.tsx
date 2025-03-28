import React from 'react';
import { cn } from '@/site-generator/utils/cn';
import { TestimonialsProps } from '../types';

/**
 * Company Logos Testimonials Variant
 * 
 * Displays testimonials with prominent company logos for enhanced social proof.
 * This variant emphasizes the brands associated with the testimonials.
 */
const CompanyLogosTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  className,
  logoImages = [],
  ...props
}) => {
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
        
        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center mb-16">
          {logoImages && logoImages.length > 0 ? (
            logoImages.map((logo, index) => (
              <div key={index} className="flex items-center justify-center py-4 px-4">
                <img 
                  src={logo.src} 
                  alt={logo.alt || 'Company logo'} 
                  className="h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))
          ) : (
            // Placeholder logos
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center py-4 px-4">
                <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))
          )}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-md p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor">
                  <path d="M0 12.5V24H11.5V12.5H5.75C5.75 9.0625 7.66667 5.625 11.5 2.1875V0C3.83333 4.25 0 8.6875 0 12.5ZM18.5 0V2.1875C22.3333 5.625 24.25 9.0625 24.25 12.5H18.5V24H30V12.5C30 8.6875 26.1667 4.25 18.5 0Z" />
                </svg>
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="mb-6 font-medium">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author Info and Company Logo */}
              <div className="flex items-center mt-6">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.imageAlt || testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
                
                {/* Company Logo */}
                {testimonial.companyLogo && (
                  <img 
                    src={testimonial.companyLogo} 
                    alt={`${testimonial.company} logo`}
                    className="h-8 ml-auto opacity-80"
                  />
                )}
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

export default CompanyLogosTestimonials;
