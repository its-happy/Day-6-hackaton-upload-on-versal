'use client'

/**
 * Sanity Studio Configuration
 * Mounted at the `/src/app/studio/[[...tool]]/page.tsx` route
 * More about API versioning: https://www.sanity.io/docs/api-versioning
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

// Ensure projectId and dataset are defined
if (!projectId || !dataset) {
  throw new Error(
    'Missing required environment variables: SANITY_PROJECT_ID or SANITY_DATASET'
  );
}

export default defineConfig({
  // Base path for Sanity Studio
  basePath: '/studio',

  // Project details
  projectId,
  dataset,

  // API versioning
  apiVersion,

  // Content schema
  schema,

  // Studio Plugins
  plugins: [
    // Custom Structure Tool
    structureTool({ structure }),

    // Vision Tool for GROQ queries
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  // Optional: CORS Settings (if needed)
  cors: {
    origins: [
      'http://localhost:3000', // Local development
      'https://day-6-hackaton-upload-on-versal.vercel.app/', // Production domain
    ],
  },
});
