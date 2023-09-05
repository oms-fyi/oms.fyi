import { defineType } from 'sanity';

export const course = defineType({
  name: 'course',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'codes',
      description:
        'What department-number code is this course listed as? (Crosslisted courses can have multiple codes)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'programs',
      description: 'Students in which programs can take this course?',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'program' } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: 3,
      description:
        'Short course summary copied from https://catalog.gatech.edu/',
    },
    {
      name: 'creditHours',
      type: 'number',
      validation: (Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'syllabus',
      type: 'object',
      fields: [
        {
          name: 'file',
          type: 'file',
        },
        {
          name: 'url',
          type: 'url',
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'textbooks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'GATech URL',
      name: 'officialURL',
      type: 'url',
    },
    {
      name: 'notesURL',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Foundational?',
      name: 'isFoundational',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Deprecated?',
      name: 'isDeprecated',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
});
