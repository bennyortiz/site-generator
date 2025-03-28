import React from 'react';
import { IconDownload } from '@tabler/icons-react';
import { SiteConfig } from '../../types/config';

interface ExportPreviewProps {
  config: SiteConfig;
  selectedLayout: string;
  headerType: string;
  footerType: string;
  onExport: () => void;
  setIsExportModalOpen: (isOpen: boolean) => void;
}

const ExportPreview: React.FC<ExportPreviewProps> = ({
  config,
  selectedLayout,
  headerType,
  footerType,
  onExport,
  setIsExportModalOpen
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Site Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">Business Name:</span> {config.business.name}
          </div>
          <div>
            <span className="text-gray-500">Site Title:</span> {config.metadata.title}
          </div>
          <div>
            <span className="text-gray-500">Primary Color:</span> {config.theme.colors.primary}
          </div>
          <div>
            <span className="text-gray-500">Heading Font:</span> {config.theme.fonts.heading}
          </div>
          <div>
            <span className="text-gray-500">Layout Type:</span> {selectedLayout}
          </div>
          <div>
            <span className="text-gray-500">Header Style:</span> {headerType}
          </div>
          <div>
            <span className="text-gray-500">Footer Style:</span> {footerType}
          </div>
          <div>
            <span className="text-gray-500">Contact Email:</span> {config.business.contact?.email || 'Not set'}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Project Details</h3>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-500">Framework:</span> Next.js 13+ (App Router)
          </div>
          <div>
            <span className="text-gray-500">Styling:</span> Tailwind CSS
          </div>
          <div>
            <span className="text-gray-500">Responsive:</span> Mobile-first design
          </div>
          <div>
            <span className="text-gray-500">SEO:</span> Optimized metadata
          </div>
          <div>
            <span className="text-gray-500">Components:</span> Custom components for all site sections
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h3 className="font-medium text-blue-900 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Ready to Export
        </h3>
        <p className="text-sm text-blue-700 mb-3">
          Your site configuration is complete and ready for export. This will generate a complete
          Next.js project with all your customized settings applied.
        </p>
        <button
          onClick={() => setIsExportModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <IconDownload className="mr-2 h-5 w-5" />
          Export Project
        </button>
      </div>

      {/* Export instructions */}
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 p-3 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">After Export</h3>
        </div>
        <div className="p-4">
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Download and extract the exported project</li>
            <li>Open the project folder in your code editor</li>
            <li>Run <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800">npm install</code> to install dependencies</li>
            <li>Start the development server with <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800">npm run dev</code></li>
            <li>Make any further customizations to your site</li>
            <li>Deploy to Vercel or your preferred hosting provider</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExportPreview;
