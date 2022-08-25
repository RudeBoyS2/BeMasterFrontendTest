import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box as={Slider} mt="20px" mx="50px" {...settings}>
      <Box h="300px">
        <Image src="assets/slider1.jpg" h="300px" w="100%" borderRadius="4px" />
      </Box>
      <Box h="300px">
        <Image src="assets/slider2.jpg" h="300px" w="100%" borderRadius="4px" />
      </Box>
      <Box h="300px">
        <Image src="assets/slider3.jpg" h="300px" w="100%" borderRadius="4px" />
      </Box>
    </Box>
  );
};

export default ImageSlider;
