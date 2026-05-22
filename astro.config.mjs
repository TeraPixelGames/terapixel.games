// Canonical production domain for this site:
// https://terapixel.games
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://terapixel.games',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
