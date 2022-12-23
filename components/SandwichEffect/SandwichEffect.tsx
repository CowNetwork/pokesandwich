import { Badge, Flex, Image, Tooltip } from "@chakra-ui/react";
import { CircleDashed } from "phosphor-react";
import { translate } from "../../helpers/localization";
import { useSandwichEffect } from "../../hooks/useSandwichEffect/useSandwichEffect";
import { SandwichEffectProps } from "./types";

export const SandwichEffect = ({
  effect,
  level,
  type,
}: SandwichEffectProps) => {
  const { effectType, pokemonType } = useSandwichEffect(effect, type);

  const effectTypeName =
    effectType && translate()(effectType.translations).name;
  const pokemonTypeName =
    pokemonType && translate()(pokemonType.translations).name;

  const tooltipLabel =
    effectType &&
    pokemonType &&
    `${effectTypeName}${
      effect !== "egg" ? `: ${pokemonTypeName}` : ""
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
            alt={pokemonTypeName}
            h="1.5rem"
            src={pokemonType.imageUrl}
            title={pokemonTypeName}
          />
        )}
        {effect === "egg" && <CircleDashed size={24} />}
        {effectType && (
          <>
            <span>{translate()(effectType.translations).abbreviation}</span>
            <Badge colorScheme="whiteAlpha" fontWeight="700">
              {level}
            </Badge>
          </>
        )}
      </Flex>
    </Tooltip>
  );
};
