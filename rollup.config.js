import path from "path";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

const formats = [
    "esm",
    "cjs"
];

const defaultFormat = {
    name: pkg.name,
};

// See: https://rollupjs.org/guide/en/#configuration-files
export default {
    input: path.resolve(__dirname, "src/index.js"),
    output: formats.map(format => ({ ...defaultFormat, format, file: `dist/index.${format}.js` })),
    plugins: [babel({ babelHelpers: "bundled" })]
}
