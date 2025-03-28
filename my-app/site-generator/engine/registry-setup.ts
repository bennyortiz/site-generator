import { initializeAutoDiscovery } from './auto-discovery';

/**
 * Initialize component registry
 * 
 * This function should be called at application startup to register all components.
 * It ensures that components are available for use in the studio and generator.
 */
export function initializeRegistry(): void {
  console.log('Initializing component registry...');
  
  // Use the new auto-discovery system that automatically finds and registers components
  initializeAutoDiscovery();
  
  console.log('Component registry initialization complete');
}

/**
 * Get information about all registered components
 * 
 * This is useful for debugging and diagnostics
 */
export function getRegistryInfo(): Record<string, any> {
  // This would provide information about all registered components
  // More comprehensive implementation would be needed for production
  return {
    initialized: true,
    // Add more info here
  };
}

export default { 
  initializeRegistry,
  getRegistryInfo 
};
