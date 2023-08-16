/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const federationConfig = {
  name: "remote",
  filename: "static/chunks/remoteEntry.js",
  shared: {},
  exposes: {
    "App": "src/remote-app.tsx",
  },
  // extraOptions: { exposePages: true }
};

module.exports = {
  webpack5: true,
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },

  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(new NextFederationPlugin(federationConfig));
    };
    return config;
  },
};
