import { ComponentProps, ReactNode } from "react";

/**
 * Feature item properties
 */
export interface FeatureItemProps {
  /**
   * The title of the feature
   */
  title: string;

  /**
   * The description of the feature
   */
  description: string;

  /**
   * Icon for the feature (optional)
   */
  icon?: ReactNode;

  /**
   * Image for the feature (optional)
   */
  image?: string;

  /**
   * Alternative text for the image
   */
  imageAlt?: string;

  /**
   * Call-to-action button (optional)
   */
  cta?: {
    text: string;
    href: string;
  };

  /**
   * Additional CSS classes for the feature item
   */
  className?: string;
}

/**
 * Features section properties
 */
export interface FeaturesProps {
  /**
   * The main heading for the features section
   */
  heading: string;

  /**
   * Subheading or introduction text
   */
  subheading?: string;

  /**
   * Array of feature items to display
   */
  features: FeatureItemProps[];

  /**
   * Maximum number of columns in the grid
   */
  columns?: 1 | 2 | 3 | 4;

  /**
   * Layout style for the features
   */
  layout?: 'grid' | 'alternating' | 'centered' | 'icon-grid' | 'card-based-features' | 'tabbed-features-showcase' | 'numbered-features-list';

  /**
   * Background style
   */
  background?: 'light' | 'dark' | 'colored' | 'gradient' | 'none';

  /**
   * Whether the features should include dividers
   */
  dividers?: boolean;

  /**
   * Spacing between features
   */
  spacing?: 'tight' | 'normal' | 'loose';

  /**
   * Call-to-action at the bottom of the section
   */
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'link';
  };

  /**
   * Additional CSS classes for the features section
   */
  className?: string;

  /**
   * Additional components or content to render at the beginning or end
   */
  children?: ReactNode;
}

/**
 * Features Component with Variant Names
 */
export interface FeaturesComponent extends React.FC<FeaturesProps> {
  Grid: React.FC<FeaturesProps>;
  Alternating: React.FC<FeaturesProps>;
  Centered: React.FC<FeaturesProps>;
  IconGrid: React.FC<FeaturesProps>;
  CardBased: React.FC<FeaturesProps>;
  TabbedShowcase: React.FC<FeaturesProps>;
  NumberedList: React.FC<FeaturesProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
