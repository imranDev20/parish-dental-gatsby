import React, { useState } from "react";
import Layout from "../../components/global/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";

import { customSlugify } from "../../common/utils";
import { GatsbyImage } from "gatsby-plugin-image";
import useProductsQuery from "../../hooks/useProductsQuery";

const ShopPage = () => {
  const [selected, setSelected] = useState("");
  const { products, prices } = useProductsQuery();

  const uniqueCategory = products.nodes?.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((t) => t.metadata.category === obj.metadata.category)
  );

  return (
    <Layout>
      <div className="container mx-auto px-10 flex flex-col lg:flex-row my-16">
        <div className=" w-full lg:w-1/6">
          <div className="border-b">
            <button
              className={`py-3 text-gray-600 uppercase ${
                selected === "" ? "font-semibold" : ""
              } `}
              onClick={() => setSelected("")}
            >
              All Products
            </button>
          </div>
          {uniqueCategory.map((item, index) => (
            <div className="border-b" key={index}>
              <button
                className={`py-3 text-gray-600 uppercase transition-all ${
                  selected === item.metadata.category ? "font-semibold" : ""
                }`}
                onClick={() => setSelected(item.metadata.category)}
              >
                {item.metadata.category}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-5/6  px-10 mt-16 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {products.nodes
              .filter((val) =>
                selected === ""
                  ? val.metadata.category
                  : val.metadata.category === selected
              )
              .map((product, index) => {
                const price = prices.nodes.find(
                  (price) => price.id === product.default_price
                );
                return (
                  <Link to={customSlugify(product.name)} key={index}>
                    <div>
                      <GatsbyImage
                        image={
                          product.localFiles[0].childImageSharp.gatsbyImageData
                        }
                        alt={product.name}
                      />
                    </div>
                    <h3 className="text-center uppercase tracking-wide text-[#4f5859] font-medium mt-5">
                      {product.name}
                    </h3>
                    <p className="text-center font-light mt-2">
                      {price ? `£${price.unit_amount / 100}` : ""}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
