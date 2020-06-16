module.exports = {
  siteMetadata: {
    title: `gatsby-starter-jim-workbench-betasite`,
    description: `root site for jim workbench`,
    author: `@jamiejohnsonkc`,
    menuLinks: [
      {
        name: "home",
        link: "/",
        // subMenu: [],
      },
      {
        name: "page2",
        link: "/page-2",
        subMenu: [
          // {
          //   link: "/sub-1",
          //   name: "Sub 1",
          // },
        ],
      },
    ],
  },
  plugins: [
    { resolve: `gatsby-theme-jimworkbench-betasite`, options: {} },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `betasite`,
        short_name: `betasite`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
