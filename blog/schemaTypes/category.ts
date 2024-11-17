import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Noticias', value: 'noticias'},
          {title: 'Programación', value: 'programacion'},
          {title: 'Programas', value: 'programas'},
          {title: 'Recomendaciones', value: 'recomendaciones'},
          {title: 'Tutoriales', value: 'tutoriales'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.max(200),
    },
  ],
})
