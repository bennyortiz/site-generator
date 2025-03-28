import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { ComponentProps } from "react";

/**
 * Button properties derived from shadcn Button
 */
export interface ButtonProps extends 
  Omit<ComponentProps<"button">, "ref">,
  VariantProps<typeof buttonVariants> {
  /**
   * The URL to navigate to when the button is clicked
   */
  href?: string;
  
  /**
   * Optional icon to display before the button text
   */
  icon?: React.ReactNode;
  
  /**
   * Optional icon to display after the button text
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Whether to render the button as a child of the specified component
   */
  asChild?: boolean;
  
  /**
   * Optional additional class names
   */
  className?: string;

  /**
   * Optional custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;

  /**
   * Text to display for accessibility when button is loading
   */
  loadingText?: string;

  /**
   * Whether to allow the button to expand to the full width of its container
   */
  fullWidth?: boolean;
}

/**
 * Button Component with Variant Names
 */
export interface ButtonComponent extends React.FC<ButtonProps> {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
  Outline: React.FC<ButtonProps>;
  Ghost: React.FC<ButtonProps>;
  Link: React.FC<ButtonProps>;
  Icon: React.FC<ButtonProps>;
  CTA: React.FC<ButtonProps>;
  TextWithIcon: React.FC<ButtonProps>;
  FullWidth: React.FC<ButtonProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
