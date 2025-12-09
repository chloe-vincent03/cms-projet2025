import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      S.listItem()
        .title('Accueil')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')),
       ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'home'].includes(listItem.getId()!))
    ])