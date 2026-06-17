import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// Export helper to know if Sanity credentials are provided
export const isSanityConfigured = !!projectId;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      useCdn: false, // `false` bypasses CDN cache so new content appears immediately
      apiVersion: '2026-06-16', // use current date to target latest API version
    })
  : null;
