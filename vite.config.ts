import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";

(String as any).prototype.toUppercase = String.prototype.toUpperCase;
export default defineConfig(() => {
  (String as any).prototype.toUppercase = String.prototype.toUpperCase;
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      vanillaExtractPlugin(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
  };
});
