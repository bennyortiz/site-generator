'use client';

import React, { useState, useEffect } from 'react';
import { IconBrandNextjs, IconTemplate, IconLayout2, IconPalette, IconFileExport, IconWorldWww } from '@tabler/icons-react';
import { StudioProvider, useStudio } from '../../site-generator/components/studio/context';
import { cn } from '../../site-generator/utils/cn';
import TemplateSelector from '../../site-generator/components/studio/TemplateSelector';
import BusinessInfoForm from '../../site-generator/components/studio/BusinessInfoForm';
import TemplatePreview from '../../site-generator/components/studio/TemplatePreview';
import SectionPreview from '../../site-generator/components/studio/SectionPreview';
import { SiteTemplate } from '../../site-generator/types/templates';

// Import the template registry
import { getTemplateRegistry } from '../../site-generator/templates';

// Step IDs
export enum StudioStep {
  TEMPLATE_SELECTION = 'template_selection',
  BUSINESS_INFO = 'business_info',
  PAGE_SELECTION = 'page_selection',
  PAGE_STRUCTURE = 'page_structure',
  DESIGN_SETTINGS = 'design_settings',
  REVIEW_EXPORT = 'review_export'
}

// Step Configuration
const STEPS = [
  { 
    id: StudioStep.TEMPLATE_SELECTION,
    label: 'Template',
    description: 'Select an industry-specific template',
    icon: <IconTemplate className="h-4 w-4" />
  },
  { 
    id: StudioStep.BUSINESS_INFO,
    label: 'Business Info',
    description: 'Enter your business details',
    icon: <IconWorldWww className="h-4 w-4" />
  },
  { 
    id: StudioStep.PAGE_SELECTION, 
    label: 'Pages', 
    description: 'Select which pages to include in your site',
    icon: <IconLayout2 className="h-4 w-4" />
  },
  { 
    id: StudioStep.PAGE_STRUCTURE, 
    label: 'Structure', 
    description: 'Customize the sections for each page',
    icon: <IconLayout2 className="h-4 w-4" />
  },
  { 
    id: StudioStep.DESIGN_SETTINGS, 
    label: 'Design', 
    description: 'Configure colors, spacing, and typography',
    icon: <IconPalette className="h-4 w-4" />
  },
  { 
    id: StudioStep.REVIEW_EXPORT, 
    label: 'Export', 
    description: 'Review your site and export the project',
    icon: <IconFileExport className="h-4 w-4" />
  }
];

