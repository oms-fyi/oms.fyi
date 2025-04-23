import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export const programType = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'acronym',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
});
