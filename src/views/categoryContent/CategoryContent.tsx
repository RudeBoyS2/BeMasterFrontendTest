import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { fetchMoviesByCategory } from "../../../utils/requests";
import ContentCard from "../../components/contentCard/ContentCard";
import type { Data } from "../../../utils/types";
import ContentDetails from "../../components/contentDetails/ContentDetails";
import Navbar from "../../components/Navbar/Navbar";

const CategoryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { category } = useParams();
  const [movies, setMovies] = useState<Data[]>([]);
  const [modalData, setModalData] = useState<Data | null>(null);

  const handleOpen = (movieData: Data) => {
    setModalData(movieData);
    onOpen();
  };

  useEffect(() => {
    (async () => {
      const movies = await fetchMoviesByCategory(category);
      setMovies(movies);
    })();
  }, [category]);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" my="40px" color="font" fontFamily="body">
          {category?.toUpperCase()}
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {movies.map((movie) => (
            <>
              <Link onClick={() => handleOpen(movie)}>
                <ContentCard key={movie.id} movie={movie} />
              </Link>
            </>
          ))}
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent bg="black">
              <ContentDetails movie={modalData} />
            </ModalContent>
          </Modal>
        </Grid>
      </Container>
    </>
  );
};

export default CategoryContent;
