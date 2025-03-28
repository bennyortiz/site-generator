import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CardProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Testimonial Card with Avatar Variant
 * 
 * A card designed to showcase a customer testimonial with quote, avatar, and attribution.
 * This variant is ideal for testimonials, reviews, and social proof sections.
 */
export const TestimonialCard: React.FC<CardProps> = ({
  title, // Used for person's name
  subtitle, // Used for person's role/company
  content, // Used for the testimonial quote
  image, // Used for person's avatar
  imageAlt,
  footer, // Used for additional attribution or rating
  className,
  appearance = 'elevated',
  ...props
}) => {
  // Determine card appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-none border-none',
    elevated: 'bg-card shadow-md border',
  };

  // Create quote marks for the testimonial
  const QuoteIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-10 h-10 text-primary/20 absolute -top-4 -left-2"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );

  return (
    <Card 
      className={cn(
        'transition-all duration-200 overflow-visible relative',
        appearanceClasses[appearance],
        className
      )}
      {...props}
    >
      <QuoteIcon />
      
      {content && (
        <CardContent className="pt-6 text-muted-foreground text-lg font-medium italic relative">
          {content}
        </CardContent>
      )}
      
      <CardFooter className="flex items-center mt-4 pt-4 border-t">
        {image && (
          <div className="mr-4 flex-shrink-0">
            <img 
              src={image} 
              alt={imageAlt || (typeof title === 'string' ? `${title}'s avatar` : 'Testimonial avatar')} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        
        <div>
          {title && (
            <CardTitle className="text-base">
              {title}
            </CardTitle>
          )}
          
          {subtitle && (
            <CardDescription>
              {subtitle}
            </CardDescription>
          )}
        </div>
        
        {footer && (
          <div className="ml-auto">
            {footer}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
