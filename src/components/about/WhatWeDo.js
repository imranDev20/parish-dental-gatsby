import React from "react";
import Masonry from "react-masonry-css";
import "../../styles/masonry.css";
import { graphql, useStaticQuery } from "gatsby";
import ImageZoom from "./ImageZoom";
import SectionHeader from "../global/SectionHeader";

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      contentfulPages(title: { eq: "About" }) {
        id
        blocks {
          ... on ContentfulGallery {
            smallImages: images {
              gatsbyImageData(width: 400, placeholder: BLURRED)
              title
              contentful_id
            }
            fullsizeImage: images {
              gatsbyImageData(
                placeholder: BLURRED
                layout: FULL_WIDTH
                width: 1200
              )
              title
              contentful_id
            }
          }
        }
      }
    }
  `);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const galleryImages = data?.contentfulPages?.blocks[1]?.fullsizeImage;
  // const galleryImagesFull = data?.contentfulPages?.blocks[1]?.fullsizeImage;

  return (
    <section className="w-full my-24">
      <SectionHeader subTitle="What We Do" mainTitle="Some of Our Works" />
      <div className="container mx-auto px-10 mt-16">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryImages.map((image) => (
            <ImageZoom
              key={image?.contentful_id}
              image={image?.gatsbyImageData}
              alt={image?.title}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default WhatWeDo;
