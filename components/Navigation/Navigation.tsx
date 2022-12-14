"use client";

import { Box, Button, Container, HStack, IconButton, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Books, Funnel, Plus } from "phosphor-react";

const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Container maxW="1440px" py={4}>
        <HStack spacing={3}>
          <Box alignItems="center" display="inline-flex" fontFamily="noto" fontSize="0.875rem" fontWeight={500} gap={2} marginRight="auto">
            <Books size={24} weight="duotone" /> PokéSandwi.ch
          </Box>

          {isDesktop ? (
            <Button
              leftIcon={<Funnel size={18} weight="duotone" />}
              px={3}
              variant="ghost"
            >
              Filter
            </Button>
          ) : (
            <IconButton
              variant="ghost"
              icon={<Funnel size={24} weight="duotone" />}
              aria-label="Open Menu"
            />
          )}

          <IconButton
            aria-label="Neues Rezept"
            colorScheme="cyan"
            icon={<Plus size={18} weight="bold" />}
            variant="solid"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;