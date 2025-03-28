import { SiteConfig, NavLink, SectionConfig } from '../types/config';
import { SiteTemplate } from '../types/templates';

/**
 * Template Processor
 * 
 * Responsible for transforming a template and business information
 * into a complete site configuration.
 */
class TemplateProcessor {
  /**
   * Process a template with provided business information
   * to generate a customized site configuration
   */
  processTemplate(template: SiteTemplate, businessInfo: Record<string, string>): SiteConfig {
    // Start with default configuration
    const config: SiteConfig = {
      metadata: {
        title: businessInfo.businessName || template.placeholders.businessName,
        description: businessInfo.description || template.placeholders.description,
        author: businessInfo.businessName || template.placeholders.businessName,
      },
      theme: {
        colors: {
          primary: '#3B82F6', // Default blue
          secondary: '#10B981', // Default green
          accent: '#F97316', // Default orange
          background: '#FFFFFF',
          text: '#1F2937',
          heading: '#111827',
        },
        fonts: {
          heading: 'Inter, sans-serif',
          body: 'Inter, sans-serif',
        },
        borderRadius: '0.25rem',
        spacing: {
          base: '16px',
          scale: '1.2',
        }
      },
      business: {
        name: businessInfo.businessName || template.placeholders.businessName,
        tagline: businessInfo.tagline || template.placeholders.tagline,
        contact: {
          phone: businessInfo.phone || template.placeholders.phone,
          email: businessInfo.email || template.placeholders.email,
          address: businessInfo.address || template.placeholders.address,
        }
      },
      navigation: {
        links: this.generateNavigationLinks(template)
      },
      pages: this.generatePages(template, businessInfo)
    };

    // Apply theme settings from template
    this.applyThemeSettings(config, template.theme);
    
    return config;
  }

  /**
   * Generate navigation links based on pages in the template
   */
  private generateNavigationLinks(template: SiteTemplate): NavLink[] {
    return Object.entries(template.pages).map(([id, page]) => ({
      text: page.title,
      href: page.path,
      isExternal: false
    }));
  }

  /**
   * Apply theme settings from template to the config
   */
  private applyThemeSettings(config: SiteConfig, themeSettings: SiteTemplate['theme']) {
    // Apply color scheme
    switch (themeSettings.colorScheme) {
      case 'warm':
        config.theme.colors.primary = '#E11D48'; // Rose
        config.theme.colors.secondary = '#F97316'; // Orange
        config.theme.colors.accent = '#854D0E'; // Amber
        break;
      case 'cool':
        config.theme.colors.primary = '#3B82F6'; // Blue
        config.theme.colors.secondary = '#10B981'; // Green
        config.theme.colors.accent = '#6366F1'; // Indigo
        break;
      case 'neutral':
        config.theme.colors.primary = '#4B5563'; // Gray
        config.theme.colors.secondary = '#1F2937'; // Dark Gray
        config.theme.colors.accent = '#9CA3AF'; // Light Gray
        break;
    }

    // Apply typography settings
    switch (themeSettings.typography) {
      case 'serif':
        config.theme.fonts.heading = 'Merriweather, serif';
        config.theme.fonts.body = 'Georgia, serif';
        break;
      case 'sans':
        config.theme.fonts.heading = 'Inter, sans-serif';
        config.theme.fonts.body = 'Inter, sans-serif';
        break;
      case 'modern':
        config.theme.fonts.heading = 'Montserrat, sans-serif';
        config.theme.fonts.body = 'Open Sans, sans-serif';
        break;
    }

    // Apply spacing settings
    if (config.theme.spacing) {
      switch (themeSettings.spacing) {
        case 'compact':
          config.theme.spacing.base = '12px';
          config.theme.spacing.scale = '1.1';
          break;
        case 'relaxed':
          config.theme.spacing.base = '20px';
          config.theme.spacing.scale = '1.3';
          break;
        case 'airy':
          config.theme.spacing.base = '24px';
          config.theme.spacing.scale = '1.4';
          break;
      }
    }

    // Apply border radius settings
    switch (themeSettings.borderRadius) {
      case 'none':
        config.theme.borderRadius = '0';
        break;
      case 'subtle':
        config.theme.borderRadius = '0.125rem';
        break;
      case 'rounded':
        config.theme.borderRadius = '0.5rem';
        break;
      case 'pill':
        config.theme.borderRadius = '9999px';
        break;
    }
  }

  /**
   * Generate pages configuration by processing template pages
   */
  private generatePages(template: SiteTemplate, businessInfo: Record<string, string>) {
    const pages: SiteConfig['pages'] = {};

    // Process each page in the template
    Object.entries(template.pages).forEach(([id, page]) => {
      pages[id] = {
        title: page.title,
        path: page.path,
        meta: {
          description: this.replacePlaceholders(page.metaDescription, businessInfo, template.placeholders)
        },
        sections: page.sections.map((section, index) => ({
          id: `${id}-section-${index + 1}`,
          type: section.type,
          variant: section.variant,
          content: this.processContent(section.content, businessInfo, template.placeholders),
          background: section.content.background || undefined,
          spacing: section.content.spacing || undefined
        }))
      };
    });

    return pages;
  }

  /**
   * Process content by replacing placeholders with actual business info
   */
  private processContent(
    content: Record<string, any>,
    businessInfo: Record<string, string>,
    placeholders: Record<string, string>
  ): Record<string, any> {
    const processedContent: Record<string, any> = {};

    // Process each key in the content object
    Object.entries(content).forEach(([key, value]) => {
      if (typeof value === 'string') {
        // Replace placeholders in string values
        processedContent[key] = this.replacePlaceholders(value, businessInfo, placeholders);
      } else if (Array.isArray(value)) {
        // Process arrays recursively
        processedContent[key] = value.map(item => {
          if (typeof item === 'object' && item !== null) {
            return this.processContent(item, businessInfo, placeholders);
          }
          if (typeof item === 'string') {
            return this.replacePlaceholders(item, businessInfo, placeholders);
          }
          return item;
        });
      } else if (typeof value === 'object' && value !== null) {
        // Process nested objects recursively
        processedContent[key] = this.processContent(value, businessInfo, placeholders);
      } else {
        // Pass non-string/object values through unchanged
        processedContent[key] = value;
      }
    });

    return processedContent;
  }

  /**
   * Replace placeholders in a string with business info
   */
  private replacePlaceholders(
    text: string,
    businessInfo: Record<string, string>,
    defaultPlaceholders: Record<string, string>
  ): string {
    // Find all placeholders in the format {placeholderName}
    const placeholderRegex = /{([^}]+)}/g;
    
    return text.replace(placeholderRegex, (match, placeholderName) => {
      // Use business info if available, otherwise use template defaults
      return businessInfo[placeholderName] || defaultPlaceholders[placeholderName] || match;
    });
  }
}

// Export a singleton instance
export const templateProcessor = new TemplateProcessor();
