import { Flex, Container } from "@chakra-ui/react";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import { categoryMock } from "../../../utils/categoryMock";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" overflow="hidden">
        <ImageSlider />
        <Flex
          w="100%"
          px="50px"
          mt="40px"
          gap={8}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          align="center"
          justify="center"
        >
          {Object.values(categoryMock).map((category, index) => (
            <CategoryCard
              key={index}
              src={category.img}
              video={category.video}
              title={category.title}
              href={category.href}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default Home;
