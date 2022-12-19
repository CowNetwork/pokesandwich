import { Badge, Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { IngredientDetailContext } from "../../contexts/IngredientDetail/IngredientDetail.context";
import { useSandwichIngredient } from "../../hooks/useSandwichIngredient/useSandwichIngredient";
import { SandwichIngredientProps } from "./types";

export const SandwichIngredient = ({
  id,
  quantity,
}: SandwichIngredientProps) => {
  const data = useSandwichIngredient(id);
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
      onClick={handleClick}
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
      <Badge
        bottom={0}
        colorScheme="cyan"
        left={0}
        pointerEvents="none"
        pos="absolute"
      >
        {quantity}×
      </Badge>
    </Box>
  );
};
