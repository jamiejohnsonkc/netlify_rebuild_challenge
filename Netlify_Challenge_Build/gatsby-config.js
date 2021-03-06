module.exports = {
  pathPrefix: "/netlify_rebuild_challenge",
  siteMetadata: {
    title: `Netlify_Challenge_Build`,
    description: `NetlifyEdge.com rebuild project`,
    author: `@jamiejohnsonkc`,
    menuLinks: [
      {
        name: "Platform",
        link: "/",
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
        link: "/",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
        ],
      },

      {
        name: "Enterprise",
        link: "/",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
        ],
      },
      {
        name: "Jamstack",
        link: "/",
        subMenu: [
          {
            link: "/sub-1",
            name: "Sub 1",
          },
        ],
      },
      {
        name: "Docs",
        link: "/",
        subMenu: [],
      },
      {
        name: "Blog",
        link: "/",
        subMenu: [],
      },
      {
        name: "Contact Sales",
        link: "/contact",
        subMenu: [],
      },
      {
        name: "Log In",
        link: "/",
        subMenu: [],
      },
      {
        name: "Sign Up",
        link: "/",
        subMenu: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@base": "./src/components/base",
          "@navigation": "./src/components/navigation",
          "@layout": "./src/components/layout",
          "@templates": "./src/components/templates",
          "@svg": "./src/svg/assets",
          "@images": "./src/images",
          "@data": "./src/data",
          "@production": "./src/components/production",
          "@proLayout": "./src/components/production/proLayout",
          "@proHooks": "./src/components/production/proHooks",
          "@proNavigation": "./src/components/production/proNavigation",
          "@proPages": "./src/components/production/proPages",
          "@proSections": "./src/components/production/proSections",
          "@animation": "../customStyles/exThemeUi/animation",
          "@colors": "../customStyles/colors",
          "@palette": "../customStyles/palette",
          "@gradients": "../customStyles/exThemeUi/gradients",
        },
      },
      extensions: ["js", "jsx", "jpg", "svg", "png"],
    },
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
    {
      resolve: "gatsby-theme-style-guide",
      // options: {
      //   basePath: "./src/components/utilities/design-system",
      // },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `netlify_rebuild_challenge`,
        short_name: `Netlify Rebuild`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
