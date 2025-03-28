import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface DevicePreviewProps {
  device: 'mobile' | 'tablet' | 'desktop';
  children: ReactNode;
}

/**
 * Device Preview Component
 * 
 * Renders content in a device-specific container to simulate
 * how it would appear on different devices
 */
const DevicePreview: React.FC<DevicePreviewProps> = ({ device, children }) => {
  // Define device specific classes
  const deviceClasses = {
    mobile: 'max-w-[320px] mx-auto h-[480px]',
    tablet: 'max-w-[768px] mx-auto h-[600px]',
    desktop: 'w-full h-[600px]',
  };

  return (
    <div 
      className={cn(
        'overflow-y-auto bg-white border-t border-gray-200 p-4',
        deviceClasses[device]
      )}
    >
      {children}
    </div>
  );
};

export default DevicePreview;
