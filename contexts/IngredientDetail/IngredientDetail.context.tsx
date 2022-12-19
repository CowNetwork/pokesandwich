import {
  Badge,
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { createContext, useState } from "react";
import { useSandwichIngredient } from "../../hooks/useSandwichIngredient/useSandwichIngredient";
import {
  IngredientDetailContextValue,
  IngredientDetailProviderProps,
} from "./types";

const initialValue: IngredientDetailContextValue = {
  hide: () => void 0,
  show: (_) => void 0,
};

export const IngredientDetailContext =
  createContext<IngredientDetailContextValue>(initialValue);

export const IngredientDetailProvider = ({
  children,
}: IngredientDetailProviderProps) => {
  const [ingredientId, setIngredientId] = useState<string | undefined>();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const ingredient = useSandwichIngredient(ingredientId);

  const hide = () => {
    setIngredientId(undefined);
    onClose();
  };

  const show = (id: string) => {
    setIngredientId(id);
    onOpen();
  };

  const value: IngredientDetailContextValue = {
    hide,
    show,
  };

  const { Provider } = IngredientDetailContext;

  return (
    <>
      <Provider value={value}>{children}</Provider>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "2xl" }}
      >
        <ModalOverlay />

        <ModalContent>
          {ingredient && (
            <>
              <ModalHeader alignItems="center" display="flex" gap={2}>
                <Text fontWeight={700}>{ingredient.translations[0].name}</Text>
              </ModalHeader>

              <ModalCloseButton />

              <ModalBody>
                <Flex>
                  <Image
                    alt={ingredient.translations[0].name}
                    flexShrink={0}
                    h="8rem"
                    mr={6}
                    src={ingredient.imageUrl}
                    title={ingredient.translations[0].name}
                  />

                  <Box flex={1}>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Text fontWeight="600">Typ</Text>
                      <Badge>{ingredient.type}</Badge>
                    </Flex>

                    <Flex alignItems="center" justifyContent="space-between">
                      <Text fontWeight="600">Standard-Anzahl</Text>
                      <Badge>{ingredient.defaultQuantity}</Badge>
                    </Flex>
                  </Box>
                </Flex>
              </ModalBody>

              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
