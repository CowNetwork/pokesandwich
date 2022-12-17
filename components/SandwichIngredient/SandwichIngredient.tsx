import { Image } from "@chakra-ui/react";
import { useSandwichIngredient } from "../../hooks/useSandwichIngredient/useSandwichIngredient";
import { SandwichIngredientProps } from "./types";

export const SandwichIngredient = ({
  id,
  quantity,
}: SandwichIngredientProps) => {
  const data = useSandwichIngredient(id);

  return (
    <div>
      {data && <Image alt={data.translations[0].name} src={data.imageUrl} />} x
      {quantity}
    </div>
  );
};
