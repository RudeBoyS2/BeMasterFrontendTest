import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Text,
  HStack,
  IconButton,
  Collapse,
  Hide,
  Image,
  Box,
  Icon,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { HiHome, HiOutlinePlus } from "react-icons/hi";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setDisplay(!display);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Stack
        height="72px"
        align="center"
        justify="space-between"
        direction="row"
        p={4}
      >
        <HStack spacing={10} pl={{ base: 4, md: 14 }} cursor="pointer">
          <Link to="/">
            <Image
              src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
              w="79px"
              h="48px"
            />
          </Link>
          <Flex
            as={Link}
            to="/"
            align="center"
            justify="center"
            gap={2}
            display={{ base: "none", md: "flex" }}
          >
            <Icon as={HiHome} height="17px" width="17px" color="font" />
            <Text color="font" fontFamily="body" fontSize="15px">
              INICIO
            </Text>
          </Flex>
          <Popover placement="right" trigger="hover">
            <PopoverTrigger>
              <Flex
                align="center"
                justify="center"
                gap={2}
                display={{ base: "none", md: "flex" }}
              >
                <Icon
                  as={HiOutlinePlus}
                  height="17px"
                  width="17px"
                  color="font"
                />
                <Text color="font" fontSize="15px">
                  CATEGORÍAS
                </Text>
              </Flex>
            </PopoverTrigger>
            <PopoverContent width="150px" border="none">
              <Stack
                direction="column"
                align="center"
                justify="center"
                bg="#0e1018"
                p={2}
              >
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/action"
                >
                  Acción
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/comedy"
                >
                  Comedia
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/horror"
                >
                  Horror
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/romance"
                >
                  Romance
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/scifi"
                >
                  Ciencia Ficción
                </ChakraLink>
              </Stack>
            </PopoverContent>
          </Popover>
        </HStack>
        <Stack
          direction="row"
          align="center"
          justify="center"
          display={{ base: "none", md: "flex" }}
          pr={3}
          cursor="pointer"
        >
          <Popover placement="right" trigger="hover">
            <PopoverTrigger>
              <Box h="45px" w="45px">
                <Image src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=96&format=png" />
              </Box>
            </PopoverTrigger>
            <PopoverContent width="150px" border="none">
              <Stack
                direction="column"
                align="center"
                justify="center"
                bg="#0e1018"
                p={2}
              >
                <ChakraLink color="font" fontSize="12px" outline="0">
                  Cuenta
                </ChakraLink>
                <ChakraLink
                  color="font"
                  fontSize="12px"
                  onClick={() => logOut()}
                >
                  Cerrar sesión
                </ChakraLink>
              </Stack>
            </PopoverContent>
          </Popover>
        </Stack>

        <IconButton
          aria-label="open menu"
          size="md"
          mr={2}
          _hover={{ bg: "none" }}
          _pressed={{ border: "none" }}
          icon={!display ? <HamburgerIcon /> : <CloseIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={handleMenuClick}
        />
      </Stack>
      <Collapse in={display}>
        <Hide above="md">
          <Flex
            as={Link}
            to="/"
            display="flex"
            align="center"
            justify="center"
            gap={2}
            bg="#0e1018"
            py={2}
          >
            <Icon as={HiHome} height="14px" width="14px" color="font" />
            <Text color="font" fontFamily="body" fontSize="12px">
              INICIO
            </Text>
          </Flex>
          <Popover placement="right" trigger="hover">
            <PopoverTrigger>
              <Flex
                display="flex"
                align="center"
                justify="center"
                gap={2}
                bg="#0e1018"
              >
                <Icon
                  as={HiOutlinePlus}
                  height="14px"
                  width="14px"
                  color="font"
                />
                <Text color="font" fontSize="12px">
                  CATEGORÍAS
                </Text>
              </Flex>
            </PopoverTrigger>
            <PopoverContent width="150px" border="none">
              <Stack
                direction="column"
                align="center"
                justify="center"
                bg="#0e1018"
                p={2}
              >
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/action"
                >
                  Acción
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/comedy"
                >
                  Comedia
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/horror"
                >
                  Horror
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/romance"
                >
                  Romance
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  color="font"
                  fontSize="12px"
                  outline="0"
                  to="/categories/scifi"
                >
                  Ciencia Ficción
                </ChakraLink>
              </Stack>
            </PopoverContent>
          </Popover>
          <Stack
            direction="column"
            align="center"
            justify="center"
            bg="#0e1018"
            p={2}
          >
            <ChakraLink color="font" fontSize="12px" outline="0">
              Cuenta
            </ChakraLink>
            <ChakraLink color="font" fontSize="12px" onClick={() => logOut()}>
              Cerrar sesión
            </ChakraLink>
          </Stack>
        </Hide>
      </Collapse>
    </>
  );
};

export default Navbar;