// Template Selection Step Component
const TemplateSelectionStep = () => {
  const { selectedTemplate, setSelectedTemplate } = useStudio();
  const [templates, setTemplates] = useState<SiteTemplate[]>([]);
  
  // Load templates from registry
  useEffect(() => {
    const registry = getTemplateRegistry();
    setTemplates(Object.values(registry));
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto py-6">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Select a template for your site</h2>
      
      <TemplateSelector 
        templates={templates}
        selectedTemplateId={selectedTemplate?.id || null}
        onSelectTemplate={template => setSelectedTemplate(template)}
      />
    </div>
  );
};

// Business Information Step Component
const BusinessInfoStep = () => {
  const { selectedTemplate, businessInfo, setBusinessInfo, previewDevice, setPreviewDevice } = useStudio();
  
  return (
    <div className="max-w-5xl mx-auto py-6">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Enter your business information</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <BusinessInfoForm
            template={selectedTemplate}
            businessInfo={businessInfo}
            onBusinessInfoChange={setBusinessInfo}
          />
        </div>
        
        <div>
          <TemplatePreview
            template={selectedTemplate}
            businessInfo={businessInfo}
            previewDevice={previewDevice}
            onChangePreviewDevice={setPreviewDevice}
          />
        </div>
      </div>
    </div>
  );
};

// Page Selection Step Component
const PageSelectionStep = () => {
  const { selectedPages, setSelectedPages, selectedTemplate } = useStudio();
  
  // Default pages based on template
  useEffect(() => {
    if (selectedTemplate && selectedTemplate.pages) {
      // Initialize selected pages based on template pages
      const templatePages = Object.keys(selectedTemplate.pages).reduce(
        (acc, pageId) => ({ ...acc, [pageId]: true }), 
        {}
      );
      setSelectedPages(templatePages);
    }
  }, [selectedTemplate, setSelectedPages]);
  
  // Available page types for customization
  const AVAILABLE_PAGES = [
    { id: 'home', label: 'Home Page', description: 'Main landing page', defaultSelected: true },
    { id: 'about', label: 'About Page', description: 'Company information', defaultSelected: true },
    { id: 'services', label: 'Services Page', description: 'What you offer', defaultSelected: true },
    { id: 'contact', label: 'Contact Page', description: 'How to reach you', defaultSelected: true },
    { id: 'blog', label: 'Blog Page', description: 'Articles and updates', defaultSelected: false },
    { id: 'portfolio', label: 'Portfolio Page', description: 'Work showcase', defaultSelected: false },
    { id: 'pricing', label: 'Pricing Page', description: 'Service/product pricing', defaultSelected: false },
    { id: 'team', label: 'Team Page', description: 'Team member profiles', defaultSelected: false },
    { id: 'faq', label: 'FAQ Page', description: 'Common questions', defaultSelected: false },
    { id: 'testimonials', label: 'Testimonials Page', description: 'Customer reviews', defaultSelected: false }
  ];
  
  // Handle page selection changes
  const handlePageSelection = (pageId: string, selected: boolean) => {
    setSelectedPages({ ...selectedPages, [pageId]: selected });
  };
  
  return (
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Select the pages you want in your site</h2>
      
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        {AVAILABLE_PAGES.map(page => (
          <div key={page.id} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <input
              type="checkbox"
              id={`page-${page.id}`}
              checked={selectedPages[page.id] ?? page.defaultSelected}
              onChange={(e) => handlePageSelection(page.id, e.target.checked)}
              className="h-5 w-5 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <div className="ml-3">
              <label htmlFor={`page-${page.id}`} className="block text-sm font-medium text-gray-900">
                {page.label}
              </label>
              <p className="text-sm text-gray-500">
                {page.description}
              </p>
            </div>
          </div>
        ))}
        
        <div className="pt-4">
          <button
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            onClick={() => {/* Add custom page logic */}}
          >
            + Add Custom Page
          </button>
        </div>
      </div>
    </div>
  );
};

// Function to get the content for a section based on type and variant
const getSectionContent = (sectionType: string, sectionVariant: string, template?: SiteTemplate, pageName?: string) => {
  if (!template || !pageName || !template.pages[pageName]) {
    return {};
  }
  
  // Find a matching section in the template
  const page = template.pages[pageName];
  const matchingSection = page.sections.find(
    section => section.type === sectionType && section.variant === sectionVariant
  );
  
  // If found, return its content, otherwise return empty object
  return matchingSection?.content || {};
};

// Page Structure Step Component
const PageStructureStep = () => {
  const { 
    currentPage, 
    selectedPages, 
    setCurrentPage,
    pageSections,
    setPageSections,
    selectedTemplate,
    businessInfo,
    previewDevice, 
    setPreviewDevice
  } = useStudio();
  
  // Get all selected pages
  const selectedPageIds = Object.entries(selectedPages)
    .filter(([_, selected]) => selected)
    .map(([id]) => id);
  
  // Current page sections
  const currentPageSections = pageSections[currentPage] || [];
  
  // Helper to change the current page
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
  };
  
  // Open variant selector popup
  const handleCustomizeClick = (sectionType: string, currentVariant: string, sectionId: string) => {
    const event = new CustomEvent('open-variant-popup', { 
      detail: { 
        sectionType, 
        currentVariant,
        sectionId,
        pageId: currentPage 
      } 
    });
    window.dispatchEvent(event);
  };
  
  // Add a new section 
  const handleAddSection = () => {
    // For simplicity, just add a features section
    const newSection = {
      id: `section-${Date.now()}`,
      type: 'features',
      variant: 'grid'
    };
    
    const updatedSections = { 
      ...pageSections,
      [currentPage]: [...(pageSections[currentPage] || []), newSection]
    };
    
    setPageSections(updatedSections);
  };
  
  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900">
          Page Structure: {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page
        </h2>
        
        <div className="flex space-x-2">
          {selectedPageIds.map(pageId => (
            <button
              key={pageId}
              className={cn(
                "px-3 py-1 text-sm rounded-md",
                pageId === currentPage 
                  ? "bg-blue-100 text-blue-700 font-medium" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => handlePageChange(pageId)}
            >
              {pageId.charAt(0).toUpperCase() + pageId.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {currentPageSections.map((section, index) => (
          <div key={section.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-medium">
                Section {index + 1}: {section.type.charAt(0).toUpperCase() + section.type.slice(1)}
              </h3>
              <button
                className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                onClick={() => handleCustomizeClick(section.type, section.variant, section.id)}
              >
                Customize
              </button>
            </div>
            <div className="overflow-hidden">
              {selectedTemplate && selectedTemplate.pages && selectedTemplate.pages[currentPage] ? (
                <SectionPreview 
                  sectionType={section.type} 
                  variant={section.variant}
                  content={getSectionContent(section.type, section.variant, selectedTemplate, currentPage)}
                  className="w-full"
                />
              ) : (
                <div className="p-4 bg-gray-50 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p className="font-medium">No template selected or page not found</p>
                    <p className="text-sm">Select a template and page to see preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="flex space-x-4 mt-8">
          <button
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={handleAddSection}
          >
            + Add Section
          </button>
          <button
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={() => {/* Reorder sections logic would go here */}}
          >
            Reorder Sections
          </button>
        </div>
      </div>
    </div>
  );
};

// Design Settings Step Component (Placeholder)
const DesignSettingsStep = () => {
  const { 
    colorTheme, setColorTheme,
    borderRadius, setBorderRadius,
    spacing, setSpacing,
    typography, setTypography
  } = useStudio();
  
  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Design Settings</h2>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Color Scheme */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Color Scheme</h3>
            <div className="space-y-2">
              {[
                { id: 'blue', label: 'Professional Blue' },
                { id: 'purple', label: 'Creative Purple' },
                { id: 'green', label: 'Modern Green' },
                { id: 'red', label: 'Bold Red' },
                { id: 'gray', label: 'Minimal Gray' }
              ].map(scheme => (
                <div key={scheme.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`color-${scheme.id}`}
                    name="colorScheme"
                    checked={colorTheme === scheme.id}
                    onChange={() => setColorTheme(scheme.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`color-${scheme.id}`} className="ml-2 text-sm text-gray-700">
                    {scheme.label}
                  </label>
                </div>
              ))}
              <div className="flex items-center pt-1">
                <input
                  type="radio"
                  id="color-custom"
                  name="colorScheme"
                  checked={![
                    'blue', 'purple', 'green', 'red', 'gray'
                  ].includes(colorTheme)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="color-custom" className="ml-2 text-sm text-gray-700">
                  Custom...
                </label>
              </div>
            </div>
          </div>
          
          {/* Border Radius */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Border Radius</h3>
            <div className="space-y-2">
              {[
                { id: 'none', label: 'None (0px)' },
                { id: 'subtle', label: 'Subtle (2px)' },
                { id: 'rounded', label: 'Rounded (4px)' },
                { id: 'pill', label: 'Pill (8px+)' }
              ].map(radius => (
                <div key={radius.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`radius-${radius.id}`}
                    name="borderRadius"
                    checked={borderRadius === radius.id}
                    onChange={() => setBorderRadius(radius.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`radius-${radius.id}`} className="ml-2 text-sm text-gray-700">
                    {radius.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Spacing Scale */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Spacing Scale</h3>
            <div className="space-y-2">
              {[
                { id: 'compact', label: 'Compact' },
                { id: 'standard', label: 'Standard' },
                { id: 'relaxed', label: 'Relaxed' },
                { id: 'airy', label: 'Airy' }
              ].map(spacingOption => (
                <div key={spacingOption.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`spacing-${spacingOption.id}`}
                    name="spacingScale"
                    checked={spacing === spacingOption.id}
                    onChange={() => setSpacing(spacingOption.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`spacing-${spacingOption.id}`} className="ml-2 text-sm text-gray-700">
                    {spacingOption.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Typography */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Typography</h3>
            <div className="space-y-2">
              {[
                { id: 'modern', label: 'Modern Sans' },
                { id: 'classic', label: 'Classic Serif' },
                { id: 'minimal', label: 'Minimalist' },
                { id: 'creative', label: 'Creative Mix' }
              ].map(font => (
                <div key={font.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`font-${font.id}`}
                    name="typography"
                    checked={typography === font.id}
                    onChange={() => setTypography(font.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`font-${font.id}`} className="ml-2 text-sm text-gray-700">
                    {font.label}
                  </label>
                </div>
              ))}
              <div className="flex items-center pt-1">
                <input
                  type="radio"
                  id="font-custom"
                  name="typography"
                  checked={![
                    'modern', 'classic', 'minimal', 'creative'
                  ].includes(typography)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="font-custom" className="ml-2 text-sm text-gray-700">
                  Custom...
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Live Preview */}
        <div className="mt-8">
          <h3 className="text-base font-medium text-gray-900 mb-3">Live Preview</h3>
          <div className="border border-gray-200 rounded-lg p-4 h-64 bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="font-medium">Interactive preview with current design settings</p>
              <p className="text-sm">(Will show preview of components with selected styles)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Review and Export Step Component (Placeholder)
const ReviewExportStep = () => {
  const { 
    projectName, 
    setProjectName,
    selectedPages, 
    colorTheme, 
    borderRadius, 
    spacing, 
    typography,
    handleExport,
    selectedTemplate,
    businessInfo
  } = useStudio();
  
  // Get selected page names
  const selectedPageNames = Object.entries(selectedPages)
    .filter(([_, selected]) => selected)
    .map(([id]) => id.charAt(0).toUpperCase() + id.slice(1));
  
  // Export options state
  const [exportOptions, setExportOptions] = useState({
    includeReadme: true,
    generatePlaceholders: true,
    addExamplePosts: false,
    includeComments: true
  });
  
  // Handle export option changes
  const handleExportOptionChange = (option: keyof typeof exportOptions, value: boolean) => {
    setExportOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };
  
  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Review & Export</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project Summary */}
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium mb-3">Template:</h3>
            <div className="text-sm">
              {selectedTemplate ? selectedTemplate.name : 'No template selected'}
              {selectedTemplate && (
                <div className="mt-1 text-xs text-gray-500">
                  {selectedTemplate.description}
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium mb-3">Business Info:</h3>
            <div className="space-y-1 text-sm">
              <div>• Name: {businessInfo.businessName || 'Not set'}</div>
              <div>• Tagline: {businessInfo.tagline || 'Not set'}</div>
              <div>• Contact: {businessInfo.email || 'Not set'}</div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium mb-3">Pages:</h3>
            <div className="space-y-1">
              {selectedPageNames.length > 0 ? (
                selectedPageNames.map(page => (
                  <div key={page} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">{page}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500">No pages selected</div>
              )}
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium mb-3">Design Settings:</h3>
            <div className="space-y-1 text-sm">
              <div>• Color: {colorTheme.charAt(0).toUpperCase() + colorTheme.slice(1)}</div>
              <div>• Radius: {borderRadius.charAt(0).toUpperCase() + borderRadius.slice(1)}</div>
              <div>• Spacing: {spacing.charAt(0).toUpperCase() + spacing.slice(1)}</div>
              <div>• Typography: {typography.charAt(0).toUpperCase() + typography.slice(1)}</div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium mb-3">Project Name:</h3>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Preview */}
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium">Interactive Preview</h3>
            </div>
            <div className="h-80 bg-gray-50 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="font-medium">Page preview with all design settings</p>
                <p className="text-sm">(This will show a live preview of the selected page)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Options */}
      <div className="mt-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-medium mb-3">Export Options:</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include-readme"
                checked={exportOptions.includeReadme}
                onChange={(e) => handleExportOptionChange('includeReadme', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="include-readme" className="ml-2 text-sm text-gray-700">
                Include README
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="generate-placeholders"
                checked={exportOptions.generatePlaceholders}
                onChange={(e) => handleExportOptionChange('generatePlaceholders', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="generate-placeholders" className="ml-2 text-sm text-gray-700">
                Generate placeholder content
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="add-example-posts"
                checked={exportOptions.addExamplePosts}
                onChange={(e) => handleExportOptionChange('addExamplePosts', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="add-example-posts" className="ml-2 text-sm text-gray-700">
                Add example blog posts
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include-comments"
                checked={exportOptions.includeComments}
                onChange={(e) => handleExportOptionChange('includeComments', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="include-comments" className="ml-2 text-sm text-gray-700">
                Include component comments
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleExport}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Export Project
        </button>
      </div>
    </div>
  );
};

/**
 * Section Variant Popup Component (Placeholder)
 */
const SectionVariantPopup = ({ 
  isOpen, 
  onClose, 
  sectionType,
  currentVariant,
  onSelectVariant
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  sectionType: string;
  currentVariant: string;
  onSelectVariant: (variant: string) => void;
}) => {
  if (!isOpen) return null;
  
  // Example variants for different section types
  const variantsByType: Record<string, Array<{ id: string, name: string }>> = {
    hero: [
      { id: 'centered', name: 'Centered' },
      { id: 'split', name: 'Split' },
      { id: 'minimal', name: 'Minimal' },
      { id: 'video', name: 'Video' },
      { id: 'gradient', name: 'Gradient' },
      { id: 'full-bg', name: 'Full Background' },
      { id: 'animated', name: 'Animated' },
      { id: 'search', name: 'With Search' }
    ],
    features: [
      { id: 'grid', name: 'Grid' },
      { id: 'alternating', name: 'Alternating' },
      { id: 'icon-grid', name: 'Icon Grid' },
      { id: 'cards', name: 'Cards' },
      { id: 'tabbed', name: 'Tabbed' },
      { id: 'numbered', name: 'Numbered' }
    ],
    testimonials: [
      { id: 'carousel', name: 'Carousel' },
      { id: 'grid', name: 'Grid' },
      { id: 'spotlight', name: 'Spotlight' },
      { id: 'quotes', name: 'Quotes' }
    ],
    cta: [
      { id: 'centered', name: 'Centered' },
      { id: 'split', name: 'Split' },
      { id: 'full-width', name: 'Full Width' },
      { id: 'banner', name: 'Banner' }
    ]
  };
  
  // Get variants for current section type
  const variants = variantsByType[sectionType] || [];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">
            Select {sectionType.charAt(0).toUpperCase() + sectionType.slice(1)} Variation
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {variants.map(variant => (
              <div 
                key={variant.id}
                className={cn(
                  "border rounded-lg p-2 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors",
                  variant.id === currentVariant ? "border-blue-500 bg-blue-50" : "border-gray-200"
                )}
                onClick={() => onSelectVariant(variant.id)}
              >
                <div className="aspect-video bg-gray-100 rounded mb-2 flex items-center justify-center">
                  {/* This would be a thumbnail image in a real implementation */}
                  <div className="text-xs text-gray-500">Preview</div>
                </div>
                <div className="text-sm font-medium text-center">
                  {variant.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between">
            <div className="text-sm text-gray-500">
              Currently selected: <span className="font-medium">{
                variants.find(v => v.id === currentVariant)?.name || currentVariant
              }</span>
            </div>
            <div className="space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-white hover:bg-blue-700"
              >
                Apply Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Step Navigation Component
 */
const StepNavigation = ({
  currentStepId,
  onStepChange,
  onBack,
  onNext
}: {
  currentStepId: string;
  onStepChange: (stepId: string) => void;
  onBack: () => void;
  onNext: () => void;
}) => {
  const currentIndex = STEPS.findIndex(step => step.id === currentStepId);
  
  return (
    <div className="py-4 px-6 bg-white border-t border-gray-200 flex justify-between">
      <button
        onClick={onBack}
        className={cn(
          "px-4 py-2 rounded-md",
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:bg-gray-50"
        )}
        disabled={currentIndex === 0}
      >
        Back
      </button>
      
      <div className="hidden sm:flex items-center space-x-1">
        {STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full cursor-pointer transition-colors",
                currentIndex === index
                  ? "bg-blue-600"
                  : index < currentIndex
                    ? "bg-blue-300"
                    : "bg-gray-300"
              )}
              onClick={() => index <= currentIndex && onStepChange(step.id)}
            />
            {index < STEPS.length - 1 && (
              <div className="w-6 h-px bg-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <button
        onClick={onNext}
        className={cn(
          "px-4 py-2 rounded-md bg-blue-600 text-white",
          currentIndex === STEPS.length - 1 && "bg-green-600"
        )}
      >
        {currentIndex === STEPS.length - 1 ? 'Export' : 'Continue'}
      </button>
    </div>
  );
};

/**
 * Main Wizard Page Component
 */
const WizardContent = () => {
  const [currentStepId, setCurrentStepId] = useState<StudioStep>(StudioStep.TEMPLATE_SELECTION);
  const [variantPopupState, setVariantPopupState] = useState<{
    isOpen: boolean;
    sectionType: string;
    currentVariant: string;
    sectionId: string;
    pageId: string;
  }>({
    isOpen: false,
    sectionType: '',
    currentVariant: '',
    sectionId: '',
    pageId: ''
  });
  
  // Get page sections from context
  const { pageSections, setPageSections, updateSectionVariant } = useStudio();
  
  // Set up event listener for opening the variant popup
  useEffect(() => {
    const handleOpenVariantPopup = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { sectionType, currentVariant, sectionId, pageId } = customEvent.detail;
      setVariantPopupState({
        isOpen: true,
        sectionType,
        currentVariant,
        sectionId,
        pageId
      });
    };
    
    window.addEventListener('open-variant-popup', handleOpenVariantPopup);
    
    return () => {
      window.removeEventListener('open-variant-popup', handleOpenVariantPopup);
    };
  }, []);
  
  // Handle step navigation
  const handleStepChange = (stepId: StudioStep) => {
    setCurrentStepId(stepId);
  };
  
  const handleBackStep = () => {
    const currentIndex = STEPS.findIndex(step => step.id === currentStepId);
    if (currentIndex > 0) {
      setCurrentStepId(STEPS[currentIndex - 1].id as StudioStep);
    }
  };
  
  const handleNextStep = () => {
    const currentIndex = STEPS.findIndex(step => step.id === currentStepId);
    if (currentIndex < STEPS.length - 1) {
      setCurrentStepId(STEPS[currentIndex + 1].id as StudioStep);
    }
  };
  
  // Close variant popup
  const closeVariantPopup = () => {
    setVariantPopupState({
      ...variantPopupState,
      isOpen: false
    });
  };
  
  // Handle variant selection
  const handleVariantSelection = (variantId: string) => {
    const { pageId, sectionId } = variantPopupState;
    
    // Use the context's updateSectionVariant method
    updateSectionVariant(pageId, sectionId, variantId);
    
    // Close the popup
    closeVariantPopup();
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center">
            <IconBrandNextjs className="h-8 w-8 text-black mr-2" />
            <h1 className="text-xl font-semibold text-gray-900">Next.js Site Generator</h1>
          </div>
          <div className="ml-auto hidden sm:block">
            <div className="flex items-center space-x-2">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {index > 0 && <div className="w-6 h-px bg-gray-300 mx-1" />}
                  <div
                    className={cn(
                      "flex items-center text-sm",
                      currentStepId === step.id
                        ? "text-blue-600 font-medium"
                        : "text-gray-500"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mr-1.5",
                        currentStepId === step.id
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      )}
                    >
                      {index + 1}
                    </div>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto">
        {currentStepId === StudioStep.TEMPLATE_SELECTION && <TemplateSelectionStep />}
        {currentStepId === StudioStep.BUSINESS_INFO && <BusinessInfoStep />}
        {currentStepId === StudioStep.PAGE_SELECTION && <PageSelectionStep />}
        {currentStepId === StudioStep.PAGE_STRUCTURE && <PageStructureStep />}
        {currentStepId === StudioStep.DESIGN_SETTINGS && <DesignSettingsStep />}
        {currentStepId === StudioStep.REVIEW_EXPORT && <ReviewExportStep />}
      </main>
      
      <StepNavigation
        currentStepId={currentStepId}
        onStepChange={(stepId) => setCurrentStepId(stepId as StudioStep)}
        onBack={handleBackStep}
        onNext={handleNextStep}
      />
      
      <SectionVariantPopup
        isOpen={variantPopupState.isOpen}
        onClose={closeVariantPopup}
        sectionType={variantPopupState.sectionType}
        currentVariant={variantPopupState.currentVariant}
        onSelectVariant={handleVariantSelection}
      />
    </div>
  );
};

/**
 * Wizard Page Component
 */
export default function WizardPage() {
  // We'll need to update the StudioContext to support all the new props we use
  return (
    <StudioProvider>
      <WizardContent />
    </StudioProvider>
  );
}
