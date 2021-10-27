const path = require("path");
const path_aliases = require("./src/config/path_aliases");

const aliases = path_aliases('./src');
const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: resolvedAliases,
  },
};
