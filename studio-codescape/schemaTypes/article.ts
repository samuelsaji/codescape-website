import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g., May 12, 2026',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'Full article content shown in the Glance overlay',
    }),
    defineField({
      name: 'freshInsight',
      title: 'Show in Fresh Insights',
      type: 'boolean',
      description: 'Toggle on to feature this article in the Fresh Insights section on the homepage',
      initialValue: false,
    }),
  ],
})
