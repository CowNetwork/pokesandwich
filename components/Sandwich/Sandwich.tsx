import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  chakra,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { translate } from "../../helpers/localization";
import { SandwichEffect } from "../SandwichEffect/SandwichEffect";
import { SandwichIngredient } from "../SandwichIngredient/SandwichIngredient";
import { SandwichProps } from "./types";

export const Sandwich = ({ sandwich }: SandwichProps) => {
  return (
    <Card size="sm">
      <CardHeader>
        <Heading size="md">
          {sandwich.ingameId && sandwich.ingameId > 0 && (
            <chakra.span fontWeight={300}>
              {`#${sandwich.ingameId} `}
            </chakra.span>
          )}
          {translate()(sandwich.translations)?.name ?? "Unbenanntes Sandwich"}
        </Heading>
      </CardHeader>

      <CardBody pt={0}>
        <SimpleGrid gap={2} minChildWidth="5rem">
          {sandwich.ingredients.map((ingredient) => (
            <SandwichIngredient
              key={ingredient.id}
              id={ingredient.ingredients_id}
              quantity={ingredient.quantity}
            />
          ))}
        </SimpleGrid>
      </CardBody>

      <CardFooter
        bgGradient="linear(to-br, #F04F30, #AA4488)"
        borderBottomRadius="var(--chakra-radii-base)"
        color="whiteAlpha.900"
        display="flex"
        fontSize="0.875rem"
        fontWeight="600"
      >
        <SandwichEffect
          effect={sandwich.firstEffect}
          level={sandwich.firstEffectLevel}
          type={sandwich.firstEffectType}
        />
        <SandwichEffect
          effect={sandwich.secondEffect}
          level={sandwich.secondEffectLevel}
          type={sandwich.secondEffectType}
        />
        <SandwichEffect
          effect={sandwich.thirdEffect}
          level={sandwich.thirdEffectLevel}
          type={sandwich.thirdEffectType}
        />
      </CardFooter>
    </Card>
  );
};
