// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  Container,
  Group,
} from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';

export const metadata = {
  title: 'oms.fyi',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Container>
            <Group justify="space-between">
              <h1>OMS.fyi</h1>
              <ColorSchemeToggle />
            </Group>
            <main>{children}</main>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
