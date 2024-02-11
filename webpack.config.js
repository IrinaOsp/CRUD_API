// Generated using webpack-cli https://github.com/webpack/webpack-cli

import { resolve as _resolve } from "path";

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  output: {
    path: _resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};

export default () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
