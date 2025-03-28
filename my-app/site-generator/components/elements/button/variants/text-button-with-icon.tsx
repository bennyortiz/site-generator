import React from 'react';
import { ButtonProps } from '../types';
import { Button } from '@/components/ui/button';
import { cn } from '../../../../utils/cn';

/**
 * Text Button With Icon Variant
 * 
 * Button that appears as text with an icon, suitable for less prominent actions
 * or when you want a more subtle UI element but still need the visual cue of an icon.
 */
const TextButtonWithIcon: React.FC<ButtonProps> = ({ 
  children, 
  className,
  icon,
  trailingIcon,
  fullWidth,
  isLoading,
  loadingText,
  href,
  ...props 
}) => {
  // If fullWidth is true, add the 'w-full' class
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  // This variant requires an icon
  const leadingIcon = icon || (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
  
  // Conditionally render content based on loading state
  const content = isLoading ? (
    <>
      <span className="animate-spin -ml-1 mr-2 h-4 w-4 text-current">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
      {loadingText || "Loading..."}
    </>
  ) : (
    <>
      <span className="mr-2">{leadingIcon}</span>
      {children}
      {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
    </>
  );

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <Button
        asChild
        variant="ghost"
        className={cn("p-0 hover:bg-transparent text-primary hover:text-primary/80 underline-offset-4 hover:underline", fullWidthClass, className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        <a href={href}>
          {content}
        </a>
      </Button>
    );
  }

  // Otherwise, render as a button
  return (
    <Button
      variant="ghost"
      className={cn("p-0 hover:bg-transparent text-primary hover:text-primary/80 underline-offset-4 hover:underline", fullWidthClass, className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </Button>
  );
};

export default TextButtonWithIcon;
