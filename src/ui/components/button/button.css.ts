
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
  }
})
