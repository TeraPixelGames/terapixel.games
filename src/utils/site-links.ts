const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE_PREFIX = BASE_URL === '/' ? '' : BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path) {
    return path;
  }

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  if (!path.startsWith('/')) {
    return path;
  }

  if (BASE_PREFIX && (path === BASE_PREFIX || path.startsWith(`${BASE_PREFIX}/`))) {
    return path;
  }

  return `${BASE_PREFIX}${path}`;
}

export function stripBase(pathname: string): string {
  if (!BASE_PREFIX) {
    return pathname;
  }

  if (pathname === BASE_PREFIX) {
    return '/';
  }

  if (pathname.startsWith(`${BASE_PREFIX}/`)) {
    const trimmed = pathname.slice(BASE_PREFIX.length);
    return trimmed.length > 0 ? trimmed : '/';
  }

  return pathname;
}
