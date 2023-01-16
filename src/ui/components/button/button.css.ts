
import { theme } from "~/ui/theme/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonCss = recipe({
  base: {
    backgroundColor: theme.color.brand,
    color: 'white',
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: theme.color.brandDark,
    },
  },
  variants: {
    color: {
      primary: {
        color: 'white',
        backgroundColor: theme.color.brand,
      },
      secondary: {
        backgroundColor: theme.color.brandLight,
        color: 'black',
      },
    },
    size: {
      small: {
        padding: "5px 10px",
      },
      medium: {
        padding: "10px 20px",
      },
      large: {
        padding: "15px 30px",
      }
    },
  },
})

export type ButtonRecipeProps = typeof buttonCss;
