module.exports = {
  siteMetadata: {
    title: `gatsby-starter-jim-workbench-betasite`,
    description: `root site for jim workbench`,
    author: `@jamiejohnsonkc`,
    menuLinks: [
      {
        name: "Platform",
        link: "/page-2",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
          {
            link: "/sub-2",
            name: "Sub 2",
            subSubMenu: [
              {
                link: "/subSub-1",
                name: "SubSub 1",
              },
              {
                link: "/subSub-2",
                name: "SubSub 2",
              },
            ],
          },
        ],
      },

      {
        name: "Pricing",
        link: "/page-3",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
        ],
      },
      {
        name: "Enterprise",
        link: "/page-4",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
        ],
      },
      {
        name: "Docs",
        link: "/page-5",
        subMenu: [],
      },
      {
        name: "Blog",
        link: "/page-6",
        subMenu: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        name: `svg`,
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["roboto", "roboto-slab"],
        },
        custom: {
          families: ["geomanistregular"],
          urls: ["./src/fonts/fonts.css"],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["300", "400", "500", "600", "700", "800", "900"],
    //           //subsets: ['latin']
    //           //text: 'Hello'
    //           //fontDisplay: 'swap',
    //           //strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //         {
    //           family: "Roboto Slab",
    //           variants: ["300", "400", "500", "600", "700", "800", "900"],
    //           //subsets: ['latin']
    //           //text: 'Hello'
    //           //fontDisplay: 'swap',
    //           //strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-jim-workbench-betasite`,
        short_name: `betasite`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
