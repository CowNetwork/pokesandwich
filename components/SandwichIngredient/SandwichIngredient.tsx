import { Badge, Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { IngredientDetailContext } from "../../contexts/IngredientDetail/IngredientDetail.context";
import { translate } from "../../helpers/localization";
import { useSandwichIngredient } from "../../hooks/useSandwichIngredient/useSandwichIngredient";
import { SandwichIngredientProps } from "./types";

export const SandwichIngredient = ({
  id,
  quantity,
}: SandwichIngredientProps) => {
  const ingredient = useSandwichIngredient(id);

  const ingredientName =
    ingredient &&
    translate("de-DE", "languages_id")(ingredient.translations).name;

  const { show } = useContext(IngredientDetailContext);

  const handleClick = () => {
    show(id);
  };

  return (
    <Box
      backgroundColor="blackAlpha.50"
      borderRadius="sm"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      minH="5rem"
      onClick={handleClick}
      pos="relative"
    >
      {ingredient && (
        <Image
          alt={ingredientName}
          h="5rem"
          src={ingredient.imageUrl}
          title={ingredientName}
        />
      )}
      <Badge
        bottom={0}
        colorScheme="cyan"
        left={0}
        pointerEvents="none"
        pos="absolute"
      >
        {quantity ?? (ingredient && ingredient.defaultQuantity) ?? "?"}×
      </Badge>
    </Box>
  );
};
