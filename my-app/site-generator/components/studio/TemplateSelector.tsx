import React, { useEffect, useState } from 'react';
import { IconCheck, IconLayoutBoard, IconDeviceImac, IconBuildingStore, IconFilter } from '@tabler/icons-react';
import { SiteTemplate, TEMPLATE_CATEGORIES, INDUSTRY_TAGS, TemplateCategory, IndustryTag } from '../../types/templates';
import { cn } from '../../utils/cn';

interface TemplateSelectorProps {
  templates: SiteTemplate[];
  selectedTemplateId: string | null;
  onSelectTemplate: (template: SiteTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplateId,
  onSelectTemplate
}) => {
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterIndustry, setFilterIndustry] = useState<string | null>(null);
  const [filteredTemplates, setFilteredTemplates] = useState<SiteTemplate[]>(templates);

  // Filter templates when filters change
  useEffect(() => {
    let result = templates;
    
    if (filterCategory) {
      result = result.filter(template => template.category === filterCategory);
    }
    
    if (filterIndustry) {
      result = result.filter(template => template.industryTags.includes(filterIndustry));
    }
    
    setFilteredTemplates(result);
  }, [templates, filterCategory, filterIndustry]);

  // Reset filters
  const resetFilters = () => {
    setFilterCategory(null);
    setFilterIndustry(null);
  };

  // Determine template icon based on category and industry
  const getTemplateIcon = (template: SiteTemplate) => {
    if (template.category === 'business') {
      return <IconLayoutBoard className="h-12 w-12 text-blue-500" />;
    } else if (template.category === 'ecommerce') {
      return <IconDeviceImac className="h-12 w-12 text-purple-500" />;
    } else if (template.industryTags.includes('restaurant')) {
      return <IconBuildingStore className="h-12 w-12 text-orange-500" />;
    }
    return <IconLayoutBoard className="h-12 w-12 text-gray-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center mb-4">
          <IconFilter className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-900">Filter Templates</h3>
          {(filterCategory || filterIndustry) && (
            <button
              onClick={resetFilters}
              className="ml-auto text-sm text-blue-600 hover:text-blue-800"
            >
              Reset Filters
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
            <div className="flex flex-wrap gap-2">
              {TEMPLATE_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilterCategory(filterCategory === category.id ? null : category.id)}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full",
                    filterCategory === category.id
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Industry Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Industry</h4>
            <div className="flex flex-wrap gap-2">
              {INDUSTRY_TAGS.map(tag => (
                <button
                  key={tag.id}
                  onClick={() => setFilterIndustry(filterIndustry === tag.id ? null : tag.id)}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full",
                    filterIndustry === tag.id
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map(template => (
          <div 
            key={template.id}
            className="cursor-pointer group"
            onClick={() => onSelectTemplate(template)}
          >
            <div className={cn(
              "rounded-xl overflow-hidden shadow-sm border-2 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md",
              selectedTemplateId === template.id 
                ? "border-blue-500" 
                : "border-transparent hover:border-gray-300"
            )}>
              <div className="aspect-video bg-gradient-to-r from-blue-50 to-white flex items-center justify-center">
                {getTemplateIcon(template)}
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">{template.name}</h3>
                  {selectedTemplateId === template.id && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <IconCheck className="mr-1 h-3 w-3" />
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {template.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {template.industryTags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Coming Soon Template Card */}
        <div className="cursor-not-allowed opacity-60">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="aspect-video bg-gradient-to-r from-gray-50 to-white flex items-center justify-center">
              <IconDeviceImac className="h-12 w-12 text-gray-300" />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">E-Commerce</h3>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                For online stores and digital product sales.
              </p>
            </div>
          </div>
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="col-span-full flex items-center justify-center h-40 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">No templates match your filters. <button onClick={resetFilters} className="text-blue-600 hover:underline">Reset filters</button></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelector;
