import { Box, Text } from "@chakra-ui/react";
import { categoryMock } from "../../../utils/categoryMock";
import type { Data } from "../../../utils/types";

interface Props {
  movie: Data | null;
}

const ContentDetails = ({ movie }: Props) => {
  return (
    <Box w="100%" h="100%">
      <Text color="font" fontSize="20px" my="10px" textAlign="center">
        {movie?.title}
      </Text>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={categoryMock.action.video} type="video/mp4" />
      </video>
    </Box>
  );
};

export default ContentDetails;
