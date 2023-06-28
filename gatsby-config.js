require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `Parish Dental`,
    description: `Blazing fast modern site generator for React`,
    siteUrl: `https://parishdental.co.uk`,
    author: `Hassan Bhojani`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-postcss`,

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Icon-parish.svg",
      },
    },

    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "Price",
          "ApplicationFee",
          "Sku",
          "Subscription",
        ],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },

    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },

      __key: "images",
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `open sans\:300,400,500,600,700,800`,
    //       `catamaran\:100,200,300,400,500,600,700,800,900`, // you can also specify font weights and styles
    //     ],
    //     preconnect: true,
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Catamaran:100,200,300,400,500,600,700,800,900",
          "open sans:300,400,500,600,700,800",
        ],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#FF48A4`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-notifications`,
      // these are the default options
      options: {
        sound: `Glass`, // see ./assets/sounds for available sounds
        toast: true,
      },
    },
  ],
};
