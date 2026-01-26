import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
