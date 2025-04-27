import { DateTime } from '@/components/Format/DateTime';
import { sanityFetch } from '@/sanity/lib/live';
import { Avatar, Container, Group, Paper, Stack } from '@mantine/core';
import { IconCalendar, IconPencil } from '@tabler/icons-react';
import { defineQuery } from 'next-sanity';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

interface PageProps {
  params: Promise<{ id: string }>;
}

const REVIEW_BY_ID_QUERY = defineQuery(
  `*[_type == "review" && _id == $id]{..., course->{name}, semester->}[0]`
);

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const { data: review } = await sanityFetch({
    query: REVIEW_BY_ID_QUERY,
    params: { id },
  });

  return (
    <Container size="sm">
      <Paper shadow="md" p="xl">
        <Stack>
          <Group>
            <Avatar radius="xl" />
            <Stack gap="xs">
              {review?.authorId}
              <Group>
                <Group>
                  <IconPencil />
                  <DateTime>{new Date(review?._createdAt ?? '')}</DateTime>
                </Group>
                <Group>
                  <IconCalendar />
                  {review?.semester?.term}{' '}
                  <DateTime>
                    {new Date(review?.semester?.startDate ?? '')}
                  </DateTime>
                </Group>
              </Group>
            </Stack>
          </Group>
          <div className="break-words">
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
              {review?.body}
            </ReactMarkdown>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}
