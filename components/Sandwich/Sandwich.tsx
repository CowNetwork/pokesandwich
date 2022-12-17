import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  chakra,
  Heading,
} from "@chakra-ui/react";
import { SandwichEffect } from "../SandwichEffect/SandwichEffect";
import { SandwichIngredient } from "../SandwichIngredient/SandwichIngredient";
import { SandwichProps } from "./types";

export const Sandwich = ({ sandwich }: SandwichProps) => {
  return (
    <Card size="sm">
      <CardHeader>
        <Heading size="md">
          <chakra.span fontWeight={300}>#S0001</chakra.span> {sandwich.id}
        </Heading>
      </CardHeader>

      <CardBody>
        {sandwich.ingredients.map((ingredient) => (
          <SandwichIngredient
            key={ingredient.id}
            id={ingredient.ingredients_id}
            quantity={ingredient.quantity}
          />
        ))}
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
