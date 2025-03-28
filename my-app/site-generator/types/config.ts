/**
 * Core configuration types for the Site Generator
 * These types define the schema for the site-builder.config.ts file
 */

/**
 * Main site configuration
 */
export interface SiteConfig {
  metadata: MetadataConfig;
  business: BusinessConfig;
  theme: ThemeConfig;
  navigation: NavigationConfig;
  pages: Record<string, PageConfig>;
}

/**
 * Site metadata configuration
 */
export interface MetadataConfig {
  title: string;
  description: string;
  author: string;
  image?: string;
  url?: string;
  keywords?: string[];
}

/**
 * Business information configuration
 */
export interface BusinessConfig {
  name: string;
  tagline?: string;
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: SocialLink[];
  businessHours?: BusinessHours;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

/**
 * Business hours configuration
 */
export interface BusinessHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  note?: string;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
    background: string;
    text: string;
    heading?: string;
    // Additional color tokens can be added as needed
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius?: string;
  boxShadow?: string;
  spacing?: Record<string, string>;
}

/**
 * Navigation configuration
 */
export interface NavigationConfig {
  links: NavLink[];
  logo?: {
    src: string;
    alt: string;
  };
  cta?: {
    text: string;
    href: string;
  };
}

/**
 * Navigation link
 */
export interface NavLink {
  text: string;
  href: string;
  isExternal?: boolean;
  children?: NavLink[];
}

/**
 * Page configuration
 */
export interface PageConfig {
  path: string;
  title: string;
  meta?: {
    description?: string;
    image?: string;
  };
  sections: SectionConfig[];
}

/**
 * Section configuration
 */
export interface SectionConfig {
  id: string;
  type: string;
  variant?: string;
  background?: string;
  spacing?: {
    top?: string;
    bottom?: string;
  };
  content: Record<string, any>; // Section-specific content
}

/**
 * Hero section content configuration
 */
export interface HeroSectionContent {
  heading: string;
  subheading?: string;
  image?: string;
  
  /**
   * URL for background video (for video variants)
   */
  videoSrc?: string;
  
  /**
   * Opacity for the overlay (0-1)
   */
  overlayOpacity?: number;
  
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

/**
 * Services section content configuration
 */
export interface ServicesSectionContent {
  heading: string;
  subheading?: string;
  services: Array<{
    title: string;
    description: string;
    icon?: string;
    image?: string;
    link?: string;
  }>;
}

/**
 * Testimonials section content configuration
 */
export interface TestimonialsSectionContent {
  heading: string;
  subheading?: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: string;
    rating?: number;
  }>;
}

/**
 * About section content configuration
 */
export interface AboutSectionContent {
  heading: string;
  subheading?: string;
  content: string;
  image?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  team?: Array<{
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
    socialLinks?: SocialLink[];
  }>;
}

/**
 * Contact section content configuration
 */
export interface ContactSectionContent {
  heading: string;
  subheading?: string;
  email?: string;
  phone?: string;
  address?: string;
  mapEmbed?: string;
  formFields?: Array<{
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
  }>;
}

/**
 * CTA section content configuration
 */
export interface CtaSectionContent {
  heading: string;
  subheading?: string;
  cta: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}
