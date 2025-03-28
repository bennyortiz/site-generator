'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import professionalServicesConfig from '../../../config/default-configs/professional-services';
import { SiteConfig } from '../../../types/config';
import { getTemplateRegistry } from '../../../templates';
import { SiteTemplate } from '../../../types/templates';
import { templateProcessor } from '../../../engine/template-processor';

// Define the context types
export interface StudioContextProps {
  // State
  config: SiteConfig;
  currentStep: number;
  previewDevice: 'mobile' | 'tablet' | 'desktop';
  isExportModalOpen: boolean;
  selectedLayout: string;
  headerType: string;
  footerType: string;
  sectionOrder: string[];
  template: string;
  colorTheme: string;
  fontStyle: string;
  projectName: string;
  
  // New state properties for wizard UI
  selectedPages: Record<string, boolean>;
  currentPage: string;
  borderRadius: string;
  spacing: string;
  typography: string;
  pageSections: Record<string, Array<{ id: string, type: string, variant: string }>>;
  
  // Template-related properties
  selectedTemplate: SiteTemplate | null;
  businessInfo: Record<string, string>;
  
  // Actions
  setSelectedTemplate: (template: SiteTemplate | null) => void;
  setBusinessInfo: (info: Record<string, string>) => void;
  setConfig: (config: SiteConfig) => void;
  setCurrentStep: (step: number) => void;
  setPreviewDevice: (device: 'mobile' | 'tablet' | 'desktop') => void;
  setIsExportModalOpen: (isOpen: boolean) => void;
  setSelectedLayout: (layout: string) => void;
  setHeaderType: (type: string) => void;
  setFooterType: (type: string) => void;
  setSectionOrder: (order: string[]) => void;
  setTemplate: (template: string) => void;
  setColorTheme: (theme: string) => void;
  setFontStyle: (style: string) => void;
  setProjectName: (name: string) => void;
  
  // New action methods for wizard UI
  setSelectedPages: (pages: Record<string, boolean>) => void;
  setCurrentPage: (page: string) => void;
  setBorderRadius: (radius: string) => void;
  setSpacing: (spacing: string) => void;
  setTypography: (typography: string) => void;
  setPageSections: (sections: Record<string, Array<{ id: string, type: string, variant: string }>>) => void;
  updateSectionVariant: (pageId: string, sectionId: string, variant: string) => void;
  
  // Helper methods
  handleInputChange: (path: string, value: any) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  moveSectionUp: (index: number) => void;
  moveSectionDown: (index: number) => void;
  handleExport: () => void;
}

// Create the context with a default undefined value
const StudioContext = createContext<StudioContextProps | undefined>(undefined);

// Provider props
interface StudioProviderProps {
  children: ReactNode;
}

