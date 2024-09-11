import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      beaver: "#B49082",
      cream: "#F3F3BA",
      deltaBlue: "#313D5A",
      lighterBlue: "#5A6AB8",
      red: "#C25757",
      richBlack: "#0D1321",
      white: "#FFFFFF",
      yinMnBlue: "#485696",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: '"acorn", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    heading:
      '"acorn", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
});

export default theme;
