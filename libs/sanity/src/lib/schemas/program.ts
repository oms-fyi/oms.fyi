import { defineType } from 'sanity';

export const program = defineType({
  name: 'program',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'acronym',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'GATech URL',
      name: 'url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
});
