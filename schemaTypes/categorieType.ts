import {defineField, defineType} from 'sanity'

export const categorieType = defineType({
  name: 'categorie',
  title: 'Categorie',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'label'},
      validation: (rule) => rule.required(),
    }),
  ],
})