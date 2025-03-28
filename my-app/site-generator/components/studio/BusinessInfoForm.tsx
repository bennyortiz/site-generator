import React from 'react';
import { SiteTemplate } from '../../types/templates';
import { cn } from '../../utils/cn';

interface BusinessInfoFormProps {
  template: SiteTemplate | null;
  businessInfo: Record<string, string>;
  onBusinessInfoChange: (info: Record<string, string>) => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({
  template,
  businessInfo,
  onBusinessInfoChange
}) => {
  // Handle when no template is selected
  if (!template) {
    return (
      <div className="p-6 text-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">Please select a template first to customize business information.</p>
      </div>
    );
  }
  
  // Handle input change
  const handleInputChange = (key: string, value: string) => {
    onBusinessInfoChange({
      ...businessInfo,
      [key]: value
    });
  };
  
  // Generate form fields based on template placeholders
  const renderFormFields = () => {
    // Use placeholders keys as fallback if no form fields are defined
    const placeholderKeys = Object.keys(template.placeholders);
    
    return (
      <div className="space-y-6">
        {/* Business Name (always required) */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
            Business Name*
          </label>
          <input
            type="text"
            id="businessName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={businessInfo.businessName || template.placeholders.businessName || ''}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            required
          />
        </div>
        
        {/* Tagline */}
        <div>
          <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-1">
            Tagline/Slogan
          </label>
          <input
            type="text"
            id="tagline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={businessInfo.tagline || template.placeholders.tagline || ''}
            onChange={(e) => handleInputChange('tagline', e.target.value)}
          />
        </div>
        
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Brief Description*
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={businessInfo.description || template.placeholders.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
          />
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={businessInfo.phone || template.placeholders.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={businessInfo.email || template.placeholders.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>
        
        {/* Address */}
        {placeholderKeys.includes('address') && (
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Business Address
            </label>
            <textarea
              id="address"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={businessInfo.address || template.placeholders.address || ''}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        )}
        
        {/* Opening Hours */}
        {placeholderKeys.includes('openingHours') && (
          <div>
            <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700 mb-1">
              Opening Hours
            </label>
            <textarea
              id="openingHours"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={businessInfo.openingHours || template.placeholders.openingHours || ''}
              onChange={(e) => handleInputChange('openingHours', e.target.value)}
            />
          </div>
        )}
        
        {/* Any additional template-specific fields */}
        {placeholderKeys
          .filter(key => !['businessName', 'tagline', 'description', 'phone', 'email', 'address', 'openingHours', 'ctaText', 'ctaUrl'].includes(key))
          .map(key => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                type="text"
                id={key}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={businessInfo[key] || template.placeholders[key] || ''}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </div>
          ))}
      </div>
    );
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {template.name} Business Information
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Enter your business details to customize this template.
        Fields marked with * are required.
      </p>
      
      {renderFormFields()}
    </div>
  );
};

export default BusinessInfoForm;
