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
  ModalOverlay,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CircleWavyQuestion } from "phosphor-react";
import { createContext, useState } from "react";
import { translate, translateIngredientType } from "../../helpers/localization";
import { useIngredientDetail } from "../../hooks/useIngredientDetail/useIngredientDetail";
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

  const ingredient = useIngredientDetail(ingredientId);

  const ingredientName =
    ingredient &&
    translate("de-DE", "languages_id")(ingredient.translations).name;

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
        size={{ base: "full", md: "md" }}
      >
        <ModalOverlay />

        <ModalContent>
          {ingredient && (
            <>
              <ModalCloseButton />

              <ModalBody>
                <Image
                  alt={ingredientName}
                  flexShrink={0}
                  h="6rem"
                  mx="auto"
                  my={8}
                  src={ingredient.imageUrl}
                  title={ingredientName}
                />

                <Text fontSize="2xl" fontWeight={700}>
                  {ingredientName}
                </Text>

                <Flex gap={2}>
                  <Badge colorScheme="cyan">
                    {translateIngredientType(ingredient.type)}
                  </Badge>
                  <Badge colorScheme="cyan">
                    {`${ingredient.defaultQuantity} Stück${
                      ingredient.defaultQuantity > 1 ? "e" : ""
                    }`}
                  </Badge>
                </Flex>

                {ingredient.shoppableAt.length > 0 ? (
                  <>
                    <Text mt={6}>Im Angebot bei</Text>
                    <Flex flexDir="column" gap={2} mt={2}>
                      {ingredient.shoppableAt.map((shop) => (
                        <Box
                          bgGradient="linear(to-br, #F04F30, #AA4488)"
                          borderRadius="md"
                          color="whiteAlpha.900"
                          fontWeight={700}
                          key={shop.id}
                          p={3}
                        >
                          {translate()(shop.shop_id.translations).name}
                        </Box>
                      ))}
                    </Flex>
                  </>
                ) : (
                  <Flex
                    alignItems="center"
                    borderRadius="md"
                    gap={3}
                    my={6}
                    p={3}
                    shadow="md"
                  >
                    <CircleWavyQuestion size={32} weight="duotone" />
                    <Text fontFamily="noto" fontSize="sm" fontWeight={500}>
                      Für diese Zutat haben wir leiner noch keine Angebote
                      hinterlegen können
                    </Text>
                  </Flex>
                )}
              </ModalBody>

              {ingredient.price && (
                <ModalFooter
                  alignItems="center"
                  display="flex"
                  gap={2}
                  justifyContent="center"
                >
                  <Text>Kostet</Text>

                  <Tag borderRadius="full" size="lg">
                    <TagLabel>{ingredient.price}</TagLabel>
                  </Tag>

                  <Flex alignItems="center">
                    <svg
                      height="12"
                      viewBox="0 0 53 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.1 0C36.8333 0 40.1333 0.866667 43 2.6C45.8667 4.26667 48.1333 6.6 49.8 9.6C51.4667 12.6 52.3 16.0333 52.3 19.9C52.3 23.7667 51.4667 27.2667 49.8 30.4C48.1333 33.4667 45.8667 35.9 43 37.7C40.1333 39.5 36.8333 40.4 33.1 40.4H11.9L12.4 39.4V67C12.4 67.8 12.1 68.5 11.5 69.1C10.9 69.7 10.2 70 9.4 70C8.46667 70 7.73333 69.7 7.2 69.1C6.66667 68.5 6.4 67.8 6.4 67V3C6.4 2.2 6.7 1.5 7.3 0.9C7.9 0.299999 8.6 0 9.4 0H33.1ZM33.1 34.6C35.7 34.6 37.9667 33.9667 39.9 32.7C41.8333 31.3667 43.3333 29.6 44.4 27.4C45.5333 25.1333 46.1 22.6333 46.1 19.9C46.1 17.1667 45.5333 14.7667 44.4 12.7C43.3333 10.5667 41.8333 8.9 39.9 7.7C37.9667 6.5 35.7 5.9 33.1 5.9H11.9L12.4 5V35.2L11.8 34.6H33.1Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M0 48C0 46.3431 1.34315 45 3 45H32C33.6569 45 35 46.3431 35 48C35 49.6569 33.6569 51 32 51H3C1.34315 51 0 49.6569 0 48Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M0 58C0 56.3431 1.34315 55 3 55H32C33.6569 55 35 56.3431 35 58C35 59.6569 33.6569 61 32 61H3C1.34315 61 0 59.6569 0 58Z"
                        fill="#1A202C"
                      />
                    </svg>
                    <Text>/LP</Text>
                  </Flex>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
