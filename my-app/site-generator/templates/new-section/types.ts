import React from 'react';

/**
 * Base props for all sections
 */
export interface SectionProps {
  /**
   * Main heading text
   */
  heading?: string;
  
  /**
   * Secondary heading or introductory text
   */
  subheading?: string;
  
  /**
   * Background style ('light', 'dark', 'primary', etc.)
   */
  background?: 'light' | 'dark' | 'primary' | 'secondary' | 'gradient';
  
  /**
   * Spacing/padding amount
   */
  spacing?: 'none' | 'small' | 'normal' | 'large';
  
  /**
   * CSS class name for custom styling
   */
  className?: string;
  
  /**
   * Custom ID for the section
   */
  id?: string;
  
  /**
   * Variant identifier for selecting specific implementation
   */
  variant?: string;
  
  /**
   * Optional call-to-action button or link
   */
  cta?: {
    label: string;
    url?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'text';
  };
  
  /**
   * Children elements to render inside the section
   */
  children?: React.ReactNode;
  
  /**
   * Any additional props
   */
  [key: string]: any;
}

/**
 * Component type with section props
 */
export type SectionComponent = React.FC<SectionProps> & {
  Default: React.FC<SectionProps>;
  Alternative: React.FC<SectionProps>;
  // Add other variant exports here
  
  // Metadata for the registry
  metadata: any;
};
