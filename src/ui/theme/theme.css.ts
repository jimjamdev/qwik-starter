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
  },
  space: {
    none: '',
    small: '',
    medium: '',
    large: '',
  },
});
