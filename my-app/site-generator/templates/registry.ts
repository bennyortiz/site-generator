import { SiteTemplate } from '../types/templates';

/**
 * Template Registry
 * 
 * Manages the registration and retrieval of site templates
 */
class TemplateRegistry {
  private templates: Record<string, SiteTemplate> = {};

  /**
   * Register a template in the registry
   */
  register(id: string, template: SiteTemplate): void {
    this.templates[id] = template;
  }

  /**
   * Get a template by ID
   */
  getTemplate(id: string): SiteTemplate | undefined {
    return this.templates[id];
  }

  /**
   * Get all registered templates
   */
  getAllTemplates(): Record<string, SiteTemplate> {
    return { ...this.templates };
  }

  /**
   * Get templates filtered by category
   */
  getTemplatesByCategory(category: string): SiteTemplate[] {
    return Object.values(this.templates).filter(
      template => template.category === category
    );
  }

  /**
   * Get templates filtered by industry
   */
  getTemplatesByIndustry(industry: string): SiteTemplate[] {
    return Object.values(this.templates).filter(
      template => template.industryTags.includes(industry)
    );
  }

  /**
   * Clear all registered templates (mainly for testing)
   */
  clear(): void {
    this.templates = {};
  }
}

// Export a singleton instance
export const templateRegistry = new TemplateRegistry();
