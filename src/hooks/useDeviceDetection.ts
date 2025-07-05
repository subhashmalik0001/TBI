import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      
      // Mobile: < 768px
      // Tablet: 768px - 1024px  
      // Desktop: > 1024px
      const mobileDevice = width < 768 || 
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const tabletDevice = width >= 768 && width < 1024;
      const desktopDevice = width >= 1024;

      setIsMobile(mobileDevice);
      setIsTablet(tabletDevice);
      setIsDesktop(desktopDevice);
      setIsLoading(false);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLoading
  };
} 