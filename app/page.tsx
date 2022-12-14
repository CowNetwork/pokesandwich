"use client";

import { Box, Card, CardBody, CardHeader, chakra, Container, Divider, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.base}>
      <Container maxW="1440px" py={4}>
        <SimpleGrid gap={4} minChildWidth="18rem">
          <Card size="sm">
            <CardHeader>
              <Heading size="md">
                <chakra.span fontWeight={300}>#S0001</chakra.span> Spezial Gurken-Chili-Sandwich
              </Heading>
            </CardHeader>

            <CardBody>
              T
            </CardBody>
            <Divider />
            <Flex bgClip="text" bgGradient="linear(to-r, #F04F30, #AA4488)" fontSize="0.875rem" fontWeight="600">
              <Box flex={1} p="var(--card-padding)">Maxi 1</Box>
              <Divider opacity={1} orientation="vertical" />
              <Box flex={1} p="var(--card-padding)">Begegnung 1</Box>
              <Divider opacity={1} orientation="vertical" />
              <Box flex={1} p="var(--card-padding)">Raid 1</Box>
            </Flex>
          </Card>

          <Card size="sm">
            <CardHeader>
              <Heading size="md">
                <chakra.span fontWeight={300}>#S0001</chakra.span> Spezial Gurken-Chili-Sandwich
              </Heading>
            </CardHeader>

            <CardBody>
              T
            </CardBody>
            <Divider />
            <Flex bgClip="text" bgGradient="linear(to-r, #F04F30, #AA4488)" fontSize="0.875rem" fontWeight="600">
              <Box flex={1} p="var(--card-padding)">A</Box>
              <Divider opacity={1} orientation="vertical" />
              <Box flex={1} p="var(--card-padding)">B</Box>
              <Divider opacity={1} orientation="vertical" />
              <Box flex={1} p="var(--card-padding)">C</Box>
            </Flex>
          </Card>
        </SimpleGrid>
      </Container>
    </div>
  );
}
