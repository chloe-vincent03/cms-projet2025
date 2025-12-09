import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Accueil',
  type: 'document',


  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Contenu' }
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      group: 'seo'
    }),

    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      group: 'seo'
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre principal',
          type: 'string'
        }),

        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string'
        }),

        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    })
  ]
})
