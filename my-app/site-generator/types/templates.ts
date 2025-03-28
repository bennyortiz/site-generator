/**
 * Core type definitions for site templates
 */

import { SiteConfig } from './config';

/**
 * Template definition
 */
export interface SiteTemplate {
  id: string;                      // Unique identifier
  name: string;                    // Display name
  description: string;             // Brief description
  thumbnail: string;               // Preview image path
  category: string;                // E.g., "business", "portfolio", "ecommerce"
  industryTags: string[];          // E.g., "restaurant", "healthcare", "tech"
  
  // Preset configurations
  theme: {
    colorScheme: string;
    typography: string;
    spacing: string;
    borderRadius: string;
  };
  
  // Page definitions with their sections
  pages: Record<string, {
    title: string;
    path: string;
    metaDescription: string;
    sections: Array<{
      type: string;               // Section component type (e.g., "hero", "features")
      variant: string;            // Which variant to use
      anchor?: string;            // Optional anchor ID
      content: Record<string, any>; // Template-specific content with placeholders
      settings?: Record<string, any>; // Optional section-specific settings
    }>;
  }>;
  
  // Global placeholders
  placeholders: {
    businessName: string;
    tagline: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
    // Other common placeholders
    [key: string]: string;
  };
}

/**
 * Template category information
 */
export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
}

/**
 * Industry tag information
 */
export interface IndustryTag {
  id: string;
  name: string;
  description: string;
}

/**
 * Available template categories
 */
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: 'business',
    name: 'Business',
    description: 'Templates for businesses and services'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Templates for showcasing work and projects'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Templates for online stores and product catalogs'
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Templates for blogs and content publishing'
  },
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Single-page templates for focused conversion'
  }
];

/**
 * Available industry tags
 */
export const INDUSTRY_TAGS: IndustryTag[] = [
  {
    id: 'restaurant',
    name: 'Restaurant & Food',
    description: 'For restaurants, cafes, and food services'
  },
  {
    id: 'tech',
    name: 'Technology',
    description: 'For tech companies, startups, and digital services'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'For medical practices, clinics, and health services'
  },
  {
    id: 'creative',
    name: 'Creative Services',
    description: 'For designers, artists, and creative professionals'
  },
  {
    id: 'professional',
    name: 'Professional Services',
    description: 'For consultants, lawyers, accountants, and other professionals'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'For schools, courses, and educational services'
  }
];
