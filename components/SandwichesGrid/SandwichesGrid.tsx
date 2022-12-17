"use client";

import { SimpleGrid } from "@chakra-ui/react";
import useSWR from "swr";
import { FilterContextValue } from "../../contexts/Filter/types";
import { directus } from "../../data/directus";
import { useFilter } from "../../hooks/useFilter/useFilter";
import { Sandwich } from "../Sandwich/Sandwich";

const fetchSandwiches = (
  filter: Pick<FilterContextValue, "effectLevel" | "effectType" | "pokemonType">
) =>
  directus.items("sandwiches").readByQuery({
    fields: ["*", "ingredients.*", "translations.*"],
    filter: {},
  });

export const SandwichesGrid = () => {
  const { effectLevel, effectType, pokemonType } = useFilter();
  const { data: sandwiches } = useSWR(
    () => `sandwiches:${effectLevel}${effectType}${pokemonType}`,
    () => fetchSandwiches({ effectLevel, effectType, pokemonType })
  );

  return (
    <SimpleGrid columns={{ base: 1, lg: 2, xl: 3, "2xl": 4 }} gap={4}>
      {sandwiches?.data &&
        sandwiches.data.map((sandwich) => (
          <Sandwich key={sandwich.id} sandwich={sandwich} />
        ))}
    </SimpleGrid>
  );
};
