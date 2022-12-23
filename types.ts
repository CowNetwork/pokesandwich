export type EffectType = {
  id: string;
  translations: {
    languages_code: string;
    name: string;
    abbreviation: string;
  }[];
};

export type Ingredient = {
  id: string;
  translations: {
    languages_id: string;
    name: string;
  }[];
  defaultQuantity: number;
  type: "condiment" | "topping";
  imageUrl: string;
  shoppableAt: {
    id: string;
    shop_id: Shop;
  }[];
  price: number;
};

export type PokemonType = {
  id: string;
  translations: {
    languages_code: string;
    name: string;
  }[];
  imageUrl: string;
};

export type Sandwich = {
  id: string;
  translations: {
    languages_code: string;
    name: string;
  }[];
  ingameId: number;
  ingredients: {
    id: number;
    ingredients_id: string;
    quantity: number;
  }[];
  firstEffect: string;
  firstEffectType: string;
  firstEffectLevel: number;
  secondEffect: string;
  secondEffectType: string;
  secondEffectLevel: number;
  thirdEffect: string;
  thirdEffectType: string;
  thirdEffectLevel: number;
};

export type Shop = {
  translations: {
    languages_code: string;
    name: string;
  }[];
};
