import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
    name: 'caseStudy',
    title: 'Caso de Estudio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título del Proyecto',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Bajada Corta',
            type: 'string',
        }),
        defineField({
            name: 'tagDisplay',
            title: 'Tag Visible (Tarjeta)',
            type: 'string',
            description: 'Lo que se ve en la tarjeta (ej: CULTURA)',
        }),
        defineField({
            name: 'tag',
            title: 'Categoría (Filtro)',
            type: 'string',
            options: {
                list: [
                    { title: 'Cultura', value: 'CULTURA' },
                    { title: 'Corporativo', value: 'CORPORATIVO' },
                    { title: 'Educación', value: 'EDUCACIÓN' },
                    { title: 'E-Commerce', value: 'E-COMMERCE' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color del Neón',
            type: 'string',
            description: 'Clase de Tailwind (ej: bg-neon-pink)',
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen de Portada (Hero)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'challenge',
            title: 'El Desafío',
            type: 'text',
        }),
        defineField({
            name: 'solution',
            title: 'La Solución',
            type: 'text',
        }),
        defineField({
            name: 'impact',
            title: 'El Impacto',
            type: 'text',
        }),
        defineField({
            name: 'tier',
            title: 'Nivel (Importancia)',
            type: 'number',
            initialValue: 1,
            description: 'Mayor número aparece primero (ej: 10 = Top Ranking)',
        }),
        defineField({
            name: 'duration',
            title: 'Duración',
            type: 'string',
            description: 'ej: "4 Semanas" o "Q1 2024"',
        }),
        defineField({
            name: 'stats',
            title: 'Datos (Legacy)',
            type: 'object',
            hidden: true,
            fields: [
                { name: 'year', type: 'string', title: 'Año' },
                { name: 'role', type: 'string', title: 'Rol' },
                { name: 'client', type: 'string', title: 'Cliente' },
                { name: 'link', type: 'url', title: 'Link al Proyecto' },
            ]
        }),
        defineField({
            name: 'keyMetrics',
            title: 'Métricas Clave (Cards Flotantes)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Valor (ej: +40%)' },
                        { name: 'label', type: 'string', title: 'Etiqueta (ej: Conversión)' },
                        { name: 'icon', type: 'string', title: 'Icono (Material UI)' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'techStack',
            title: 'Tecnologías (Stack)',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'gallery',
            title: 'Galería de Imágenes',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'language',
            title: 'Idioma',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'tagDisplay',
            title: 'Tag Display',
            type: 'string',
            description: 'The tag shown on the card (e.g. CULTURA)',
        }),
        defineField({
            name: 'tag',
            title: 'Filter Tag',
            type: 'string',
            options: {
                list: [
                    { title: 'Cultura', value: 'CULTURA' },
                    { title: 'Corporativo', value: 'CORPORATIVO' },
                    { title: 'Educación', value: 'EDUCACIÓN' },
                    { title: 'E-Commerce', value: 'E-COMMERCE' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color Class',
            type: 'string',
            description: 'Tailwind class for the tag background (e.g. bg-neon-pink)',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'challenge',
            title: 'Challenge',
            type: 'text',
        }),
        defineField({
            name: 'solution',
            title: 'Solution',
            type: 'text',
        }),
        defineField({
            name: 'impact',
            title: 'Impact',
            type: 'text',
        }),
        defineField({
            name: 'tier',
            title: 'Tier (Importance)',
            type: 'number',
            initialValue: 1,
            description: 'Higher numbers appear first (e.g. 10 = Top Project)',
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'e.g. "4 Weeks" or "Q1 2024"',
        }),
        defineField({
            name: 'stats',
            title: 'Project Data (Legacy)',
            type: 'object',
            hidden: true,
            fields: [
                { name: 'year', type: 'string', title: 'Year' },
                { name: 'role', type: 'string', title: 'Role' },
                { name: 'client', type: 'string', title: 'Client' },
                { name: 'link', type: 'url', title: 'Live Project URL' },
            ]
        }),
        defineField({
            name: 'keyMetrics',
            title: 'Key Metrics (Hybrid UI)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value (e.g. +40%)' },
                        { name: 'label', type: 'string', title: 'Label (e.g. Rate)' },
                        { name: 'icon', type: 'string', title: 'Icon (Material Name)' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'Spanish', value: 'es' },
                    { title: 'English', value: 'en' },
                ],
            },
            initialValue: 'es',
        })
    ],
})
