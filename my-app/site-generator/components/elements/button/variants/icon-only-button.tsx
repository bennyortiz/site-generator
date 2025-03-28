import React from 'react';
import { ButtonProps } from '../types';
import { Button } from '@/components/ui/button';
import { cn } from '../../../../utils/cn';

/**
 * Icon Only Button Variant
 * 
 * Button that displays only an icon, suitable for compact UIs or where the action
 * is commonly understood through iconography (like a close button).
 */
const IconOnlyButton: React.FC<ButtonProps> = ({ 
  children, 
  className,
  icon,
  isLoading,
  loadingText,
  href,
  ...props 
}) => {
  // This variant requires an icon
  const buttonIcon = icon || children || (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
  
  // Conditionally render content based on loading state
  const content = isLoading ? (
    <span className="animate-spin h-5 w-5 text-current">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
  ) : buttonIcon;

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <Button
        asChild
        variant="ghost"
        className={cn("p-2 h-9 w-9 rounded-full flex items-center justify-center", className)}
        disabled={isLoading || props.disabled}
        title={loadingText || props.title}
        {...props}
      >
        <a href={href} aria-label={props['aria-label'] || 'Button'}>
          {content}
        </a>
      </Button>
    );
  }

  // Otherwise, render as a button
  return (
    <Button
      variant="ghost"
      className={cn("p-2 h-9 w-9 rounded-full flex items-center justify-center", className)}
      disabled={isLoading || props.disabled}
      title={loadingText || props.title}
      aria-label={props['aria-label'] || 'Button'}
      {...props}
    >
      {content}
    </Button>
  );
};

export default IconOnlyButton;
