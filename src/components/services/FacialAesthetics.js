import React from "react";
import PageHeader from "../global/PageHeader";
import { StaticImage } from "gatsby-plugin-image";
import Form from "../global/Form";
import BotoxIcon from "../../images/icons/botox.svg";
import DermaFillerIcon from "../../images/icons/derma-filler.svg";
import ChemicalPeelIcon from "../../images/icons/chemical-peels.svg";
import LipEnhanceIcon from "../../images/icons/lip-enhance.svg";
import SkinRejuvenIcon from "../../images/icons/skin-rejuvenation.svg";
import MicroneedlingIcon from "../../images/icons/microneedling.svg";
import HomeBanner from "../home/HomeBanner";
import { LinkButton } from "../global/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "gatsby";

const FacialAesthetics = () => {
  const aesthetics = [
    {
      id: 1,
      name: "Botox",
      icon: BotoxIcon,
      description:
        "Botox is a non-surgical treatment that smooths out wrinkles and fine lines, giving you a more youthful and rejuvenated appearance. Our team of experts will work with you to determine the best course of treatment to achieve the results you want.",
    },
    {
      id: 2,
      name: "Dermal fillers",
      icon: DermaFillerIcon,
      description:
        "Dermal fillers are used to add volume and fullness to areas of the face that have lost volume due to aging or other factors. Our skilled practitioners use the latest techniques and products to deliver natural-looking results that can last for several months",
    },
    {
      id: 3,
      name: "Chemical peels",
      icon: ChemicalPeelIcon,
      description:
        "Chemical peels are an effective way to rejuvenate the skin by removing dead skin cells and promoting the growth of new, healthy skin. We offer a range of chemical peels to suit all skin types and conditions.",
    },
    {
      id: 4,
      name: "Lip enhancement",
      icon: LipEnhanceIcon,
      description:
        "Our lip enhancement treatments are designed to add volume and definition to your lips, giving you a fuller and more youthful appearance. Our team of experts will work with you to determine the best treatment to achieve the results you want.",
    },
    {
      id: 5,
      name: "Skin Rejuvenation",
      icon: SkinRejuvenIcon,
      description:
        "Our skin rejuvenation treatments are designed to reduce the appearance of fine lines, wrinkles, and other signs of aging, leaving your skin looking smoother, younger, and more radiant.",
    },
    {
      id: 6,
      name: "Microneedling",
      icon: MicroneedlingIcon,
      description:
        "We offer microneedling as a safe and effective treatment to help improve the overall health and appearance of your skin. Our experienced clinicians use the latest microneedling technology to create a comfortable and relaxing treatment experience for our patients.",
    },
  ];
  return (
    <div>
      <PageHeader pageTitle="Facial Aesthetics" />
      <section className="bg-gradient-to-b from-backgroundSecondary to-white py-10">
        <div
          className={`container mx-auto flex flex-col lg:flex-row px-10 items-start relative mb-20`}
        >
          <div className="w-full lg:w-2/3  pr-0 lg:pr-7">
            <StaticImage
              src="../../images/anti-aging.jpeg"
              layout="fullWidth"
              aspectRatio={9 / 11}
              placeholder="blurred"
              imgClassName="rounded"
              className="rounded-lg"
            />
            <h2 className="text-4xl text-primary font-semibold mt-10 mb-2 leading-[1.3]">
              Discover the Benefits of Facial Aesthetics to Enhance Your Natural
              Beauty
            </h2>
            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              At Parish Dental, we offer a wide range of Facial Aesthetics
              services to help you achieve the look you desire. Our experienced
              team of professionals are dedicated to providing the highest
              quality care and treatments, tailored to your individual needs. We
              use only the finest quality products and techniques to ensure that
              you get the best possible results.
            </p>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              At Parish Dental, we understand that everyone's needs and
              preferences are different. That's why we take the time to listen
              to our patients and develop personalised treatment plans that are
              tailored to their individual needs. Our team of experts are highly
              skilled and experienced in the latest Facial Aesthetics techniques
              and products, ensuring that you receive the best possible care and
              results.
            </p>

            <h2 className="text-3xl text-primary font-semibold mt-10">
              Our Facial Aesthetics services encompass a wide range of options
            </h2>
            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              Our comprehensive range of treatments includes Botox®, dermal
              fillers, and chemical peels, all performed with premium products
              by our skilled team of professionals to deliver the best possible
              outcomes for our clients.
            </p>

            <div className="mt-10">
              {aesthetics.map((item) => {
                return (
                  <div
                    className={`flex flex-col sm:flex-row text-center lg:text-left items-center my-14 `}
                  >
                    <img
                      className={`w-24 mb-5 lg:mr-7 `}
                      src={item.icon}
                      alt={item.name}
                    />
                    <div>
                      <h4 className={`text-primary font-medium text-xl `}>
                        {item.name}
                      </h4>
                      <p
                        className={`text-neutral-500 mx-auto my-3 text-base leading-8 `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-primary text-lg my-20 font-medium">
              <Link
                to="/pricing#facial-aesthetics"
                className="inline-flex items-center mt-3 hover:underline "
              >
                Click here to view our full list of Facial Aesthetics treatments
                and pricing <FaLongArrowAltRight className="text-lg ml-2" />
              </Link>
            </div>

            <h2 className="text-3xl text-primary font-semibold mt-10">
              How we are keeping you safe
            </h2>
            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              At Parish Dental, your safety and well-being are our top priority.
              We understand the concerns that come with receiving facial
              aesthetics services during these uncertain times, and we want to
              assure you that we have taken every necessary precaution to keep
              our clinic a safe and healthy environment for you.
            </p>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              We follow strict guidelines and protocols to ensure that our
              clinic is clean, sterile, and sanitized. Our staff members are
              trained in the latest safety procedures, including the use of
              personal protective equipment and the proper handling and disposal
              of hazardous materials. We also adhere to social distancing
              guidelines and limit the number of patients we see at any given
              time to reduce the risk of exposure.
            </p>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8">
              If you're interested in our Facial Aesthetics services, contact us
              today to schedule a consultation. Our team will be happy to answer
              any questions you may have and help you achieve the look you
              desire.
            </p>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-7 rounded-lg shadow-lg sticky top-5">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Request an Appointment
            </h3>
            <Form oneCol />
          </div>
        </div>

        <HomeBanner />
      </section>
    </div>
  );
};

export default FacialAesthetics;
