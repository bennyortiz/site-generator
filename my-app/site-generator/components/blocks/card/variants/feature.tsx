import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CardProps } from '../types';
import { cn } from '../../../../utils/cn';

/**
 * Feature Card with Icon Variant
 * 
 * A card designed to showcase a feature with an icon, title, and description.
 * This variant is ideal for features, services, or product capabilities sections.
 */
export const FeatureCard: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  icon,
  image,
  imageAlt,
  className,
  clickable,
  href,
  appearance = 'bordered',
  ...props
}) => {
  // Determine card appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-none border-none',
    elevated: 'bg-card shadow-md border-none',
  };

  // Create the card content
  const cardContent = (
    <Card 
      className={cn(
        'transition-all duration-200',
        clickable && 'cursor-pointer hover:shadow-md',
        appearanceClasses[appearance],
        className
      )}
      {...props}
    >
      <CardHeader>
        {icon && (
          <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        {title && <CardTitle className="mt-2">{title}</CardTitle>}
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      
      {content && (
        <CardContent>
          <div className="text-muted-foreground">
            {content}
          </div>
        </CardContent>
      )}
      
      {image && (
        <div className="mt-4 overflow-hidden rounded-md">
          <img 
            src={image} 
            alt={typeof imageAlt === 'string' ? imageAlt : (typeof title === 'string' ? title : 'Feature image')} 
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
      )}
    </Card>
  );

  // If the card is clickable with an href, wrap it in an anchor tag
  if (clickable && href) {
    return (
      <a 
        href={href} 
        className="block no-underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl"
        onClick={(e) => e.currentTarget.blur()}
      >
        {cardContent}
      </a>
    );
  }

  // Otherwise, return the card as is
  return cardContent;
};

export default FeatureCard;
