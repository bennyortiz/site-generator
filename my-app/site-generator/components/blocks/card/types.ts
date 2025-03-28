import { ComponentProps } from "react";

/**
 * Card properties
 */
export interface CardProps {
  /**
   * Title of the card
   */
  title?: React.ReactNode;
  
  /**
   * Subtitle of the card
   */
  subtitle?: React.ReactNode;
  
  /**
   * Main content of the card
   */
  content?: React.ReactNode;
  
  /**
   * Card description (used in some variants)
   */
  description?: React.ReactNode;
  
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  
  /**
   * Image URL to display in the card
   */
  image?: string;
  
  /**
   * Alternative text for the image
   */
  imageAlt?: string;
  
  /**
   * Icon to display (typically in the header)
   */
  icon?: React.ReactNode;
  
  /**
   * Optional additional class names
   */
  className?: string;
  
  /**
   * Whether the card is clickable
   */
  clickable?: boolean;
  
  /**
   * The URL to navigate to when the card is clicked
   */
  href?: string;
  
  /**
   * Optional custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Card border appearance: bordered, borderless, or elevated
   */
  appearance?: 'bordered' | 'borderless' | 'elevated';
  
  /**
   * Whether this card is marked as popular (for pricing cards)
   */
  popular?: boolean;
  
  /**
   * List of features (for pricing cards)
   */
  features?: string[];
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
  
  /**
   * React children
   */
  children?: React.ReactNode;
}

/**
 * Card Component with Variant Names
 */
export interface CardComponent extends React.FC<CardProps> {
  Feature: React.FC<CardProps>;
  Pricing: React.FC<CardProps>;
  Testimonial: React.FC<CardProps>;
  Profile: React.FC<CardProps>;
  Preview: React.FC<CardProps>;
  Interactive: React.FC<CardProps>;
  Horizontal: React.FC<CardProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
