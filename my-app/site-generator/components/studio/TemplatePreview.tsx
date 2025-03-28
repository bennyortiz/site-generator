import React from 'react';
import { SiteTemplate } from '../../types/templates';
import { cn } from '../../utils/cn';
import { templateProcessor } from '../../engine/template-processor';
import DevicePreview from './DevicePreview';

interface TemplatePreviewProps {
  template: SiteTemplate | null;
  businessInfo: Record<string, string>;
  previewDevice: 'mobile' | 'tablet' | 'desktop';
  onChangePreviewDevice: (device: 'mobile' | 'tablet' | 'desktop') => void;
}

/**
 * Template Preview Component
 * 
 * Shows a preview of the currently selected template with the provided business information
 */
const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  template,
  businessInfo,
  previewDevice,
  onChangePreviewDevice
}) => {
  // Handle when no template is selected
  if (!template) {
    return (
      <div className="p-6 text-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">Select a template to see a preview</p>
      </div>
    );
  }
  
  // Get all pages from the template
  const pageIds = Object.keys(template.pages);
  const currentPage = pageIds[0] || 'home'; // Default to first page or home
  
  // Retrieve the page sections for the current page
  const sections = template.pages[currentPage]?.sections || [];
  
  // Generate preview content based on template and business info
  const renderPreviewContent = () => {
    return (
      <div className="space-y-4">
        {/* Page Title */}
        <div className="p-4 bg-white border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {template.pages[currentPage]?.title || 'Page Title'}
          </h2>
        </div>
        
        {/* Page Sections */}
        {sections.map((section, index) => {
          // Replace placeholders in content
          const content = { ...section.content };
          Object.keys(content).forEach(key => {
            if (typeof content[key] === 'string') {
              const value = content[key] as string;
              // Replace placeholders with business info
              if (value.includes('{')) {
                const result = value.replace(/{([^}]+)}/g, (match, placeholder) => {
                  return businessInfo[placeholder] || template.placeholders[placeholder] || match;
                });
                content[key] = result;
              }
            }
          });
          
          return (
            <div 
              key={index} 
              className="p-4 bg-gray-50 border border-gray-200 rounded-md"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600">
                  {section.type} - {section.variant}
                </span>
              </div>
              
              {/* Content preview */}
              <div className="bg-white p-3 rounded border border-gray-100">
                {/* Heading preview */}
                {content.heading && (
                  <h3 className="text-lg font-semibold">{content.heading}</h3>
                )}
                
                {/* Subheading preview */}
                {content.subheading && (
                  <p className="text-sm text-gray-600 mt-1">{content.subheading}</p>
                )}
                
                {/* Description preview */}
                {content.description && (
                  <p className="text-sm mt-2">{content.description}</p>
                )}
                
                {/* CTA preview */}
                {content.cta && (
                  <div className="mt-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">
                    {typeof content.cta === 'string' 
                      ? content.cta 
                      : content.cta.text || (content.cta.primary ? content.cta.primary.text : '')}
                  </div>
                )}
                
                {/* Image indication */}
                {content.image && (
                  <div className="mt-3 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Image: {content.image}</span>
                  </div>
                )}
                
                {/* Other content types */}
                {section.type === 'features' && content.features && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {(Array.isArray(content.features) ? content.features : []).slice(0, 2).map((feature: any, idx: number) => (
                      <div key={idx} className="p-2 border border-gray-100 rounded text-xs">
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-gray-500 truncate">{feature.description}</div>
                      </div>
                    ))}
                    {(Array.isArray(content.features) && content.features.length > 2) && (
                      <div className="p-2 text-xs text-gray-500">+{content.features.length - 2} more</div>
                    )}
                  </div>
                )}
                
                {/* Additional section type previews could be added here */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Template Preview</h3>
          
          {/* Device toggle buttons */}
          <div className="flex space-x-2">
            <button
              type="button"
              className={cn(
                "p-1 rounded-md",
                previewDevice === 'mobile' 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => onChangePreviewDevice('mobile')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              className={cn(
                "p-1 rounded-md",
                previewDevice === 'tablet' 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => onChangePreviewDevice('tablet')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              className={cn(
                "p-1 rounded-md",
                previewDevice === 'desktop' 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => onChangePreviewDevice('desktop')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <DevicePreview device={previewDevice}>
        {renderPreviewContent()}
      </DevicePreview>
    </div>
  );
};

export default TemplatePreview;
