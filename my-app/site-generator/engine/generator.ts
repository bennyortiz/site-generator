import { SiteConfig, PageConfig, SectionConfig } from '../types/config';
import { getComponentForSection } from './component-registry';

/**
 * Options for generating a site
 */
export interface GenerateOptions {
  /**
   * The site configuration
   */
  config: SiteConfig;
  
  /**
   * The output directory
   */
  outputDir: string;
  
  /**
   * Whether to overwrite existing files
   * @default false
   */
  overwrite?: boolean;
}

/**
 * Result of the generation process
 */
export interface GenerateResult {
  /**
   * Whether the generation was successful
   */
  success: boolean;
  
  /**
   * The output directory
   */
  outputDir: string;
  
  /**
   * Generated files (relative paths)
   */
  files?: string[];
  
  /**
   * Error message if generation failed
   */
  error?: string;
  
  /**
   * Warning messages
   */
  warnings?: string[];
}

/**
 * Generate a Next.js site from a configuration
 * 
 * @param options Generation options
 * @returns Result of the generation process
 */
export async function generateSite(options: GenerateOptions): Promise<GenerateResult> {
  const { config, outputDir, overwrite = false } = options;
  
  try {
    // Validate the configuration
    validateConfiguration(config);
    
    // Generate project structure
    await generateProjectStructure(outputDir, overwrite);
    
    // Generate theme files
    await generateThemeFiles(outputDir, config.theme);
    
    // Generate pages
    const generatedPages = await generatePages(outputDir, config);
    
    // Generate layout
    await generateLayout(outputDir, config);
    
    // Generate additional files (robots.txt, sitemap.xml, etc.)
    await generateAdditionalFiles(outputDir, config);
    
    return {
      success: true,
      outputDir,
      files: generatedPages,
    };
  } catch (error) {
    console.error('Error generating site:', error);
    return {
      success: false,
      outputDir,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Validate the site configuration
 * 
 * @param config The site configuration to validate
 * @throws Error if the configuration is invalid
 */
function validateConfiguration(config: SiteConfig): void {
  // Check required fields
  if (!config.metadata) {
    throw new Error('Missing metadata in configuration');
  }
  
  if (!config.metadata.title) {
    throw new Error('Missing metadata.title in configuration');
  }
  
  if (!config.pages || Object.keys(config.pages).length === 0) {
    throw new Error('No pages defined in configuration');
  }
  
  // Validate pages
  for (const [key, page] of Object.entries(config.pages)) {
    if (!page.path) {
      throw new Error(`Missing path for page "${key}"`);
    }
    
    if (!page.title) {
      throw new Error(`Missing title for page "${key}"`);
    }
    
    if (!page.sections || page.sections.length === 0) {
      throw new Error(`No sections defined for page "${key}"`);
    }
    
    // Validate sections
    for (const section of page.sections) {
      if (!section.id) {
        throw new Error(`Missing id for section in page "${key}"`);
      }
      
      if (!section.type) {
        throw new Error(`Missing type for section "${section.id}" in page "${key}"`);
      }
      
      // Check if section type is registered
      const component = getComponentForSection(section);
      if (!component) {
        throw new Error(`Unknown section type "${section.type}" for section "${section.id}" in page "${key}"`);
      }
    }
  }
}

/**
 * Generate the basic project structure
 * 
 * @param outputDir The output directory
 * @param overwrite Whether to overwrite existing files
 */
async function generateProjectStructure(outputDir: string, overwrite: boolean): Promise<void> {
  // This would create directories and basic files like package.json, tsconfig.json, etc.
  // For the prototype, we'll just log what would be done
  console.log(`[Generator] Creating project structure in ${outputDir}`);
  
  // The actual implementation would create directories and files:
  // - app/ (Next.js app directory)
  // - components/
  // - lib/
  // - public/
  // - package.json
  // - tsconfig.json
  // - etc.
}

/**
 * Generate theme files
 * 
 * @param outputDir The output directory
 * @param theme The theme configuration
 */
async function generateThemeFiles(outputDir: string, theme: any): Promise<void> {
  // This would generate tailwind.config.js, globals.css, etc.
  console.log('[Generator] Generating theme files');
  
  // The actual implementation would:
  // - Generate tailwind.config.js with the theme colors, etc.
  // - Generate CSS variables in globals.css
  // - Generate any other theme-related files
}

/**
 * Generate pages from the configuration
 * 
 * @param outputDir The output directory
 * @param config The site configuration
 * @returns Array of generated page paths
 */
async function generatePages(outputDir: string, config: SiteConfig): Promise<string[]> {
  const generatedPages: string[] = [];
  
  for (const [key, page] of Object.entries(config.pages)) {
    const pagePath = await generatePage(outputDir, key, page, config);
    generatedPages.push(pagePath);
  }
  
  return generatedPages;
}

/**
 * Generate a single page
 * 
 * @param outputDir The output directory
 * @param key The page key
 * @param page The page configuration
 * @param config The site configuration
 * @returns The generated page path
 */
async function generatePage(
  outputDir: string,
  key: string,
  page: PageConfig,
  config: SiteConfig
): Promise<string> {
  // Convert route to file path (e.g., "/about" -> "app/about/page.tsx")
  const pagePath = page.path === '/' 
    ? 'app/page.tsx'
    : `app${page.path}/page.tsx`;
  
  console.log(`[Generator] Generating page: ${pagePath}`);
  
  // The actual implementation would:
  // - Create the page file
  // - Import the necessary components
  // - Generate the page component with the sections
  
  return pagePath;
}

/**
 * Generate the app layout
 * 
 * @param outputDir The output directory
 * @param config The site configuration
 */
async function generateLayout(outputDir: string, config: SiteConfig): Promise<void> {
  // This would generate the app/layout.tsx file
  console.log('[Generator] Generating layout');
  
  // The actual implementation would:
  // - Create the layout.tsx file
  // - Include the navigation, footer, etc.
  // - Set up the metadata from the configuration
}

/**
 * Generate additional files
 * 
 * @param outputDir The output directory
 * @param config The site configuration
 */
async function generateAdditionalFiles(outputDir: string, config: SiteConfig): Promise<void> {
  // This would generate robots.txt, sitemap.xml, etc.
  console.log('[Generator] Generating additional files');
  
  // The actual implementation would:
  // - Generate robots.txt
  // - Generate sitemap.xml
  // - Generate any other necessary files
}

/**
 * Format a string to PascalCase
 * 
 * @param str The string to format
 * @returns The string in PascalCase
 */
export function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Format a string to camelCase
 * 
 * @param str The string to format
 * @returns The string in camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word, index) => 
      index === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
