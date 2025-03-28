import { HeroSectionContent } from '../../../types/config';

/**
 * Base props for all hero section variants
 */
export interface HeroProps {
  /**
   * Main heading displayed in the hero section
   */
  heading: string;
  
  /**
   * Optional subheading displayed below the main heading
   */
  subheading?: string;
  
  /**
   * Optional URL for the background or feature image
   */
  image?: string;
  
  /**
   * Optional URL for background video (used in video variants)
   */
  videoSrc?: string;
  
  /**
   * Optional opacity for overlay (used in variants with overlays)
   * Value between 0-1, defaults to 0.5
   */
  overlayOpacity?: number;
  
  /**
   * Call-to-action buttons
   */
  cta?: {
    /**
     * Primary CTA button with prominent styling
     */
    primary?: {
      text: string;
      href: string;
    };
    
    /**
     * Secondary CTA button with less prominent styling
     */
    secondary?: {
      text: string;
      href: string;
    };
  };
  
  /**
   * Additional CSS classes to apply to the hero section
   */
  className?: string;
  
  /**
   * HTML ID attribute for the section
   */
  id?: string;
}

/**
 * Transform HeroSectionContent from config to HeroProps for components
 * 
 * This utility function converts the configuration format to props
 * that can be directly passed to hero section components.
 * 
 * @param content The hero section content from configuration
 * @returns Props for hero section components
 */
export function heroContentToProps(
  content: HeroSectionContent,
  id?: string,
  className?: string
): HeroProps {
  return {
    heading: content.heading,
    subheading: content.subheading,
    image: content.image,
    videoSrc: content.videoSrc,
    overlayOpacity: content.overlayOpacity,
    cta: content.cta,
    id,
    className,
  };
}
