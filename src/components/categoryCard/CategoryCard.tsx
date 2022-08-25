import { Box, Heading, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  video: string;
  title: string;
  href: string;
}

const CategoryCard = ({ src, video, title, href }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <ChakraLink
      as={Link}
      position="relative"
      mt="25px"
      w="222px"
      h="125px"
      boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      to={href}
    >
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: isHovering ? "block" : "none",
        }}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={video} type="video/mp4" />
      </video>
      <Image w="100%" h="100%" objectFit="cover" src={src} />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="99"
        top="0"
      >
        <Heading
          fontSize="30px"
          color="font"
          position="relative"
          textShadow="2px 2px 3px black"
        >
          {title}
        </Heading>
      </Box>
    </ChakraLink>
  );
};

export default CategoryCard;
