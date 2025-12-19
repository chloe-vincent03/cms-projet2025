import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups : [
    {name: 'header', title :'header'},
    {name: 'seo', title: 'seo'},
    {name: 'footer', title: 'footer'}
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'seo'
    }),
    defineField({
      name: 'logo',
      title: 'logo',
      type: 'image',
      group: 'header',
    }),
        defineField({
      name: 'logofooter',
      title: 'logo-footer',
      type: 'image',
      group: 'footer',
    }),
    defineField({
        name: 'navigation',
        title : 'Navigation',
        type:'array',
        group:'header',
        of : [{
            title: 'Item',
            name: 'item',
            type: 'object',
            fields:[
                { name: 'label', type : 'string' , title: 'Label'},
                { name: 'url', type : 'string' , title: 'URL'}
            ]
        }]
    })
  ]
})