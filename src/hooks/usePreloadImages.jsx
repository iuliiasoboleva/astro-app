import { useEffect } from 'react';

export const usePreloadImages = (urls = []) => {
  useEffect(() => {
    const images = urls.map((src) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = src;
      return img;
    });
    return () => {
      images.length = 0;
    };
  }, [urls]);
};
