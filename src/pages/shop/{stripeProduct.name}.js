import React, { useState } from "react";
import Layout from "../../components/global/Layout";
import { Button } from "@material-tailwind/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Seo from "../../components/global/Seo";
import { FiChevronRight } from "react-icons/fi";
import useProductsQuery from "../../hooks/useProductsQuery";
import getStripe from "../../utils/stripe";
import { formatPrice } from "../../utils/functions";
import { customSlugify } from "../../common/utils";

const ProductSinglePage = ({ data }) => {
  const [count, setCount] = useState(1);
  const { prices } = useProductsQuery();

  const { name, images, metadata, default_price, localFiles, description, id } =
    data.stripeProduct;

  const price = prices.nodes.find((price) => price.id === default_price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1NMC6zLhiqOmfmWIPCogz2Vh", quantity: 2 },
        { price: "price_1NMC1XLhiqOmfmWIheknTAwF", quantity: 3 },
      ],
      billingAddressCollection: "required",
      shippingAddressCollection: {
        allowedCountries: ["GB"],
      },
      successUrl: `${window.location.origin}/payment-successfull/`,
      cancelUrl: `${window.location.origin}/shop/${customSlugify(name)}`,
    });

    if (error) {
      console.warn("Error:", error);
      // setLoading(false);
    }
  };

  return (
    <Layout>
      <Seo
        title={name}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <section className="flex justify-between container px-10 mx-auto mt-10">
        <GatsbyImage
          className="w-2/5"
          image={localFiles[0].childImageSharp.gatsbyImageData}
          alt={name}
        />

        <div className="w-3/5 px-10">
          <div className="mb-5 text-sm flex items-center">
            <Link to="/shop" className="mr-2 text-gray-500">
              Shop
            </Link>
            <FiChevronRight className="mr-2 text-gray-500" />

            <Link className="text-[#4f5859] font-semibold">{name}</Link>
          </div>
          <h2 className="text-3xl mb-5 uppercase font-medium text-[#4f5859]">
            {name}
          </h2>

          <p className="leading-8 lg:max-w-[400px] text-gray-500">
            With special whitening bristles which are clinically proven to
            remove up to 35% more stains than standard bristles. Contains 2 x
            brush heads.
          </p>

          <p className="my-2 text-2xl font-medium text-[#4f5859] mt-5">
            {formatPrice(price.unit_amount, price.currency)}
          </p>

          <div className="mt-7">
            <div className="flex mt-3 items-center">
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount((count) => count - 1);
                  }
                }}
                className="border border-r-0 px-2 text-2xl py-1 rounded-l text-gray-500"
              >
                -
              </button>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="border  py-2 w-20 text-center text-gray-600"
              />
              <button
                onClick={() => setCount((count) => count + 1)}
                className="border border-l-0 px-2 text-2xl py-1 text-gray-500"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-5">
            <Button
              onClick
              className="bg-[#263338] hover:shadow-[#263338]/20 w-64"
              size="lg"
            >
              Add to Basket
            </Button>
          </div>
        </div>
      </section>

      <section className="px-10 container mx-auto"></section>
    </Layout>
  );
};

export default ProductSinglePage;

export const query = graphql`
  query ($id: String!) {
    stripeProduct(id: { eq: $id }) {
      id
      name
      images
      description
      default_price
      metadata {
        category
      }
      localFiles {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
