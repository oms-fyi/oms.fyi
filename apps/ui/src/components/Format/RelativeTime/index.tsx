import { Text, TextProps } from '@mantine/core';

interface RelativeTimeProps extends TextProps {
  date: string;
  options?: Intl.RelativeTimeFormatOptions;
  unit?:
    | Intl.RelativeTimeFormatUnit
    | ((millis: number) => Intl.RelativeTimeFormatUnit);
}

const MILLIS_IN = {
  SECOND: 1_000,
  MINUTE: 60 * 1_000,
  HOUR: 60 * 60 * 1_000,
  DAY: 24 * 60 * 60 * 1_000,
  WEEK: 7 * 24 * 60 * 60 * 1_000,
};

export const RelativeTime = ({
  date,
  options,
  ...props
}: RelativeTimeProps) => {
  const millis = Date.parse(date) - Date.now();
  const formatter = new Intl.RelativeTimeFormat(undefined, options);

  if (-millis < MILLIS_IN.MINUTE) {
    return (
      <Text {...props}>
        {formatter.format(Math.trunc(millis / MILLIS_IN.SECOND), 'second')}
      </Text>
    );
  }

  if (-millis < MILLIS_IN.HOUR) {
    return (
      <Text {...props}>
        {formatter.format(Math.trunc(millis / MILLIS_IN.MINUTE), 'minute')}
      </Text>
    );
  }

  if (-millis < MILLIS_IN.DAY) {
    return (
      <Text {...props}>
        {formatter.format(Math.trunc(millis / MILLIS_IN.HOUR), 'hour')}
      </Text>
    );
  }

  if (-millis < MILLIS_IN.WEEK) {
    return (
      <Text {...props}>
        {formatter.format(Math.trunc(millis / MILLIS_IN.DAY), 'day')}
      </Text>
    );
  }

  return (
    <Text {...props}>
      {formatter.format(Math.trunc(millis / MILLIS_IN.WEEK), 'week')}
    </Text>
  );
};
