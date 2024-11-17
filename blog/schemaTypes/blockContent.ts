import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'blockContent',
  title: 'Contenido',
  type: 'array',
  of: [
    // Define bloques de texto enriquecido
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Encabezado 1', value: 'h1' },
        { title: 'Encabezado 2', value: 'h2' },
        { title: 'Encabezado 3', value: 'h3' },
        { title: 'Cita', value: 'blockquote' },
      ],
      lists: [
        { title: 'Viñetas', value: 'bullet' },
        { title: 'Numerado', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Negrita', value: 'strong' },
          { title: 'Cursiva', value: 'em' },
          { title: 'Código', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }).error('Debes ingresar una URL válida.'),
              },
            ],
          },
        ],
      },
    }),

    // Define imágenes con opciones de hotspot
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Descripción de la imagen para accesibilidad.',
          validation: (Rule) =>
            Rule.required().error('El texto alternativo es obligatorio.'),
        },
      ],
    }),
  ],
});
