import React from 'react';
import { cn } from '@/site-generator/utils/cn';
import { TestimonialsProps } from '../types';

/**
 * Rating-Focused Testimonials Variant
 * 
 * Displays testimonials with prominent star ratings and review metrics.
 * This variant is ideal for businesses that want to showcase customer
 * satisfaction scores and ratings distribution.
 */
const RatingFocusedTestimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  testimonials,
  className,
  averageRating = 4.5,
  totalReviews,
  ratingDistribution,
  ...props
}) => {
  // Calculate total reviews if not provided
  const calculatedTotalReviews = totalReviews || testimonials.length;
  
  // Calculate average rating if not provided
  const calculatedAverage = averageRating || 
    testimonials.reduce((acc, t) => acc + (t.rating || 0), 0) / 
    testimonials.filter(t => t.rating).length;
  
  // Generate stars for ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={cn(
            "text-xl",
            star <= rating ? "text-yellow-400" : "text-gray-300"
          )}>
            ★
          </span>
        ))}
      </div>
    );
  };
  
  // Calculate rating distribution if not provided
  const calculateDistribution = () => {
    if (ratingDistribution) return ratingDistribution;
    
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    testimonials.forEach(t => {
      if (t.rating) {
        dist[t.rating] = (dist[t.rating] || 0) + 1;
      }
    });
    return dist;
  };
  
  const distribution = calculateDistribution();
  
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
        
        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mb-16">
          {/* Average Rating */}
          <div className="bg-card rounded-lg shadow-md p-8 text-center flex flex-col items-center justify-center min-w-[200px]">
            <div className="text-5xl font-bold mb-2">{calculatedAverage.toFixed(1)}</div>
            <div className="mb-3">
              {renderStars(Math.round(calculatedAverage))}
            </div>
            <p className="text-muted-foreground">
              {calculatedTotalReviews} {calculatedTotalReviews === 1 ? 'review' : 'reviews'}
            </p>
          </div>
          
          {/* Rating Distribution */}
          <div className="bg-card rounded-lg shadow-md p-8 flex-grow w-full md:w-auto">
            <h3 className="text-lg font-medium mb-4">Rating Distribution</h3>
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = distribution[rating] || 0;
              const percentage = calculatedTotalReviews > 0 
                ? (count / calculatedTotalReviews) * 100 
                : 0;
              
              return (
                <div key={rating} className="flex items-center mb-2">
                  <div className="flex items-center w-16">
                    <span className="mr-1">{rating}</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                  <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                    <div 
                      className="h-2 bg-primary rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right text-sm text-muted-foreground">
                    {count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-md p-6"
            >
              {/* Rating */}
              <div className="mb-3">
                {renderStars(testimonial.rating || 5)}
                {testimonial.date && (
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                )}
              </div>
              
              {/* Content */}
              <blockquote className="mb-4 text-foreground">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center mt-4">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full mr-3 object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  )}
                </div>
                
                {/* Source */}
                {testimonial.source && (
                  <div className="ml-auto">
                    <p className="text-xs text-muted-foreground">
                      Via {testimonial.sourceLink ? (
                        <a 
                          href={testimonial.sourceLink} 
                          className="hover:underline text-primary"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {testimonial.source}
                        </a>
                      ) : testimonial.source}
                    </p>
                  </div>
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

export default RatingFocusedTestimonials;
