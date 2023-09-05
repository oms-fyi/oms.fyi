import { defineType } from 'sanity';

export const review = defineType({
  name: 'review',
  type: 'document',
  fields: [
    {
      name: 'course',
      type: 'reference',
      to: [{ type: 'course' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'semester',
      type: 'reference',
      to: [{ type: 'semester' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      type: 'text',
      // Some old records are missing this field
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      // Some old records are missing this field
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    },
    {
      name: 'difficulty',
      type: 'number',
      // Some old records are missing this field
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    },
    {
      name: 'workload',
      type: 'number',
      // Some old records are missing this field
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'authorId',
      title: 'Author ID',
      type: 'string',
      description: 'Encrypted GT account of review author.',
      readOnly: true,
      // Some old records are missing this field
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'course.name',
      subtitle: 'semester.year',
    },
  },
});
