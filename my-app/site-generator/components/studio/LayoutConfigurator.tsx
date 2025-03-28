import React, { useState, useEffect } from 'react';
import VariantSelector from './VariantSelector';
import { getComponentMetadata, getComponentVariants } from '../../engine/enhanced-component-registry';
import { 
  IconLayout, 
  IconLayoutNavbar, 
  IconCheck, 
  IconChevronLeft, 
  IconChevronRight, 
  IconMenu2,
  IconSection
} from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface LayoutConfiguratorProps {
  selectedLayout: string;
  setSelectedLayout: (layout: string) => void;
  headerType: string;
  setHeaderType: (type: string) => void;
  footerType: string;
  setFooterType: (type: string) => void;
  sectionOrder: string[];
  moveSectionUp: (index: number) => void;
  moveSectionDown: (index: number) => void;
  sectionVariants?: Record<string, string>; // Map of section type to variant ID
  onSectionVariantChange?: (sectionType: string, variantId: string) => void;
}

const LayoutConfigurator: React.FC<LayoutConfiguratorProps> = ({
  selectedLayout,
  setSelectedLayout,
  headerType,
  setHeaderType,
  footerType,
  setFooterType,
  sectionOrder,
  moveSectionUp,
  moveSectionDown,
  sectionVariants = {},
  onSectionVariantChange
}) => {
  // Section that is currently being configured for variant selection
  const [activeSectionType, setActiveSectionType] = useState<string | null>(null);
  
  // Variants for the active section
  const [availableVariants, setAvailableVariants] = useState<any[]>([]);
  
  // Load variants when active section changes
  useEffect(() => {
    if (activeSectionType) {
      const variants = getComponentVariants(activeSectionType);
      if (variants && variants.length > 0) {
        setAvailableVariants(variants);
      } else {
        // If no variants found, clear the active section
        setAvailableVariants([]);
      }
    }
  }, [activeSectionType]);
  
  // Handle variant selection
  const handleVariantChange = (variantId: string) => {
    if (activeSectionType && onSectionVariantChange) {
      onSectionVariantChange(activeSectionType, variantId);
    }
  };
  return (
    <div className="space-y-6">
      {/* Layout Type Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <IconLayout className="h-4 w-4 mr-1.5 text-blue-500" />
          Page Layout
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              selectedLayout === 'standard' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setSelectedLayout('standard')}
          >
            <div className="h-12 bg-white rounded mb-2 flex flex-col border border-gray-200">
              <div className="h-2 bg-gray-100 w-full"></div>
              <div className="flex-1 p-1">
                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                <div className="h-1 w-full bg-gray-50 mt-1 rounded"></div>
                <div className="h-1 w-full bg-gray-50 mt-0.5 rounded"></div>
              </div>
              <div className="h-1.5 bg-gray-100 w-full mt-auto"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Standard</span>
              {selectedLayout === 'standard' && (
                <IconCheck className="h-4 w-4 text-blue-500" />
              )}
            </div>
          </div>
          
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              selectedLayout === 'sidebar' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setSelectedLayout('sidebar')}
          >
            <div className="h-12 bg-white rounded mb-2 flex border border-gray-200">
              <div className="h-full w-1/4 bg-gray-100"></div>
              <div className="flex-1 p-1">
                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                <div className="h-1 w-full bg-gray-50 mt-1 rounded"></div>
                <div className="h-1 w-full bg-gray-50 mt-0.5 rounded"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">With Sidebar</span>
              {selectedLayout === 'sidebar' && (
                <IconCheck className="h-4 w-4 text-blue-500" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header Style */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <IconLayoutNavbar className="h-4 w-4 mr-1.5 text-blue-500" />
          Header Style
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              headerType === 'centered' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setHeaderType('centered')}
          >
            <div className="h-8 bg-white rounded mb-2 flex justify-center items-center border border-gray-200">
              <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">Centered</span>
            </div>
          </div>
          
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              headerType === 'left' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setHeaderType('left')}
          >
            <div className="h-8 bg-white rounded mb-2 flex items-center px-2 border border-gray-200">
              <div className="h-1.5 w-6 bg-gray-300 rounded"></div>
              <div className="ml-auto flex space-x-2">
                <div className="h-1 w-2 bg-gray-200 rounded"></div>
                <div className="h-1 w-2 bg-gray-200 rounded"></div>
                <div className="h-1 w-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">Left Aligned</span>
            </div>
          </div>
          
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              headerType === 'minimal' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setHeaderType('minimal')}
          >
            <div className="h-8 bg-white rounded mb-2 flex justify-end items-center px-2 border border-gray-200">
              <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                <IconMenu2 className="h-3 w-3 text-gray-400" />
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">Minimal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Style */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <IconLayout className="h-4 w-4 mr-1.5 text-blue-500 rotate-180" />
          Footer Style
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              footerType === 'simple' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setFooterType('simple')}
          >
            <div className="h-8 bg-white rounded mb-2 flex items-center justify-center border border-gray-200">
              <div className="h-1 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">Simple</span>
            </div>
          </div>
          
          <div 
            className={cn(
              "cursor-pointer rounded-lg border p-3 transition-all duration-200",
              footerType === 'complex' 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setFooterType('complex')}
          >
            <div className="h-8 bg-white rounded mb-2 flex border border-gray-200">
              <div className="flex-1 flex items-center justify-center">
                <div className="h-4 w-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="h-0.5 w-6 bg-gray-200 mb-1"></div>
                <div className="h-0.5 w-6 bg-gray-200"></div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="h-0.5 w-6 bg-gray-200 mb-1"></div>
                <div className="h-0.5 w-6 bg-gray-200"></div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">Full Featured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Order */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <IconSection className="h-4 w-4 mr-1.5 text-blue-500" />
          Sections Order
        </h3>
        <div className="space-y-2 border border-gray-200 rounded-lg overflow-hidden">
          {sectionOrder.map((section, index) => (
            <div key={section} className="flex items-center bg-white border-b last:border-b-0 border-gray-200 p-2.5">
              <div className="flex items-center text-gray-700 flex-1">
                <span className="h-6 w-6 bg-gray-100 rounded-full inline-flex items-center justify-center mr-2 text-xs font-medium text-gray-500">{index + 1}</span>
                <span className="font-medium capitalize">{section}</span>
              </div>
              <div className="flex space-x-1">
                <button 
                  onClick={() => setActiveSectionType(section)} 
                  className="p-1 rounded text-xs bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Customize
                </button>
                <button 
                  onClick={() => moveSectionUp(index)}
                  disabled={index === 0}
                  className={cn(
                    "p-1 rounded hover:bg-gray-100 transition-colors",
                    index === 0 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <IconChevronLeft className="h-4 w-4 text-gray-500" />
                </button>
                <button 
                  onClick={() => moveSectionDown(index)}
                  disabled={index === sectionOrder.length - 1}
                  className={cn(
                    "p-1 rounded hover:bg-gray-100 transition-colors",
                    index === sectionOrder.length - 1 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <IconChevronRight className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500">Use the arrows to reorder sections</p>
      </div>
      
      {/* Section Variant Selector */}
      {activeSectionType && availableVariants.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <IconSection className="h-4 w-4 mr-1.5 text-blue-500" />
            {activeSectionType} Variants
          </h3>
          
          <VariantSelector
            variants={availableVariants}
            selectedVariant={sectionVariants[activeSectionType] || availableVariants[0].id}
            onSelectVariant={handleVariantChange}
            title={`Select ${activeSectionType} Style`}
            description={`Choose a style for the ${activeSectionType} section`}
            layout="grid"
          />
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setActiveSectionType(null)}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutConfigurator;
