import { createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  color: {
    brandLight: '',
    brand: '',
    brandDark: ''
  },
  font: {
    primary: '',
    secondary: ''
  }
});
