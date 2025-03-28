import React from 'react';
import { AccordionProps } from '../types';
import SimpleAccordion from './simple';
import { cn } from '../../../../utils/cn';

/**
 * FAQ Accordion Variant
 * 
 * Styled specifically for frequently asked questions with question mark icons.
 */
export const FAQAccordion: React.FC<AccordionProps> = ({
  items,
  className,
  ...props
}) => {
  // Question mark icon for FAQ headers
  const QuestionIcon = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 shrink-0">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M9.6 9.6a4 4 0 1 1 5.66 5.66a1 1 0 0 1-1.41 1.41l-.71-.71A4 4 0 0 1 9.6 9.6"/>
        <path d="M12 17v2"/>
      </svg>
    </div>
  );

  // Add question mark icon to each item
  const faqItems = items.map(item => ({
    ...item,
    icon: item.icon || <QuestionIcon />,
    // Convert title text to be more question-like if it's a string and doesn't end with '?'
    title: typeof item.title === 'string' && !item.title.trim().endsWith('?')
      ? `${item.title.trim()}?`
      : item.title
  }));

  // Custom expand/collapse icons for better FAQ appearance
  const ExpandIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d="M5 12h14"/>
    </svg>
  );

  const CollapseIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d="M5 12h14"/>
      <path d="M12 5v14"/>
    </svg>
  );

  return (
    <div className={cn('space-y-1', className)}>
      <SimpleAccordion
        items={faqItems}
        appearance="separated"
        expandedIcon={<ExpandIcon />}
        collapsedIcon={<CollapseIcon />}
        {...props}
      />
    </div>
  );
};

export default FAQAccordion;
