import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { FiChevronRight } from "react-icons/fi";
import useProductsQuery from "../../hooks/useProductsQuery";
import { formatPrice } from "../../utils/functions";
import { CartContext } from "../../context/CartContext";
import { BsCheck } from "react-icons/bs";
import DentalAppointmentIcon from "../../images/icons/dental-appointment.svg";
import CartIcon from "../../images/icons/cart.svg";
import TeethIcon from "../../images/icons/teeth.svg";
import WhiteTeethIcon from "../../images/icons/white-teeth.svg";
import ClinicIcon from "../../images/icons/clinic.svg";
import DynamicSeo from "../../components/global/DynamicSeo";

const ProductSinglePage = ({ data }) => {
  const [count, setCount] = useState(1);
  const { prices } = useProductsQuery();
  const { cart, handleAddToCart } = useContext(CartContext);

  const { name, metadata, default_price, localFiles, description, id } =
    data?.stripeProduct;

  const price = prices.nodes.find((price) => price.id === default_price);

  useEffect(() => {
    const itemInCart = cart.find((cartItem) => cartItem.name === name);

    if (itemInCart) {
      setCount(itemInCart.quantity);
    }
  }, []);

  const product = {
    name,
    price: price.unit_amount / 100,
    priceId: default_price,
    quantity: count,
    image: localFiles ? localFiles[0]?.childImageSharp.gatsbyImageData : "",
  };

  const descToPoints = description?.split(".");

  const steps = [
    { id: 1, name: "Purchase Pro Whitening online", icon: CartIcon },
    {
      id: 2,
      name: "Call with consultant to book your dentist appointment",
      icon: DentalAppointmentIcon,
    },
    {
      id: 3,
      name: "Visit Parish Dental Leeds - Dentist Check-up",
      icon: ClinicIcon,
    },
    {
      id: 4,
      name: "Pick up full pro whitening kit & trays from your dentist",
      icon: TeethIcon,
    },
    {
      id: 5,
      name: "Start whitening at home with results in as little as 48 hours",
      icon: WhiteTeethIcon,
    },
  ];

  return (
    <Layout>
      {/* <Seo
        title={name}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      /> */}
      <section className="flex flex-col lg:flex-row justify-between container px-10 mx-auto mt-10">
        <GatsbyImage
          className="w-full lg:w-2/5"
          image={localFiles && localFiles[0]?.childImageSharp.gatsbyImageData}
          alt={name}
        />

        <div className="w-full lg:w-3/5 px-10">
          <div className="mb-5 text-sm flex items-center">
            <Link to="/shop" className="mr-2 text-gray-600">
              Shop
            </Link>
            <FiChevronRight className="mr-2 text-gray-600" />

            <Link className="text-[#4f5859] font-semibold">{name}</Link>
          </div>
          <h2 className="text-3xl mb-5 uppercase font-medium text-[#4f5859]">
            {name}
          </h2>

          <p className="my-4 text-gray-600 text-sm">
            Category:{" "}
            <span className="text-[#4f5859] font-medium">
              {metadata.category}
            </span>
          </p>

          <p className="leading-8 lg:max-w-[400px] text-gray-600">
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
                className="border border-r-0 w-8 text-2xl py-1 rounded-l text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={count}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    setCount(parseInt(e.target.value));
                  }

                  console.log(e.target.value);
                }}
                className="border  py-2 w-20 text-center text-gray-600"
              />
              <button
                onClick={() => setCount((count) => count + 1)}
                className="border border-l-0 w-8 text-2xl py-1 text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-5">
            <Button
              disabled={count === 0}
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
            <li className="text-gray-600 py-1 flex items-center" key={point}>
              <BsCheck className="mr-2 text-[#4f5859]" /> {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10 bg-[#f3f3f3] py-10">
        <div className=" px-10 container mx-auto">
          <h2 className="text-[#4f5859] text-4xl text-center font-semibold mb-5 leading-[1.2]">
            Free Dental Checkup with X-Rays, Scale and Polish (worth £95) <br />
            <span>
              When you purchase Home or In office teeth whitening
            </span>{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 max-w-[800px] mx-auto">
            <Card className="mt-2 flex-col flex justify-between">
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center"
                >
                  Home Teeth Whitening
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 flex flex-col items-center">
                <p className="text-2xl font-bold mb-4">£350</p>
                <Link to="/shop">
                  <Button>Buy Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="mt-2">
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center"
                >
                  In Office & Home Teeth Whitening
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 flex flex-col items-center">
                <p className="text-2xl font-bold mb-4">£550</p>
                <Link to="/shop">
                  <Button>Buy Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-10 my-28">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
          {steps.map((step) => (
            <div className="flex flex-col items-center" key={step.id}>
              <img
                src={step.icon}
                alt={step.name}
                width={70}
                className="mb-5 text-primary"
              />
              <p className="text-center text-gray-600 leading-6">{step.name}</p>
            </div>
          ))}
        </div>
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
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export const Head = ({ data }) => (
  <DynamicSeo
    title={data.stripeProduct.name}
    description={data.stripeProduct.metadata.summary}
  />
);
