const UNSPLASH_HOST = 'images.unsplash.com';

export function isUnsplashUrl(url: string): boolean {
  if (!url || !url.startsWith('http')) return false;
  try {
    return new URL(url).hostname === UNSPLASH_HOST;
  } catch {
    return false;
  }
}

export function optimizeUnsplashUrl(
  url: string,
  opts?: { width?: number; quality?: number; format?: 'webp' | 'avif' },
): string {
  if (!isUnsplashUrl(url)) return url;
  try {
    const u = new URL(url);
    if (opts?.width != null) u.searchParams.set('w', String(opts.width));
    u.searchParams.set('q', String(opts?.quality ?? 75));
    u.searchParams.set('fm', opts?.format ?? 'webp');
    if (!u.searchParams.has('fit')) u.searchParams.set('fit', 'crop');
    u.searchParams.set('auto', 'format');
    return u.toString();
  } catch {
    return url;
  }
}

export function unsplashResponsiveSrcSet(
  url: string,
  format: 'webp' | 'avif',
  widths: number[],
): string {
  return widths.map((w) => `${optimizeUnsplashUrl(url, { width: w, format })} ${w}w`).join(', ');
}
