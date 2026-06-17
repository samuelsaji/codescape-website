import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Insights',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'Web Development' },
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: 'Mobile Apps', value: 'Mobile Apps' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Consulting', value: 'Consulting' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
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
      description: 'Full case study content shown in the Glance overlay',
    }),
    defineField({
      name: 'freshInsight',
      title: 'Show in Fresh Insights',
      type: 'boolean',
      description: 'Toggle on to feature this case study in the Fresh Insights section',
      initialValue: false,
    }),
  ],
})
