import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";
import { imagetools } from 'vite-imagetools'
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";
export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      imagetools(),
      vanillaExtractPlugin(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
  };
});
