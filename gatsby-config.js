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
        populate: {
          image: "*",
          images: "*",
          blocks: {
            populate: {
              image: "*",
              images: "*",
              slides: {
                image: "*",
                images: "*",
                populate: "*",
              },
              featureImage: {
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
              homeServiceBlock: {
                populate: {
                  serviceImage: {
                    populate: "*",
                  },
                },
              },
              testimonialBlock: {
                populate: {
                  testimonialAvatar: {
                    populate: "*",
                  },
                },
              },
              testimonialHeader: {
                populate: "*",
              },
              dentistHeader: {
                populate: "*",
              },
              homeFormImage: {
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
    {
      singularName: `category`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          blogs: {
            populate: "*",
          },
        },
      },
    },

    {
      singularName: `author`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          avatar: {
            populate: "*",
          },
        },
      },
    },

    {
      singularName: `dentist`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          dentistProfilePic: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: `service`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          serviceImage: {
            populate: "*",
          },
          serviceIcon: {
            populate: "*",
          },
        },
      },
    },
  ],
  singleTypes: [
    `schedule`,
    {
      singularName: "global",
      queryParams: {
        image: "*",
        images: "*",
        populate: {
          footer: {
            populate: "*",
          },
          contactInfo: {
            populate: "*",
          },
          logo: {
            populate: "*",
          },
          socials: {
            populate: "*",
          },
        },
      },
    },
  ],
};

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
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Icon-parish.svg",
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
        color: `#ea580c`,
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
