import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

import { esESLocale } from '@sanity/locale-es-es'

export default defineConfig({
    name: 'default',
    title: 'JOSEREY101 Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    basePath: '/studio',

    plugins: [structureTool(), visionTool(), esESLocale()],

    schema: {
        types: schemaTypes,
    },
})
