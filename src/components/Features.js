import React from "react";
import Schedule from "./Schedule";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_HOME_FEATURES {
            id
            featuredBlog {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              content {
                data {
                  content
                }
              }
              excerpt
              title
              slug
            }
            featurePoints {
              strapi_id
              featurePoint
            }
          }
        }
      }
    }
  `);

  const { featurePoints, featuredBlog } = data?.strapiPage?.blocks[1];
  const featuredBlogImage = getImage(featuredBlog.image.localFile);

  return (
    <section className="container mx-auto px-10 grid grid-cols-1  lg:grid-cols-3 my-32 gap-10">
      <div>
        <div className="max-h-[230px] overflow-hidden rounded mb-10">
          <GatsbyImage image={featuredBlogImage} alt={featuredBlog.title} />
        </div>
        <Link to={`/blogs/${featuredBlog.slug}`}>
          <h2 className="text-2xl font-medium mb-3 text-primary">
            {featuredBlog.title}
          </h2>
        </Link>
        <p className="text-neutral-500 ">{featuredBlog.excerpt}</p>
        <Link
          className="tracking-[.2em] text-sm uppercase mt-5 inline-block text-primary"
          to={`/blogs/${featuredBlog.slug}`}
        >
          Read More
        </Link>
      </div>
      <div>
        <div className="max-h-[230px] overflow-hidden rounded mb-10">
          <img
            className="overflow-hidden h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div>
          {featurePoints.map((point) => (
            <p
              key={point?.strapi_id}
              className="my-3 text-neutral-500 flex items-center"
            >
              <span className="text-secondary font-medium text-xl mr-3">+</span>
              {point.featurePoint}
            </p>
          ))}
        </div>
      </div>
      <Schedule />
    </section>
  );
};

export default Features;
