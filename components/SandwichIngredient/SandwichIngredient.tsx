import { Badge, Box, Image } from "@chakra-ui/react";
import { useSandwichIngredient } from "../../hooks/useSandwichIngredient/useSandwichIngredient";
import { SandwichIngredientProps } from "./types";

export const SandwichIngredient = ({
  id,
  quantity,
}: SandwichIngredientProps) => {
  const data = useSandwichIngredient(id);

  return (
    <Box
      backgroundColor="blackAlpha.50"
      borderRadius="sm"
      display="flex"
      justifyContent="center"
      pos="relative"
    >
      {data && (
        <Image
          alt={data.translations[0].name}
          h="5rem"
          src={data.imageUrl}
          title={data.translations[0].name}
        />
      )}
      <Badge bottom={0} colorScheme="cyan" left={0} pos="absolute">
        {quantity}×
      </Badge>
    </Box>
  );
};
