import { SiteTemplate } from '../types/templates';
import restaurantTemplate from './industry/restaurant';
import { templateRegistry } from './registry';

/**
 * Initialize the template registry with all available templates
 */
export const initializeTemplateRegistry = (): void => {
  // Register industry-specific templates
  templateRegistry.register('restaurant', restaurantTemplate);
  
  // Add more templates here as they become available
  // templateRegistry.register('healthcare', healthcareTemplate);
  // templateRegistry.register('tech', techTemplate);
  // etc.
};

/**
 * Get the template registry with all registered templates
 */
export const getTemplateRegistry = (): Record<string, SiteTemplate> => {
  // Make sure templates are registered
  initializeTemplateRegistry();
  
  // Return all registered templates
  return templateRegistry.getAllTemplates();
};

/**
 * Get a specific template by ID
 */
export const getTemplateById = (id: string): SiteTemplate | null => {
  // Make sure templates are registered
  initializeTemplateRegistry();
  
  // Return the requested template
  return templateRegistry.getTemplate(id) || null;
};
