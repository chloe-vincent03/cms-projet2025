import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'nuxt-2025',

  projectId: 'rl4zi0v7',
  dataset: 'production',

  plugins: [structureTool({
    structure : myStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
