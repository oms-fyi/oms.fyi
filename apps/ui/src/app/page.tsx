import { sanityFetch } from '@/sanity/lib/live';
import { Card, Group, Text, Stack, Button, ScrollArea } from '@mantine/core';
import { IconClock, IconPlus } from '@tabler/icons-react';
import { defineQuery } from 'next-sanity';
import { RelativeTime } from '@/components/Data/RelativeTime';

const RECENT_REVIEWS_QUERY = defineQuery(
  `*[_type == "review"]{..., course->{codes}}|order(_createdAt desc)[0...10]`
);

export default async function Index() {
  const { data: reviews } = await sanityFetch({ query: RECENT_REVIEWS_QUERY });

  return (
    <ScrollArea scrollbars="x" maw="100%">
      <Group h="100%" wrap="nowrap" align="stretch">
        <Stack gap="xs" w={240}>
          <Text fz="xs">A few moments ago...</Text>
          <Button
            bd="2px dashed var(--mantine-color-blue-2)"
            flex={1}
            p="sm"
            variant="outline"
            leftSection={<IconPlus size={14} />}
          >
            Add your review
          </Button>
        </Stack>
        {reviews.map((review) => (
          <Stack gap="xs" w={240} key={review._id}>
            <RelativeTime fz="xs" date={review._createdAt} />
            <Card shadow="sm" padding="sm" radius="md" withBorder flex="1">
              <Stack justify="space-between" mt="xs" mb="xs" gap="sm">
                <Text fw={500} truncate="end" size="xs">
                  {review.course?.codes?.at(0) ?? '--'}
                </Text>
                <Text c="dimmed" size="xs" lineClamp={4}>
                  {review.body}
                </Text>
              </Stack>
            </Card>
          </Stack>
        ))}
      </Group>
    </ScrollArea>
  );
}
