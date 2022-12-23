"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import useSWR from "swr";
import { FilterContext } from "../../contexts/Filter/Filter.context";
import { FilterContextValue } from "../../contexts/Filter/types";
import { directus } from "../../data/directus";
import { Sandwich } from "../Sandwich/Sandwich";

const fetchSandwiches = async (
  filter:
    | Pick<FilterContextValue, "effectLevel" | "effectType" | "pokemonType">
    | undefined
) => {
  if (typeof filter === "undefined") {
    return await directus.items("sandwiches").readByQuery({
      fields: ["*", "ingredients.*", "translations.*"],
      sort: ["ingameId"],
    });
  }

  return await directus.items("sandwiches").readByQuery({
    fields: ["*", "ingredients.*", "translations.*"],
    filter: {
      _or: [
        {
          _and: [
            {
              firstEffectLevel: {
                _eq: filter.effectLevel,
              },
            },
            {
              firstEffect: {
                _eq: filter.effectType,
              },
            },
            {
              firstEffectType: {
                _eq: filter.pokemonType,
              },
            },
          ],
        },
        {
          _and: [
            {
              secondEffectLevel: {
                _eq: filter.effectLevel,
              },
            },
            {
              secondEffect: {
                _eq: filter.effectType,
              },
            },
            {
              secondEffectType: {
                _eq: filter.pokemonType,
              },
            },
          ],
        },
        {
          _and: [
            {
              thirdEffectLevel: {
                _eq: filter.effectLevel,
              },
            },
            {
              thirdEffect: {
                _eq: filter.effectType,
              },
            },
            {
              thirdEffectType: {
                _eq: filter.pokemonType,
              },
            },
          ],
        },
      ],
    },
    sort: ["ingameId"],
  });
};

export const SandwichesGrid = () => {
  const { effectLevel, effectType, pokemonType, hasFilter } =
    useContext(FilterContext);
  const { data: sandwiches } = useSWR(
    () => `sandwiches:${effectLevel}${effectType}${pokemonType}`,
    () =>
      fetchSandwiches(
        hasFilter ? { effectLevel, effectType, pokemonType } : undefined
      )
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
