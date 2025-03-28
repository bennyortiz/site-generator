'use client';

import React, { useState } from 'react';
import { 
  IconDeviceMobile,
  IconDeviceTablet, 
  IconDeviceDesktop,
  IconBrandNextjs,
  IconDownload
} from '@tabler/icons-react';
import { cn } from '../../site-generator/utils/cn';
import { StudioProvider, useStudio } from '../../site-generator/components/studio/context';
import { DevicePreview } from '../../site-generator/components/studio';

// Industry options
const INDUSTRIES = [
  { value: 'technology', label: 'Technology' },
  { value: 'business', label: 'Business Services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'creative', label: 'Creative Services' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'nonprofit', label: 'Non-Profit' },
  { value: 'professional', label: 'Professional Services' }
];

// Template options
const TEMPLATES = [
  { value: 'business', label: 'Business' },
  { value: 'creative', label: 'Creative' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'professional', label: 'Professional' }
];

// Color theme options
const COLOR_THEMES = [
  { value: 'blue', label: 'Professional Blue' },
  { value: 'green', label: 'Modern Green' },
  { value: 'purple', label: 'Creative Purple' },
  { value: 'red', label: 'Bold Red' },
  { value: 'gray', label: 'Minimal Gray' }
];

// Font style options
const FONT_STYLES = [
  { value: 'modern', label: 'Modern' },
  { value: 'classic', label: 'Classic' },
  { value: 'playful', label: 'Playful' },
  { value: 'elegant', label: 'Elegant' },
  { value: 'minimal', label: 'Minimal' }
];

// Available pages
const AVAILABLE_PAGES = [
  { id: 'home', label: 'Home', defaultSelected: true },
  { id: 'about', label: 'About', defaultSelected: true },
  { id: 'services', label: 'Services', defaultSelected: true },
  { id: 'contact', label: 'Contact', defaultSelected: true },
  { id: 'blog', label: 'Blog', defaultSelected: false },
  { id: 'products', label: 'Products', defaultSelected: false },
  { id: 'portfolio', label: 'Portfolio', defaultSelected: false },
  { id: 'faq', label: 'FAQ', defaultSelected: false }
];

/**
 * Form field component
 */
const FormField = ({ 
  label, 
  children, 
  className 
}: { 
  label: string, 
  children: React.ReactNode, 
  className?: string 
}) => (
  <div className={cn("mb-4", className)}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);

/**
 * Simplified Studio content
 */
const SimplifiedStudioContent = () => {
  // Get studio context
  const {
    config,
    handleInputChange,
    previewDevice,
    setPreviewDevice,
    handleExport
  } = useStudio();

  // Local state for form values
  const [formValues, setFormValues] = useState({
    projectName: 'my-business-site',
    businessName: '',
    tagline: '',
    industry: 'professional',
    email: '',
    phone: '',
    address: '',
    template: 'business',
    colorTheme: 'blue',
    fontStyle: 'modern'
  });

  // State for selected pages
  const [selectedPages, setSelectedPages] = useState(
    AVAILABLE_PAGES.reduce((acc, page) => {
      acc[page.id] = page.defaultSelected;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Handle form input changes
  const handleFormChange = (field: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value
    }));

    // Update config based on business information
    if (field === 'businessName') {
      handleInputChange('business.name', value);
    } else if (field === 'tagline') {
      handleInputChange('business.tagline', value);
    } else if (field === 'email') {
      handleInputChange('business.contact.email', value);
    } else if (field === 'phone') {
      handleInputChange('business.contact.phone', value);
    } else if (field === 'address') {
      handleInputChange('business.contact.address', value);
    } else if (field === 'template') {
      handleInputChange('template', value);
    } else if (field === 'colorTheme') {
      handleInputChange('colorTheme', value);
    } else if (field === 'fontStyle') {
      handleInputChange('fontStyle', value);
    }
  };

  // Handle checkbox changes for pages
  const handlePageSelection = (pageId: string, selected: boolean) => {
    setSelectedPages(prev => ({
      ...prev,
      [pageId]: selected
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center">
            <IconBrandNextjs className="h-8 w-8 text-black mr-2" />
            <h1 className="text-xl font-semibold text-gray-900">Next.js Site Generator</h1>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            {/* Business Information */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Business Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Project Name">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.projectName}
                    onChange={(e) => handleFormChange('projectName', e.target.value)}
                  />
                </FormField>
                
                <FormField label="Business Name">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.businessName}
                    onChange={(e) => handleFormChange('businessName', e.target.value)}
                    placeholder="Acme Corporation"
                  />
                </FormField>
                
                <FormField label="Tagline">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.tagline}
                    onChange={(e) => handleFormChange('tagline', e.target.value)}
                    placeholder="Quality widgets for all your needs"
                  />
                </FormField>
                
                <FormField label="Industry">
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.industry}
                    onChange={(e) => handleFormChange('industry', e.target.value)}
                  >
                    {INDUSTRIES.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </FormField>
                
                <FormField label="Contact Email">
                  <input
                    type="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    placeholder="contact@acmecorp.com"
                  />
                </FormField>
                
                <FormField label="Contact Phone">
                  <input
                    type="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </FormField>
                
                <FormField label="Address" className="md:col-span-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.address}
                    onChange={(e) => handleFormChange('address', e.target.value)}
                    placeholder="123 Business St, Anytown, ST 12345"
                  />
                </FormField>
              </div>
            </div>
            
            {/* Site Structure */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Site Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField label="Template">
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.template}
                    onChange={(e) => handleFormChange('template', e.target.value)}
                  >
                    {TEMPLATES.map(template => (
                      <option key={template.value} value={template.value}>
                        {template.label}
                      </option>
                    ))}
                  </select>
                </FormField>
                
                <FormField label="Color Theme">
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.colorTheme}
                    onChange={(e) => handleFormChange('colorTheme', e.target.value)}
                  >
                    {COLOR_THEMES.map(theme => (
                      <option key={theme.value} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </FormField>
                
                <FormField label="Font Style">
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formValues.fontStyle}
                    onChange={(e) => handleFormChange('fontStyle', e.target.value)}
                  >
                    {FONT_STYLES.map(font => (
                      <option key={font.value} value={font.value}>
                        {font.label}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
              
              {/* Pages selection */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Pages to include:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {AVAILABLE_PAGES.map(page => (
                    <div key={page.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`page-${page.id}`}
                        checked={selectedPages[page.id]}
                        onChange={(e) => handlePageSelection(page.id, e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`page-${page.id}`} className="ml-2 text-sm text-gray-700">
                        {page.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Preview */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Preview
                </h2>
                <div className="flex space-x-2 bg-gray-100 p-1 rounded-md">
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={cn(
                      "p-1.5 rounded",
                      previewDevice === 'mobile' ? "bg-white shadow" : "hover:bg-gray-200"
                    )}
                    aria-label="Mobile preview"
                  >
                    <IconDeviceMobile className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('tablet')}
                    className={cn(
                      "p-1.5 rounded",
                      previewDevice === 'tablet' ? "bg-white shadow" : "hover:bg-gray-200"
                    )}
                    aria-label="Tablet preview"
                  >
                    <IconDeviceTablet className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={cn(
                      "p-1.5 rounded",
                      previewDevice === 'desktop' ? "bg-white shadow" : "hover:bg-gray-200"
                    )}
                    aria-label="Desktop preview"
                  >
                    <IconDeviceDesktop className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden bg-gray-50 p-4">
                <DevicePreview 
                  config={config}
                  previewDevice={previewDevice}
                  setPreviewDevice={setPreviewDevice}
                  currentStep={0} // Not used in the simplified version
                />
              </div>
            </div>
            
            {/* Export button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleExport}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <IconDownload className="mr-2 h-5 w-5" />
                Export Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simplified Studio Page component
 */
export default function SimplifiedStudioPage() {
  return (
    <StudioProvider>
      <SimplifiedStudioContent />
    </StudioProvider>
  );
}
