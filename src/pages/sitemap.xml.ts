import games from '../data/games.json';
import type { APIRoute } from 'astro';
import type { Game } from '../types';
import { getCollection } from 'astro:content';

const staticPaths = ['/', '/games', '/blog', '/shop', '/account', '/support', '/about', '/terms', '/contact', '/privacy-policy'];

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Missing site config', { status: 500 });
  }

  const gamePaths = (games as Game[]).map((game) => `/${game.slug}`);
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);
  const allPaths = [...staticPaths, ...gamePaths, ...blogPaths];

  const urls = allPaths
    .map((path) => `<url><loc>${new URL(path, site).toString()}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
