import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <div className={cn("bg-muted flex items-center justify-center", className)}>Failed to load image</div>;
  }

  if (!isLoaded) {
    return <Skeleton className={cn("w-full h-full", className)} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0", className)}
      loading="lazy"
      {...props}
    />
  );
}; 