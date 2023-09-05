import { defineType } from 'sanity';

export const semester = defineType({
  name: 'semester',
  type: 'document',
  fields: [
    {
      name: 'term',
      type: 'string',
      options: {
        list: [
          { title: 'Spring', value: 'spring' },
          { title: 'Summer', value: 'summer' },
          { title: 'Fall', value: 'fall' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      type: 'date',
      description: 'When does this semester start?',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'term',
      subtitle: 'startDate',
    },
  },
});
