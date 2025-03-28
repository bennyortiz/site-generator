import React from 'react';
import { cn } from '../../utils/cn';

interface SectionPreviewProps {
  sectionType: string;
  variant: string;
  content: Record<string, any>;
  className?: string;
}

/**
 * Section Preview Component
 * 
 * Renders a preview of a specific section with its content
 */
const SectionPreview: React.FC<SectionPreviewProps> = ({
  sectionType,
  variant,
  content,
  className
}) => {
  // Helper to render different section types with appropriate previews
  const renderSectionContent = () => {
    switch (sectionType) {
      case 'hero':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <div className="bg-gray-100 h-36 mb-3 flex items-center justify-center rounded-md overflow-hidden">
              {content.image ? (
                <div className="w-full h-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-xs text-gray-500">
                  {content.image}
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center text-xs text-gray-500">
                  Hero Image
                </div>
              )}
            </div>
            
            {/* Hero content */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{content.heading || 'Heading'}</h3>
              {content.subheading && (
                <p className="text-sm text-gray-600">{content.subheading}</p>
              )}
              {content.description && (
                <p className="text-xs text-gray-500 line-clamp-2">{content.description}</p>
              )}
              
              {/* CTA buttons */}
              {content.cta && (
                <div className="flex space-x-2 mt-3">
                  {content.cta.primary && (
                    <div className="px-3 py-1.5 text-xs rounded bg-blue-600 text-white inline-block">
                      {content.cta.primary.text}
                    </div>
                  )}
                  {content.cta.secondary && (
                    <div className="px-3 py-1.5 text-xs rounded border border-gray-300 text-gray-700 inline-block">
                      {content.cta.secondary.text}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
        
      case 'features':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.heading || 'Features'}</h3>
            {content.subheading && (
              <p className="text-sm text-gray-600 mb-3">{content.subheading}</p>
            )}
            
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-2">
              {(content.features && Array.isArray(content.features) 
                ? content.features.slice(0, 4) 
                : Array(4).fill({ title: 'Feature', description: 'Description' })
              ).map((feature: any, idx: number) => (
                <div key={idx} className="p-2 border border-gray-100 rounded">
                  {feature.icon && (
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-1">
                      <span className="text-xs">{typeof feature.icon === 'string' ? feature.icon.charAt(0) : 'I'}</span>
                    </div>
                  )}
                  <div className="text-sm font-medium">{feature.title || `Feature ${idx + 1}`}</div>
                  <div className="text-xs text-gray-500 line-clamp-1">{feature.description || 'Description'}</div>
                </div>
              ))}
            </div>
            
            {content.features && Array.isArray(content.features) && content.features.length > 4 && (
              <div className="text-xs text-gray-500 mt-2">
                +{content.features.length - 4} more features
              </div>
            )}
          </div>
        );
        
      case 'testimonials':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.heading || 'Testimonials'}</h3>
            
            {/* Testimonials preview */}
            <div className="border border-gray-100 rounded-md p-3 bg-gray-50">
              {content.testimonials && Array.isArray(content.testimonials) && content.testimonials.length > 0 ? (
                <div>
                  <div className="text-sm italic mb-2">"{content.testimonials[0].quote || 'Testimonial quote'}"</div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                    <div>
                      <div className="text-xs font-medium">{content.testimonials[0].author || 'Customer'}</div>
                      {content.testimonials[0].role && (
                        <div className="text-xs text-gray-500">{content.testimonials[0].role}</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-sm italic mb-2">"This is a testimonial quote."</div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                    <div>
                      <div className="text-xs font-medium">Customer Name</div>
                      <div className="text-xs text-gray-500">Position</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {content.testimonials && Array.isArray(content.testimonials) && content.testimonials.length > 1 && (
              <div className="text-xs text-gray-500 mt-2">
                +{content.testimonials.length - 1} more testimonials
              </div>
            )}
          </div>
        );
        
      case 'cta':
        return (
          <div className={`p-4 ${content.background ? 'bg-blue-50' : 'bg-white'} rounded-md border border-gray-200`}>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{content.heading || 'Call to Action'}</h3>
              {content.subheading && (
                <p className="text-sm text-gray-600 mb-3">{content.subheading}</p>
              )}
              
              {/* CTA button */}
              <div className="mt-3">
                <div className="inline-block px-4 py-2 text-sm font-medium rounded bg-blue-600 text-white">
                  {content.cta?.text || 'Get Started'}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'content':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.heading || 'Content Section'}</h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:flex-1">
                <div className="text-xs text-gray-500 line-clamp-3">
                  {content.text || 'This is a sample content section with text. In a real implementation, this would contain your actual content including formatted text and possibly rich media elements.'}
                </div>
              </div>
              
              {content.image && (
                <div className="sm:w-1/3 bg-gray-100 rounded h-20 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{content.image}</span>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'team':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.heading || 'Our Team'}</h3>
            
            <div className="grid grid-cols-3 gap-2">
              {(content.members && Array.isArray(content.members) 
                ? content.members.slice(0, 3) 
                : Array(3).fill({ name: 'Team Member', role: 'Position' })
              ).map((member: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2"></div>
                  <div className="text-xs font-medium">{member.name || `Person ${idx + 1}`}</div>
                  <div className="text-xs text-gray-500">{member.role || 'Position'}</div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'form':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.heading || 'Contact Form'}</h3>
            
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
              <div className="h-12 bg-gray-100 rounded-md w-full"></div>
              <div className="mt-2">
                <div className="inline-block px-3 py-1.5 text-xs rounded bg-blue-600 text-white">
                  Submit
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'map':
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200">
            <div className="h-36 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-xs text-gray-500">Map: {content.address || 'Location Map'}</div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="p-4 bg-white rounded-md border border-gray-200 flex flex-col items-center justify-center">
            <div className="text-sm font-medium text-gray-900">
              {sectionType.charAt(0).toUpperCase() + sectionType.slice(1)} - {variant}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              (Preview visualization coming soon)
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className={cn('w-full', className)}>
      {renderSectionContent()}
    </div>
  );
};

export default SectionPreview;
