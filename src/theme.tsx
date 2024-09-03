import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      beaver: "#B49082",
      cream: "#F3F3BA",
      deltaBlue: "#313D5A",
      red: "#901B1B",
      white: "#FFFFFF",
      yinMnBlue: "#485696",
      richBlack: "#0D1321",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
