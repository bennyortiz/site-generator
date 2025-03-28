'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/site-generator/utils/cn';

interface SplitViewProps {
  className?: string;
  defaultSplit?: number; // Default split percentage (0-100)
  minLeftSize?: number; // Minimum left panel width in pixels
  minRightSize?: number; // Minimum right panel width in pixels
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

const SplitView: React.FC<SplitViewProps> = ({
  className,
  defaultSplit = 40,
  minLeftSize = 300,
  minRightSize = 300,
  leftPanel,
  rightPanel,
  orientation = 'vertical'
}) => {
  const [splitPosition, setSplitPosition] = useState(defaultSplit);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startDragXRef = useRef<number>(0);
  const startLeftWidthRef = useRef<number>(0);
  
  // Start dragging handler
  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    startDragXRef.current = orientation === 'vertical' ? e.clientX : e.clientY;
    
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      startLeftWidthRef.current = orientation === 'vertical' 
        ? (splitPosition / 100) * containerRect.width
        : (splitPosition / 100) * containerRect.height;
    }
    
    setIsDragging(true);
  };
  
  // Handle dragging
  useEffect(() => {
    const handleDrag = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerSize = orientation === 'vertical' ? containerRect.width : containerRect.height;
      const dragPos = orientation === 'vertical' ? e.clientX : e.clientY;
      const dragDelta = dragPos - startDragXRef.current;
      
      let newLeftSize = startLeftWidthRef.current + dragDelta;
      
      // Enforce minimum sizes
      newLeftSize = Math.max(minLeftSize, Math.min(containerSize - minRightSize, newLeftSize));
      
      // Convert to percentage
      const newSplitPercentage = (newLeftSize / containerSize) * 100;
      setSplitPosition(newSplitPercentage);
    };
    
    const handleDragEnd = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, minLeftSize, minRightSize, orientation]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative flex",
        orientation === 'vertical' ? "flex-row" : "flex-col",
        className
      )}
    >
      {/* Left/Top Panel */}
      <div 
        className={cn(
          "overflow-auto",
          isDragging && "select-none"
        )} 
        style={
          orientation === 'vertical'
            ? { width: `${splitPosition}%` }
            : { height: `${splitPosition}%` }
        }
      >
        {leftPanel}
      </div>
      
      {/* Resizer */}
      <div
        className={cn(
          "flex items-center justify-center z-10",
          orientation === 'vertical' 
            ? "w-1.5 cursor-col-resize hover:bg-primary/20 active:bg-primary/30" 
            : "h-1.5 cursor-row-resize hover:bg-primary/20 active:bg-primary/30",
          isDragging && "bg-primary/30"
        )}
        onMouseDown={handleDragStart}
      >
        <div className={cn(
          "bg-border rounded-full opacity-80",
          orientation === 'vertical' 
            ? "w-0.5 h-8" 
            : "h-0.5 w-8"
        )}/>
      </div>
      
      {/* Right/Bottom Panel */}
      <div 
        className={cn(
          "overflow-auto",
          isDragging && "select-none"
        )}
        style={
          orientation === 'vertical'
            ? { width: `${100 - splitPosition}%` }
            : { height: `${100 - splitPosition}%` }
        }
      >
        {rightPanel}
      </div>
    </div>
  );
};

export default SplitView;
