import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  primary: {
    dark: "hsl(207, 26%, 17%)",
    light: "hsl(0, 0%, 98%)",
  },
  secondary: {
    dark: "hsl(209, 23%, 22%)",
    light: "hsl(0, 0%, 100%)",
  },
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode(colors.primary.light,colors.primary.dark)(props),
    }
  })
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors, styles });

export default theme;