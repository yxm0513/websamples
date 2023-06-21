import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
    build: {
  outDir: ".",
  lib: {
    entry: "main.js",
    formats: ["cjs"],
    fileName: "bundle"
  }
}
});
