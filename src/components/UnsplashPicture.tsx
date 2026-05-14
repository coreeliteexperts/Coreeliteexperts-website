import {
  isUnsplashUrl,
  optimizeUnsplashUrl,
  unsplashResponsiveSrcSet,
} from '@/lib/unsplashImage';

type UnsplashPictureProps = {
  src: string;
  alt: string;
  widths?: number[];
  sizes: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const DEFAULT_WIDTHS = [400, 640, 960, 1200];

export function UnsplashPicture({
  src,
  alt,
  widths = DEFAULT_WIDTHS,
  sizes,
  className,
  loading = 'lazy',
  fetchPriority,
}: UnsplashPictureProps) {
  if (!isUnsplashUrl(src)) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    );
  }

  const fallbackW = widths[Math.min(2, widths.length - 1)] ?? 960;

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={unsplashResponsiveSrcSet(src, 'avif', widths)}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={unsplashResponsiveSrcSet(src, 'webp', widths)}
        sizes={sizes}
      />
      <img
        src={optimizeUnsplashUrl(src, { width: fallbackW })}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        sizes={sizes}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
}
