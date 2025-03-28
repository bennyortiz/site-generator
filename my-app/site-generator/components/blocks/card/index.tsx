import React from 'react';
import { CardComponent, CardProps } from './types';
import { cardMetadata } from './metadata';
import FeatureCard from './variants/feature';
import TestimonialCard from './variants/testimonial';
import { Card as ShadcnCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '../../../utils/cn';

/**
 * Card Block Component
 * 
 * A versatile card component for displaying content in a contained format.
 * This component provides a unified API for all card variants.
 */
const Card: CardComponent = ({
  title,
  subtitle,
  content,
  footer,
  image,
  imageAlt,
  icon,
  className,
  clickable = false,
  href,
  appearance = 'bordered',
  children,
  ...props
}) => {
  // Default implementation uses Feature Card variant
  return (
    <FeatureCard
      title={title}
      subtitle={subtitle}
      content={content}
      footer={footer}
      image={image}
      imageAlt={imageAlt}
      icon={icon}
      className={className}
      clickable={clickable}
      href={href}
      appearance={appearance}
      {...props}
    >
      {children}
    </FeatureCard>
  );
};

/**
 * Feature Card Variant
 * 
 * Card designed to showcase a feature with an icon, title, and description
 */
Card.Feature = FeatureCard;

/**
 * Testimonial Card Variant
 * 
 * Card showcasing a customer testimonial with quote, avatar, and attribution
 */
Card.Testimonial = TestimonialCard;

/**
 * Pricing Card Variant
 * 
 * Card displaying a pricing plan with tier, price, and feature list
 */
Card.Pricing = (props: CardProps) => {
  const { title, subtitle, content, footer, className, children, appearance = 'bordered', ...rest } = props;
  
  // Appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-none border-none',
    elevated: 'bg-card shadow-md border-none',
  };
  
  return (
    <ShadcnCard 
      className={cn(
        'relative transition-all duration-200',
        appearanceClasses[appearance],
        className
      )}
      {...rest}
    >
      {/* Popular badge if specified */}
      {props.popular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className={cn(props.popular && 'pt-8')}>
        {title && <CardTitle className="text-xl">{title}</CardTitle>}
        {subtitle && (
          <div className="text-3xl font-bold">{subtitle}</div>
        )}
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {/* Features list */}
        {props.features && (
          <ul className="space-y-2 mb-6">
            {Array.isArray(props.features) && props.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2 h-4 w-4 mt-1 text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {content && content}
        {children}
      </CardContent>
      
      {footer && (
        <CardFooter className="flex justify-center pt-6 border-t">
          {footer}
        </CardFooter>
      )}
    </ShadcnCard>
  );
};

/**
 * Profile Card Variant
 * 
 * Card displaying a person profile with image, title, bio, and social links
 */
Card.Profile = (props: CardProps) => {
  const { title, subtitle, content, footer, image, imageAlt, className, appearance = 'bordered', ...rest } = props;
  
  // Appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-none border-none',
    elevated: 'bg-card shadow-md border-none',
  };
  
  return (
    <ShadcnCard 
      className={cn(
        'overflow-hidden transition-all duration-200',
        appearanceClasses[appearance],
        className
      )}
      {...rest}
    >
      {image && (
        <div className="aspect-[3/2] overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || (typeof title === 'string' ? `${title}'s profile` : 'Profile image')} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
          />
        </div>
      )}
      
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      
      {content && (
        <CardContent className="text-muted-foreground">
          {content}
        </CardContent>
      )}
      
      {footer && (
        <CardFooter className="flex justify-start gap-4 border-t pt-6">
          {footer}
        </CardFooter>
      )}
    </ShadcnCard>
  );
};

/**
 * Preview Card Variant
 * 
 * Card previewing content with a prominent image, title, and brief description
 */
Card.Preview = (props: CardProps) => {
  const { title, subtitle, content, image, imageAlt, className, clickable, href, appearance = 'borderless', ...rest } = props;
  
  // Appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-sm',
    elevated: 'bg-card shadow-md border-none',
  };
  
  const cardContent = (
    <ShadcnCard 
      className={cn(
        'overflow-hidden transition-all duration-200',
        clickable && 'cursor-pointer hover:shadow-md',
        appearanceClasses[appearance],
        className
      )}
      {...rest}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || (typeof title === 'string' ? title : 'Preview image')} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
          />
        </div>
      )}
      
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      
      {content && (
        <CardContent className="text-muted-foreground">
          {content}
        </CardContent>
      )}
    </ShadcnCard>
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

/**
 * Interactive Card Variant
 * 
 * Clickable card with interactive hover effects and smooth transitions
 */
Card.Interactive = (props: CardProps) => {
  return (
    <Card.Feature
      {...props}
      clickable={true}
      className={cn(
        'transform transition-all hover:scale-105 hover:shadow-lg',
        props.className
      )}
    />
  );
};

/**
 * Horizontal Card Variant
 * 
 * Card with a side-by-side layout featuring an image and content
 */
Card.Horizontal = (props: CardProps) => {
  const { title, subtitle, content, footer, image, imageAlt, className, appearance = 'bordered', ...rest } = props;
  
  // Appearance classes
  const appearanceClasses = {
    bordered: 'border bg-card',
    borderless: 'bg-card shadow-none border-none',
    elevated: 'bg-card shadow-md border-none',
  };
  
  return (
    <ShadcnCard 
      className={cn(
        'overflow-hidden transition-all duration-200',
        appearanceClasses[appearance],
        className
      )}
      {...rest}
    >
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3">
            <img 
              src={image} 
              alt={imageAlt || (typeof title === 'string' ? title : 'Card image')} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
        
        <div className={cn("flex flex-col", image ? "md:w-2/3" : "w-full")}>
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
          </CardHeader>
          
          {content && (
            <CardContent className="text-muted-foreground">
              {content}
            </CardContent>
          )}
          
          {footer && (
            <CardFooter className="mt-auto border-t pt-6">
              {footer}
            </CardFooter>
          )}
        </div>
      </div>
    </ShadcnCard>
  );
};

// Attach metadata to the component for the registry system
Card.metadata = cardMetadata;

export default Card;
