import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    // Define a VITE_API_URL variable that holds the value of API_URL from .env
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.API_URL),
  },
  plugins: [sveltekit()],
});
