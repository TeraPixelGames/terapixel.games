const rawBaseUrl = import.meta.env.BASE_URL || '/';
const normalizedBasePath = rawBaseUrl === '/' ? '' : `/${rawBaseUrl.replace(/^\/+|\/+$/g, '')}`;

const ABSOLUTE_URL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i;

export const withBasePath = (path: string): string => {
  if (!path) {
    return normalizedBasePath || '/';
  }

  if (
    ABSOLUTE_URL_PATTERN.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  if (!path.startsWith('/')) {
    return path;
  }

  if (!normalizedBasePath) {
    return path;
  }

  if (path === normalizedBasePath || path.startsWith(`${normalizedBasePath}/`)) {
    return path;
  }

  return `${normalizedBasePath}${path}`;
};

export const withoutBasePath = (pathname: string): string => {
  if (!pathname) {
    return '/';
  }

  if (!normalizedBasePath) {
    return pathname;
  }

  if (pathname === normalizedBasePath) {
    return '/';
  }

  if (pathname.startsWith(`${normalizedBasePath}/`)) {
    return pathname.slice(normalizedBasePath.length) || '/';
  }

  return pathname;
};

export const addBuildVersion = (url: string, buildVersion: string | undefined): string => {
  if (!url || !buildVersion) {
    return url;
  }

  if (
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    url.startsWith('#') ||
    url.startsWith('data:')
  ) {
    return url;
  }

  try {
    const parsed = new URL(url, 'https://terapixel.games');
    parsed.searchParams.set('v', buildVersion);
    const isAbsolute = ABSOLUTE_URL_PATTERN.test(url);
    return isAbsolute ? parsed.toString() : `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return url;
  }
};
