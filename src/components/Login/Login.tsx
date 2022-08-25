import axios from "axios";
import {
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Container,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const LOGIN_API_URL = import.meta.env.VITE_LOGIN_API_URL;

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(LOGIN_API_URL, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      // setAuth({ email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/", { replace: true });

      // Timeout for mimicking the time it takes for a response to be sent from a server.
      // setTimeout(() => {
      //   setSuccess(true);
      // }, 2000);
    } catch (err: any) {
      if (err.response.status === 401) {
        alert(err);
        // setLoading(false);
      }
    }
  };

  return (
    <Container maxW="100vw" minH="100vh" display="flex">
      <Flex
        justify="center"
        align="center"
        flexDirection="column"
        w="400px"
        m="auto"
        gap={8}
      >
        <Image
          src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
          w="172px"
          h="104px"
        />
        <FormControl>
          <FormLabel
            fontWeight="bold"
            fontSize="lg"
            htmlFor="username"
            color="font"
            mb={4}
          >
            Nombre de usuario
          </FormLabel>
          <Input
            name="username"
            type="text"
            variant="outline"
            focusBorderColor="primary"
            h="50px"
            bg="inputBg"
            border="none"
            color="font"
            placeholder="Correo electrónico"
            _placeholder={{ color: "inputColor" }}
            // borderColor={errors.username && touched.username && "red"}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.username}
          />
          {/* {errors.username && touched.username && (
                <Text textAlign="left" color="error" pl={1}>
                  {errors.username}
                </Text>
              )} */}
        </FormControl>
        <FormControl>
          <FormLabel
            fontWeight="bold"
            fontSize="lg"
            htmlFor="password"
            color="font"
            mb={4}
          >
            Contraseña
          </FormLabel>
          <Input
            name="password"
            type="password"
            bg="inputBg"
            border="none"
            color="font"
            placeholder="Contraseña"
            _placeholder={{ color: "inputColor" }}
            h="50px"
            // borderColor={errors.password && touched.password && "red"}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.password}
          />
          {/* {errors.password && touched.password && (
                <Text textAlign="left" color="error" pl={1}>
                  {errors.password}
                </Text>
              )} */}
        </FormControl>
        <Button
          onClick={handleSubmit}
          type="submit"
          h="50px"
          bg="buttonBg"
          width="full"
          color="font"
          _hover={{ bg: "buttonBgHover" }}
          _active={{
            bg: "buttonBgActive",
            color: "font",
          }}
        >
          Continuar
        </Button>
      </Flex>
    </Container>
  );
};

export default Login;
