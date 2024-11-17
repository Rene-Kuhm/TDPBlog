import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Publicación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .warning('El título no debe exceder los 100 caracteres.'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning(
          'La descripción no debe exceder los 200 caracteres.'
        ),
    }),
    defineField({
      name: 'pubDate',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('La fecha de publicación es obligatoria.'),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required().error('La categoría es obligatoria.'),
    }),
    defineField({
      name: 'banner',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true, // Permite seleccionar una parte específica de la imagen
      },
      validation: (Rule) => Rule.required().error('La imagen destacada es obligatoria.'),
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
      of: [{ type: 'string' }],
      validation: (Rule) =>
        Rule.unique().warning('Las etiquetas deben ser únicas.'),
    }),
    defineField({
      name: 'selected',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false, // Valor inicial por defecto
    }),
    defineField({
      name: 'fmContentType',
      title: 'Tipo de Contenido',
      type: 'string',
      options: {
        list: [
          { title: 'Post', value: 'posts' },
          { title: 'Tutorial', value: 'tutorials' },
          { title: 'Noticias', value: 'news' },
        ],
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras Clave',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) =>
        Rule.min(1)
          .max(20)
          .warning('Debe haber entre 1 y 20 palabras clave.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Genera el slug automáticamente a partir del título
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Elimina caracteres especiales
            .replace(/\s+/g, '-') // Reemplaza espacios con guiones
            .slice(0, 96), // Limita a 96 caracteres
      },
      validation: (Rule) => Rule.required().error('El slug es obligatorio.'),
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent', // Debes definir "blockContent" en tu esquema
      validation: (Rule) => Rule.required().error('El contenido es obligatorio.'),
    }),
  ],
});
