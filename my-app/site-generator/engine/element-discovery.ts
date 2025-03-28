import { ComponentMetadata, registerEnhancedComponent } from './enhanced-component-registry';
import Button from '../components/elements/button';
import { ButtonComponent } from '../components/elements/button/types';

/**
 * Register a button element component with its variants
 * 
 * @param ButtonComponent The button component
 */
export function registerButtonElement(ButtonComponent: ButtonComponent): void {
  // Get the metadata from the component
  const metadata = ButtonComponent.metadata;
  
  if (!metadata) {
    throw new Error('Button component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'primary-button': ButtonComponent.Primary,
    'secondary-button': ButtonComponent.Secondary,
    'outline-button': ButtonComponent.Outline,
    'text-button-with-icon': ButtonComponent.Link,
    'icon-only-button': ButtonComponent.Icon,
    'cta-button-with-arrow': ButtonComponent.CTA,
    'full-width-button': ButtonComponent.Primary, // We can reuse Primary with fullWidth prop
  };
  
  // Register with the enhanced registry
  registerEnhancedComponent(ButtonComponent, metadata, variants);
}

/**
 * Initialize element discovery system
 * This should be called at application startup to register all element components
 */
export function initializeElementDiscovery(): void {
  console.log("Initializing element discovery system...");
  
  // Register Button element
  registerButtonElement(Button);
  
  // Additional elements would be registered here
  // registerCardElement(Card);
  // registerAccordionElement(Accordion);
  // etc.
  
  console.log("Element discovery initialization complete");
}

/**
 * Get information about all registered elements
 * 
 * This is useful for debugging and diagnostics
 */
export function getElementsInfo(): Record<string, any> {
  // This would provide information about all registered elements
  return {
    elements: [
      {
        name: 'button',
        variants: [
          'primary-button',
          'secondary-button',
          'outline-button',
          'text-button-with-icon',
          'icon-only-button',
          'cta-button-with-arrow',
          'full-width-button'
        ]
      }
      // Add more elements as they are registered
    ]
  };
}

export default {
  initializeElementDiscovery,
  registerButtonElement,
  getElementsInfo
};
