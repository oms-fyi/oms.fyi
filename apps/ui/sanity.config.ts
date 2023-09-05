import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@oms.fyi/sanity';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'oms.fyi',

  projectId: '3yw11hu2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: Object.values(schemaTypes),
  },
});
