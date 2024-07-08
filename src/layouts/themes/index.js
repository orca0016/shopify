import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
export const darkTheme = createTheme({
  direction: "ltr",
  palette: {
    mode: "dark",
    light: createColor("#ffff"),
    "grey": {
      main: "#262626",
    },
    primary: {
      main: "#00FCC6",
    },
    secondary: {
      main: "#7f00ff",
    },
    common: {
      main: "#0d0d0d",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
    button: {
      textTransform: 'none'
    }
  },
  
});
