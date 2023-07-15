import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { customSlugify } from "../../../common/utils";
import { Button } from "@material-tailwind/react";

const Range = () => {
  const { products } = useStaticQuery(graphql`
    query RangeQuery {
      products: allContentfulProducts(limit: 4) {
        nodes {
          title
          images {
            gatsbyImage(width: 400, placeholder: BLURRED, aspectRatio: 1.2)
          }
        }
      }
    }
  `);

  console.log(products.nodes);
  return (
    <section className="bg-[#F3F3F3] relative pb-56">
      <div className="px-10 container mx-auto py-10">
        <h2 className="text-[#4f5859] text-4xl text-center font-semibold mb-10">
          Shop the Range
        </h2>
        <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-5">
          {products.nodes.map((item, index) => (
            <Link
              key={index}
              to={"/shop/" + customSlugify(item.title)}
              className=" hover:scale-[.98] transition-all duration-500"
            >
              <div className="bg-white rounded overflow-hidden p-5 border">
                <GatsbyImage
                  image={item.images[0].gatsbyImage}
                  alt={item.title}
                />
              </div>
              <h4 className="mt-3 uppercase font-semibold text-[#4f5859]">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>

        <Link to="/shop" className="flex justify-center mt-10">
          <Button className="bg-[#263338] hover:shadow-[#263338]/20" size="lg">
            View Our Full Range
          </Button>
        </Link>
      </div>

      <svg
        className="h-[300px] absolute -bottom-[120px] right-0 z-10 banner-triangle "
        style={{ transform: "rotateX(135deg)" }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </section>
  );
};

export default Range;
