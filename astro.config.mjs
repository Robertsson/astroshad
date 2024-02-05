import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";



// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), sitemap(), react(), tailwind({
    applyBaseStyles: false
  })]
});