import { Flex, Image } from "@chakra-ui/react";
import { useSandwichEffect } from "../../hooks/useSandwichEffect/useSandwichEffect";
import { SandwichEffectProps } from "./types";

export const SandwichEffect = ({
  effect,
  level,
  type,
}: SandwichEffectProps) => {
  const { effectType, pokemonType } = useSandwichEffect(effect, type);

  return (
    <Flex alignItems="center" flex={1} gap={2}>
      {pokemonType && effect !== "egg" && (
        <Image
          alt={pokemonType.translations[0].name}
          h="1.5rem"
          src={pokemonType.imageUrl}
          title={pokemonType.translations[0].name}
        />
      )}
      {effectType && (
        <span
          title={effectType.translations[0].name}
        >{`${effectType.translations[0].abbreviation} ${level}`}</span>
      )}
    </Flex>
  );
};
