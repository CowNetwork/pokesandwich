import { useContext } from "react";
import { FilterContext } from "../../contexts/Filter/Filter.context";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterContext provider");
  }

  return context;
};