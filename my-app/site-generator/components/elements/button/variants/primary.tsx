import React from 'react';
import { ButtonProps } from '../types';
import { Button } from '@/components/ui/button';
import { cn } from '../../../../utils/cn';

/**
 * Primary Button Variant
 * 
 * Main action button with prominent styling, suitable for primary calls-to-action.
 */
export const PrimaryButton: React.FC<ButtonProps> = ({ 
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
  
  // Conditionally render content based on loading state
  const content = isLoading ? (
    <>
      <span className="animate-spin -ml-1 mr-2 h-4 w-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
      {loadingText || "Loading..."}
    </>
  ) : (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
    </>
  );

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <Button
        asChild
        variant="default"
        className={cn(fullWidthClass, className)}
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
      variant="default"
      className={cn(fullWidthClass, className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </Button>
  );
};

export default PrimaryButton;
