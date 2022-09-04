import axios from "axios";
import {
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Container,
  Heading,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

const LOGIN_API_URL = import.meta.env.VITE_LOGIN_API_URL;

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Ingresa un nombre de usuario"),
    password: Yup.string().required("Ingresa una contraseña"),
  });

  const onSubmit = () => {
    axios
      .get(LOGIN_API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          navigate("/", { replace: true });
        } else {
          alert();
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  if (localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <Container maxW="100vw" minH="100vh" display="flex" px={0}>
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
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" alignItems="center" w="400px" gap={8}>
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
                borderColor={errors.username && touched.username ? "red" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                h="50px"
                bg="inputBg"
                color="font"
                placeholder="Correo electrónico"
                _placeholder={{ color: "inputColor" }}
              />
              {errors.username && touched.username && (
                <Heading textAlign="left" color="red" size="sm">
                  {errors.username}
                </Heading>
              )}
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
                color="font"
                placeholder="Contraseña"
                _placeholder={{ color: "inputColor" }}
                h="50px"
                borderColor={errors.password && touched.password ? "red" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Heading textAlign="left" color="red" size="sm">
                  {errors.password}
                </Heading>
              )}
            </FormControl>
            <Button
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
        </form>
      </Flex>
    </Container>
  );
};

export default Login;
