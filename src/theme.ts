import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
      },
      body: {
        bg: "#1A1D29",
      },
    },
  },
  colors: {
    font: "rgb(249, 249, 249)",
    buttonBg: "#0072D2",
    buttonBgHover: "#0082f0",
    buttonBgActive: "#0061b3",
    inputBg: "#30333E",
    inputColor: "#9B9CA0",
    profileMenuColor: "#06070A",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: "",
      },
    },
  },
});
