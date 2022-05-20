require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: `page`,
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          blocks: {
            populate: {
              slides: {
                image: "*",
                images: "*",
                populate: "*",
              },
              featuredBlog: {
                populate: "*",
              },
              featurePoints: {
                populate: "*",
              },
              aboutBg: {
                populate: "*",
              },
            },
          },
        },
      },
    },
    {
      singularName: `nhs-price`,
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          nhsFeatures: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: `private-fee`,
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          servicesDetailed: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: `blog`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          category: {
            populate: "*",
          },
          author: {
            populate: "*",
          },
        },
      },
    },
  ],
  singleTypes: [`schedule`],
};

module.exports = {
  siteMetadata: {
    title: `S&B Dental`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Imran Kabir`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,400,500,600,700,800`,
          `catamaran\:100,200,300,400,500,600,700,800,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#ea580c`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
