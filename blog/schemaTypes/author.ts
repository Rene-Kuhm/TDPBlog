import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'text',
      validation: (Rule) => Rule.max(300),
    },
    {
      name: 'profileImage',
      title: 'Imagen de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
