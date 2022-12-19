"use client";

import {
  Box,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Books, Plus } from "phosphor-react";
import { Filter } from "../Filter/Filter";

const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Container maxW="1440px" py={4}>
        <HStack spacing={3}>
          <Box
            alignItems="center"
            display="inline-flex"
            fontFamily="noto"
            fontSize="0.875rem"
            fontWeight={500}
            gap={2}
            marginRight="auto"
          >
            <Books size={24} weight="duotone" /> PokéSandwi.ch
          </Box>

          <Filter />

          <IconButton
            aria-label="Neues Rezept"
            colorScheme="cyan"
            icon={<Plus size={18} weight="bold" />}
            variant="ghost"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
