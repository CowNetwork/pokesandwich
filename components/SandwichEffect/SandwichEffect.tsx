import { Badge, Flex, Image, Tooltip } from "@chakra-ui/react";
import { CircleDashed } from "phosphor-react";
import { useSandwichEffect } from "../../hooks/useSandwichEffect/useSandwichEffect";
import { SandwichEffectProps } from "./types";

export const SandwichEffect = ({
  effect,
  level,
  type,
}: SandwichEffectProps) => {
  const { effectType, pokemonType } = useSandwichEffect(effect, type);

  const tooltipLabel =
    effectType &&
    pokemonType &&
    `${effectType.translations[0].name}${
      effect !== "egg" ? `: ${pokemonType.translations[0].name}` : ""
    } Lv. ${level}`;

  return (
    <Tooltip
      hasArrow
      isDisabled={!effectType || !pokemonType}
      label={tooltipLabel}
      placement="top"
    >
      <Flex alignItems="center" flex={1} gap={2}>
        {pokemonType && effect !== "egg" && (
          <Image
            alt={pokemonType.translations[0].name}
            h="1.5rem"
            src={pokemonType.imageUrl}
            title={pokemonType.translations[0].name}
          />
        )}
        {effect === "egg" && <CircleDashed size={24} />}
        {effectType && (
          <>
            <span>{effectType.translations[0].abbreviation}</span>
            <Badge colorScheme="whiteAlpha" fontWeight="700">
              {level}
            </Badge>
          </>
        )}
      </Flex>
    </Tooltip>
  );
};
