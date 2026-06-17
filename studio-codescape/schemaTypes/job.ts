import { defineField, defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'dept',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string',
      description: 'e.g., ₹12-18 LPA or $80k-$120k',
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      description: 'e.g., B.Tech in CS or equivalent',
    }),
  ],
})
