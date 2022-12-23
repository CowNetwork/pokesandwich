import {
  Box,
  Button,
  ButtonGroup,
  FormLabel,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Funnel } from "phosphor-react";
import { useContext, useState } from "react";
import useSWR from "swr";
import { FilterContext } from "../../contexts/Filter/Filter.context";
import { directus } from "../../data/directus";
import { translate } from "../../helpers/localization";
import { EffectType, PokemonType } from "../../types";

const fetchEffectTypes = async () =>
  directus
    .items("effect_types")
    .readByQuery({ fields: ["*", "translations.*"] });

const fetchPokemonTypes = async () =>
  directus
    .items("pokemon_types")
    .readByQuery({ fields: ["*", "translations.*"] });

export const Filter = () => {
  const { data: effectTypes } = useSWR("effect-types", fetchEffectTypes);
  const { data: pokemonTypes } = useSWR("pokemon-types", fetchPokemonTypes);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    effectLevel: contextEffectLevel,
    effectType: contextEffectType,
    pokemonType: contextPokemonType,
    reset,
    set,
  } = useContext(FilterContext);

  const [effectLevel, setEffectLevel] = useState(contextEffectLevel ?? 1);
  const [effectType, setEffectType] = useState(contextEffectType ?? "");
  const [pokemonType, setPokemonType] = useState<string | undefined>(
    contextPokemonType
  );

  const apply = () => {
    set(effectLevel, effectType, pokemonType ?? "normal");
    onClose();
  };

  const clear = () => {
    reset();

    setEffectLevel(1);
    setEffectType("");
    setPokemonType(undefined);

    onClose();
  };

  const isValid = !!effectType && !!pokemonType;

  return (
    <>
      <Button
        leftIcon={<Funnel size={18} weight="duotone" />}
        onClick={onOpen}
        px={3}
        variant="ghost"
      >
        Filter
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "2xl" }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader alignItems="center" display="flex" gap={2}>
            <Funnel size={20} weight="duotone" />
            <Text fontWeight={700}>Filter</Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <FormLabel>Effekttyp und Level</FormLabel>
            <SimpleGrid columns={2} gap={2}>
              <Select
                disabled={!effectTypes?.data || effectTypes.data?.length === 0}
                fontFamily="noto"
                onChange={(event) => setEffectType(event.target.value)}
                placeholder="Effektyp auswählen"
                value={effectType}
              >
                {effectTypes?.data &&
                  effectTypes.data.map((type: EffectType) => (
                    <option key={type.id} value={type.id}>
                      {translate()(type.translations).name}
                    </option>
                  ))}
              </Select>

              <NumberInput
                fontFamily="noto"
                max={3}
                min={1}
                onChange={(_, value) => setEffectLevel(value)}
                value={effectLevel}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </SimpleGrid>

            <FormLabel mt={4}>Pokémontyp</FormLabel>
            {pokemonTypes?.data && (
              <SimpleGrid gap={2} minChildWidth="3.875rem">
                {pokemonTypes.data.map((type: PokemonType) => (
                  <Tooltip
                    hasArrow
                    key={type.id}
                    label={translate()(type.translations).name}
                    placement="top"
                  >
                    <Box
                      alignItems="center"
                      bgGradient={
                        pokemonType === type.id
                          ? "linear(to-br, #F04F30, #AA4488)"
                          : "linear(to-br, blackAlpha.500, blackAlpha.600)"
                      }
                      borderRadius="md"
                      cursor="pointer"
                      display="flex"
                      justifyContent="center"
                      onClick={() => setPokemonType(type.id)}
                      sx={{ aspectRatio: "1/1" }}
                      w="100%"
                      _hover={{
                        backgroundImage:
                          pokemonType !== type.id
                            ? "linear-gradient(to bottom right, #F04F3080, #AA448880)"
                            : undefined,
                      }}
                    >
                      <Image
                        alt={translate()(type.translations).name}
                        h="2rem"
                        src={type.imageUrl}
                      />
                    </Box>
                  </Tooltip>
                ))}
              </SimpleGrid>
            )}
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={clear} variant="ghost">
                Zurücksetzen
              </Button>

              <Button colorScheme="cyan" disabled={!isValid} onClick={apply}>
                Anwenden
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
