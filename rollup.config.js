import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  external: ["react", "react-dom", "react-hook-form", "tslib"],
  output: [
    { dir: "build/cjs", format: "cjs", exports: "named" },
    { dir: "build/min", format: "cjs", plugins: [terser()] },
    { dir: "build/esm", format: "esm" },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
      inject: true,
      extract: false,
      modules: false,
      config: {
        path: "./postcss.config.js",
      },
    }),
  ],
};
