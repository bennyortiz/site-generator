import React from 'react';
import { SiteConfig } from '../../types/config';

interface ContentEditorProps {
  config: SiteConfig;
  onInputChange: (path: string, value: any) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  config,
  onInputChange
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="site-title" className="block text-sm font-medium text-gray-700 mb-1">
          Site Title
        </label>
        <input
          type="text"
          id="site-title"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={config.metadata.title || ''}
          onChange={(e) => onInputChange('metadata.title', e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="site-description" className="block text-sm font-medium text-gray-700 mb-1">
          Site Description
        </label>
        <textarea
          id="site-description"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 h-24"
          value={config.metadata.description || ''}
          onChange={(e) => onInputChange('metadata.description', e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-1">
          Business Name
        </label>
        <input
          type="text"
          id="business-name"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={config.business.name || ''}
          onChange={(e) => onInputChange('business.name', e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="business-tagline" className="block text-sm font-medium text-gray-700 mb-1">
          Tagline
        </label>
        <input
          type="text"
          id="business-tagline"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={config.business.tagline || ''}
          onChange={(e) => onInputChange('business.tagline', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
          Contact Email
        </label>
        <input
          type="email"
          id="contact-email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={config.business.contact?.email || ''}
          onChange={(e) => onInputChange('business.contact.email', e.target.value)}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
          Contact Phone
        </label>
        <input
          type="tel"
          id="contact-phone"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={config.business.contact?.phone || ''}
          onChange={(e) => onInputChange('business.contact.phone', e.target.value)}
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label htmlFor="contact-address" className="block text-sm font-medium text-gray-700 mb-1">
          Business Address
        </label>
        <textarea
          id="contact-address"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 h-16"
          value={config.business.contact?.address || ''}
          onChange={(e) => onInputChange('business.contact.address', e.target.value)}
          placeholder="123 Business St, City, State, ZIP"
        />
      </div>
    </div>
  );
};

export default ContentEditor;
