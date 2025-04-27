import { TextProps, Text } from '@mantine/core';

interface DateTimeProps extends Omit<TextProps, 'children'> {
  children: number | Date | undefined;
  options?: Intl.DateTimeFormatOptions;
}

export const DateTime = ({ options, children, ...props }: DateTimeProps) => {
  return (
    <Text {...props}>
      {Number.isNaN(Number(children))
        ? ''
        : new Intl.DateTimeFormat(undefined, options).format(children)}
    </Text>
  );
};
