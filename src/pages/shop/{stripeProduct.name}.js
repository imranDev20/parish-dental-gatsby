import React, { useContext, useEffect, useState } from "react";
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
import { CartContext } from "../../context/CartContext";
import { BsCheck } from "react-icons/bs";

const ProductSinglePage = ({ data }) => {
  const [count, setCount] = useState(1);
  const { prices } = useProductsQuery();
  const { cart, handleAddToCart } = useContext(CartContext);

  const { name, images, metadata, default_price, localFiles, description, id } =
    data.stripeProduct;

  const price = prices.nodes.find((price) => price.id === default_price);

  useEffect(() => {
    const itemInCart = cart.find((cartItem) => cartItem.name === name);
    if (itemInCart) {
      setCount(itemInCart.quantity);
    }
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // setLoading(true);

  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: "payment",
  //     lineItems: [
  //       { price: "price_1NMC6zLhiqOmfmWIPCogz2Vh", quantity: 2 },
  //       { price: "price_1NMC1XLhiqOmfmWIheknTAwF", quantity: 3 },
  //     ],
  //     billingAddressCollection: "required",
  //     shippingAddressCollection: {
  //       allowedCountries: ["GB"],
  //     },
  //     successUrl: `${window.location.origin}/payment-successfull/`,
  //     cancelUrl: `${window.location.origin}/shop/`,
  //   });

  //   if (error) {
  //     console.warn("Error:", error);
  //     // setLoading(false);
  //   }
  // };

  const product = {
    name,
    price: price.unit_amount / 100,
    priceId: default_price,
    quantity: count,
    image: localFiles[0].childImageSharp.gatsbyImageData,
  };

  console.log(cart);

  const descToPoints = description?.split(".");

  // console.log(description);

  console.log(descToPoints);

  return (
    <Layout>
      <Seo
        title={name}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <section className="flex flex-col lg:flex-row justify-between container px-10 mx-auto mt-10">
        <GatsbyImage
          className="w-full lg:w-2/5"
          image={localFiles[0].childImageSharp.gatsbyImageData}
          alt={name}
        />

        <div className="w-full lg:w-3/5 px-10">
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

          <p className="my-4 text-gray-500 text-sm">
            Category:{" "}
            <span className="text-[#4f5859]">{metadata.category}</span>
          </p>

          <p className="leading-8 lg:max-w-[400px] text-gray-500">
            {metadata?.summary}
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
                onChange={(e) => setCount(parseInt(e.target.value))}
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
              onClick={() => handleAddToCart(product, count)}
              className="bg-[#263338] hover:shadow-[#263338]/20 w-64"
              size="lg"
            >
              Add to Basket
            </Button>
          </div>
        </div>
      </section>

      <section className="px-10 container mx-auto my-20">
        <h3 className="text-[#4f5859] font-medium mb-3 text-xl">Description</h3>
        <hr className="border mb-3" />

        <ul>
          {descToPoints?.map((point) => (
            <li className="text-gray-600 py-1 flex items-center">
              <BsCheck className="mr-2 text-[#4f5859]" /> {point}
            </li>
          ))}
        </ul>
      </section>
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
        summary
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