// Create the provider
export const StudioProvider: React.FC<StudioProviderProps> = ({ children }) => {
  // Base state
  const [config, setConfig] = useState<SiteConfig>(professionalServicesConfig);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [selectedLayout, setSelectedLayout] = useState<string>('standard');
  const [headerType, setHeaderType] = useState<string>('centered');
  const [footerType, setFooterType] = useState<string>('simple');
  const [sectionOrder, setSectionOrder] = useState<string[]>(['hero', 'features', 'testimonials', 'cta']);
  const [template, setTemplate] = useState<string>('business');
  const [colorTheme, setColorTheme] = useState<string>('blue');
  const [fontStyle, setFontStyle] = useState<string>('modern');
  const [projectName, setProjectName] = useState<string>('my-business-site');
  
  // New wizard UI state
  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>({
    home: true,
    about: true,
    services: true,
    contact: true,
    blog: false,
    portfolio: false,
    pricing: false,
    team: false,
    faq: false,
    testimonials: false
  });
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [borderRadius, setBorderRadius] = useState<string>('rounded');
  const [spacing, setSpacing] = useState<string>('standard');
  const [typography, setTypography] = useState<string>('modern');
  
  // Template-related state
  const [selectedTemplate, setSelectedTemplate] = useState<SiteTemplate | null>(null);
  const [businessInfo, setBusinessInfo] = useState<Record<string, string>>({});
  
  // Default sections by page type
  const [pageSections, setPageSections] = useState<Record<string, Array<{ id: string, type: string, variant: string }>>>({
    home: [
      { id: 'hero-1', type: 'hero', variant: 'split' },
      { id: 'features-1', type: 'features', variant: 'grid' },
      { id: 'testimonials-1', type: 'testimonials', variant: 'carousel' },
      { id: 'cta-1', type: 'cta', variant: 'centered' }
    ],
    about: [
      { id: 'about-hero', type: 'hero', variant: 'centered' },
      { id: 'story', type: 'content', variant: 'two-column' },
      { id: 'team', type: 'team', variant: 'grid' }
    ],
    services: [
      { id: 'services-hero', type: 'hero', variant: 'minimal' },
      { id: 'services-list', type: 'features', variant: 'alternating' },
      { id: 'services-cta', type: 'cta', variant: 'full-width' }
    ],
    contact: [
      { id: 'contact-hero', type: 'hero', variant: 'minimal' },
      { id: 'contact-form', type: 'form', variant: 'standard' },
      { id: 'map', type: 'map', variant: 'full-width' }
    ]
  });
  
  // Update a section variant
  const updateSectionVariant = (pageId: string, sectionId: string, variant: string) => {
    const updatedSections = { ...pageSections };
    
    if (updatedSections[pageId]) {
      const sectionIndex = updatedSections[pageId].findIndex(section => section.id === sectionId);
      
      if (sectionIndex !== -1) {
        updatedSections[pageId][sectionIndex] = {
          ...updatedSections[pageId][sectionIndex],
          variant
        };
        
        setPageSections(updatedSections);
      }
    }
  };
  
  // Handle form input changes
  const handleInputChange = (path: string, value: any) => {
    const newConfig = { ...config };
    const keys = path.split('.');
    let current: any = newConfig;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    
    // Also update theme/style based on template selections if applicable
    if (path === 'template') {
      setTemplate(value);
      // Here you would update related theme settings based on template choice
    } else if (path === 'colorTheme') {
      setColorTheme(value);
      // Update theme colors in the config
      if (newConfig.theme && newConfig.theme.colors) {
        // This would need to be expanded with actual color values
        newConfig.theme.colors.primary = value;
      }
    } else if (path === 'fontStyle') {
      setFontStyle(value);
      // Update font settings in the config
      if (newConfig.theme) {
        // In a real implementation, we would properly update font settings
        // based on the theme configuration structure
        console.log('Updated font style to:', value);
      }
    }
    
    setConfig(newConfig);
  };
  
  // Handle export
  const handleExport = () => {
    alert('In a full implementation, this would generate and export the complete Next.js project.');
    console.log('Configuration to export:', config);
    console.log('Template:', template);
    console.log('Color Theme:', colorTheme);
    console.log('Font Style:', fontStyle);
    console.log('Selected Pages:', selectedPages);
    console.log('Page Sections:', pageSections);
    setIsExportModalOpen(false);
  };

  // Navigation handlers
  const handleNextStep = () => {
    if (currentStep < 4) { // assuming 5 steps (0-4)
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle section reordering
  const moveSectionUp = (index: number) => {
    if (index > 0) {
      const newOrder = [...sectionOrder];
      const temp = newOrder[index];
      newOrder[index] = newOrder[index - 1];
      newOrder[index - 1] = temp;
      setSectionOrder(newOrder);
    }
  };

  const moveSectionDown = (index: number) => {
    if (index < sectionOrder.length - 1) {
      const newOrder = [...sectionOrder];
      const temp = newOrder[index];
      newOrder[index] = newOrder[index + 1];
      newOrder[index + 1] = temp;
      setSectionOrder(newOrder);
    }
  };

  // Create the context value object containing all state and functions
  const contextValue: StudioContextProps = {
    // State
    config,
    currentStep,
    previewDevice,
    isExportModalOpen,
    selectedLayout,
    headerType,
    footerType,
    sectionOrder,
    template,
    colorTheme,
    fontStyle,
    projectName,
    selectedPages,
    currentPage,
    borderRadius,
    spacing,
    typography,
    pageSections,
    selectedTemplate,
    businessInfo,
    
    // State setters
    setConfig,
    setCurrentStep,
    setPreviewDevice,
    setIsExportModalOpen,
    setSelectedLayout,
    setHeaderType,
    setFooterType,
    setSectionOrder,
    setTemplate,
    setColorTheme,
    setFontStyle,
    setProjectName,
    setSelectedPages,
    setCurrentPage,
    setBorderRadius,
    setSpacing,
    setTypography,
    setPageSections,
    setSelectedTemplate,
    setBusinessInfo,
    updateSectionVariant,
    
    // Helper methods
    handleInputChange,
    handleNextStep,
    handlePrevStep,
    moveSectionUp,
    moveSectionDown,
    handleExport
  };

  return (
    <StudioContext.Provider value={contextValue}>
      {children}
    </StudioContext.Provider>
  );
};

// Custom hook for easy context consumption
export const useStudio = (): StudioContextProps => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
