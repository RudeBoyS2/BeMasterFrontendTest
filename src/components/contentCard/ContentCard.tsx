import { Box, Image } from "@chakra-ui/react";
import type { Data } from "../../../utils/types";

interface Props {
  movie: Data;
}

const ContentCard = ({ movie }: Props) => {
  return (
    <Box
      w="270px"
      h="165px"
      boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px"
      my={4}
    >
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
    </Box>
  );
};

export default ContentCard;
