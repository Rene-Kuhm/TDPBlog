import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Publicación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(100).warning('El título no debe ser demasiado largo.'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.max(200).warning('La descripción no debe exceder los 200 caracteres.'),
    }),
    defineField({
      name: 'pubDate',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'banner',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'banner2',
      title: 'Segunda Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'selected',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'fmContentType',
      title: 'Tipo de Contenido',
      type: 'string',
      options: {
        list: ['posts', 'tutorials', 'news'], // Ejemplo de valores permitidos
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras Clave',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1).max(20),
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
