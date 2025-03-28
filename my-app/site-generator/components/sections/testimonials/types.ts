import { ComponentProps, ReactNode } from "react";

/**
 * Logo image properties for company logos testimonials
 */
export interface LogoImageProps {
  /**
   * Source URL for the logo image
   */
  src: string;

  /**
   * Alternative text for the logo
   */
  alt?: string;

  /**
   * Link URL if the logo is clickable
   */
  href?: string;
}

/**
 * Individual testimonial item properties
 */
export interface TestimonialItemProps {
  /**
   * The content/quote of the testimonial
   */
  content: string;

  /**
   * Name of the person giving the testimonial
   */
  name: string;

  /**
   * Title/position/company of the person
   */
  title?: string;

  /**
   * Avatar/image of the person
   */
  image?: string;

  /**
   * Alternative text for the image
   */
  imageAlt?: string;

  /**
   * Rating (out of 5)
   */
  rating?: 1 | 2 | 3 | 4 | 5;

  /**
   * Date of the testimonial
   */
  date?: string;

  /**
   * Source of the testimonial (e.g., "Google Reviews", "Trustpilot")
   */
  source?: string;

  /**
   * Link to the original testimonial
   */
  sourceLink?: string;

  /**
   * Company name for company logos variant
   */
  company?: string;

  /**
   * Job role for company logos variant
   */
  role?: string;

  /**
   * Company logo URL for company logos variant
   */
  companyLogo?: string;

  /**
   * URL to video testimonial for video testimonials variant
   */
  videoUrl?: string;

  /**
   * Video thumbnail image URL
   */
  videoThumbnail?: string;

  /**
   * Video duration in format MM:SS
   */
  videoDuration?: string;

  /**
   * Additional CSS classes for the testimonial item
   */
  className?: string;
}

/**
 * Testimonials section properties
 */
export interface TestimonialsProps {
  /**
   * The main heading for the testimonials section
   */
  heading: string;

  /**
   * Subheading or introduction text
   */
  subheading?: string;

  /**
   * Array of testimonial items to display
   */
  testimonials: TestimonialItemProps[];

  /**
   * Layout style for the testimonials
   */
  layout?: 'grid' | 'carousel' | 'spotlight' | 'quotes' | 'company-logos' | 'video' | 'rating-focused';

  /**
   * Number of columns for grid layout
   */
  columns?: 1 | 2 | 3 | 4;

  /**
   * Background style
   */
  background?: 'light' | 'dark' | 'colored' | 'gradient' | 'none';

  /**
   * Whether to show ratings
   */
  showRatings?: boolean;

  /**
   * Whether to enable autoplay for carousel
   */
  autoplay?: boolean;

  /**
   * Interval for autoplay (in ms)
   */
  autoplayInterval?: number;

  /**
   * Company logos to display (for company-logos variant)
   */
  logoImages?: LogoImageProps[];

  /**
   * Average rating to display (for rating-focused variant)
   */
  averageRating?: number;

  /**
   * Total number of reviews (for rating-focused variant)
   */
  totalReviews?: number;

  /**
   * Rating distribution (for rating-focused variant)
   */
  ratingDistribution?: {
    [key: number]: number;
  };

  /**
   * Call-to-action at the bottom of the section
   */
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'link';
  };

  /**
   * Additional CSS classes for the testimonials section
   */
  className?: string;

  /**
   * Additional components or content to render at the beginning or end
   */
  children?: ReactNode;
}

/**
 * Testimonials Component with Variant Names
 */
export interface TestimonialsComponent extends React.FC<TestimonialsProps> {
  Grid: React.FC<TestimonialsProps>;
  Carousel: React.FC<TestimonialsProps>;
  Spotlight: React.FC<TestimonialsProps>;
  Quotes: React.FC<TestimonialsProps>;
  CompanyLogos: React.FC<TestimonialsProps>;
  Video: React.FC<TestimonialsProps>;
  RatingFocused: React.FC<TestimonialsProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
