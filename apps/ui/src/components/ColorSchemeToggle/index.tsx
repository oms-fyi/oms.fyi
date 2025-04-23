'use client';

import { useMantineColorScheme } from '@mantine/core';
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export const ColorSchemeToggle = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <Switch
      checked={colorScheme === 'light'}
      onChange={(e) =>
        setColorScheme(e.currentTarget.checked ? 'light' : 'dark')
      }
      size="md"
      color="dark.4"
      onLabel={
        <IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />
      }
      offLabel={
        <IconMoonStars
          size={16}
          stroke={2.5}
          color="var(--mantine-color-blue-6)"
        />
      }
    />
  );
};
