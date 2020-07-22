const path = require("path")

module.exports = {
  stories: ["../../gatsby-starter-jim-workbench/src/**/*.stories.{js,jsx}"],

  addons: [
    "@storybook/addon-docs",
    // "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      // Config for js and jsx files
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              // use @babel/preset-react for JSX and env (instead of staged presets)
              require.resolve("@babel/preset-react"),
              require.resolve("@babel/preset-env"),
            ],
            plugins: [
              // use @babel/plugin-proposal-class-properties for class arrow functions
              require.resolve("@babel/plugin-proposal-class-properties"),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve("babel-plugin-remove-graphql-queries"),
              // use babel-plugin-react-docgen to ensure PropTables still appear
              require.resolve("babel-plugin-react-docgen"),
            ],
          },
        },
      ],
      resolve: {
        alias: {
          "@animation": path.resolve(
            __dirname,
            "../../../saas-spec/customStyles/exThemeUi/gradients.js"
          ),
          "@gradients": path.resolve(
            __dirname,
            "../../../saas-spec/customStyles/exThemeUi/gradients"
          ),
          "@colors": path.resolve(
            __dirname,
            "../../../saas-spec/customStyles/colors"
          ),
          "@palette": path.resolve(
            __dirname,
            "../../../saas-spec/customStyles/palette"
          ),
        },
      },
      exclude: [/node_modules\/(?!(gatsby)\/)/],
    })
    //* enable svg previews
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes("svg")) {
        const test = rule.test.toString().replace("svg|", "").replace(/\//g, "")
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    })
    //* enable svgr
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
