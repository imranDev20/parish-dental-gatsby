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
import {
  FaBirthdayCake,
  FaLongArrowAltRight,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "gatsby";
import HaDermaImage from "../../images/ha-derma.svg";
import AliaxinImage from "../../images/aliaxin.svg";
import ProfhiloImage from "../../images/profhilo.png";
import CareQualityImage from "../../images/care-quality-com.svg";

import Seo from "../global/Seo";

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

  const faqInfo = [
    {
      id: 1,
      text: "30 Min Procedure",
      icon: "",
    },
    {
      id: 2,
      text: "Recovery few days",
      icon: "",
    },
    {
      id: 3,
      text: "No of treatments: 1+",
      icon: "",
    },
    {
      id: 4,
      text: "Lasts 3-6 months",
      icon: "",
    },
  ];

  const faqRisk = [
    {
      id: 1,
      text: "Redness at injection site",
      icon: "",
    },
    {
      id: 2,
      text: "Headaches",
      icon: "",
    },
    {
      id: 3,
      text: "Minor bruising",
      icon: "",
    },
    {
      id: 4,
      text: "Risks are RARE",
      icon: "",
    },
  ];

  return (
    <>
      <Seo
        title="Facial Aesthetics"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
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
            <div>
              <h1 className="text-4xl text-primary font-semibold mt-10 mb-2 leading-[1.3]">
                Enhance Your Natural Beauty with Facial Aesthetics at Leeds'
                <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-secondary">
                  {" "}
                  Award-Winning{" "}
                </span>{" "}
                Dental and Aesthetics Clinic
              </h1>
              <p className="text-neutral-500 mx-auto my-3 text-base leading-8 text-justify">
                At Parish Dental, we offer a wide range of Facial Aesthetics
                services to help you achieve the look you desire. Our
                experienced team of professionals are dedicated to providing the
                highest quality care and treatments, tailored to your individual
                needs. We use only the finest quality products and techniques to
                ensure that you get the best possible results.
              </p>

              <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
                At Parish Dental, we understand that everyone's needs and
                preferences are different. That's why we take the time to listen
                to our patients and develop personalised treatment plans that
                are tailored to their individual needs. Our team of experts are
                highly skilled and experienced in the latest Facial Aesthetics
                techniques and products, ensuring that you receive the best
                possible care and results.
              </p>
            </div>

            <div>
              <h2 className="text-3xl text-primary font-semibold mt-10">
                Our Facial Aesthetics services encompass a wide range of options
              </h2>
              <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
                Our comprehensive range of treatments includes Botox®, dermal
                fillers, and chemical peels, all performed with premium products
                by our skilled team of professionals to deliver the best
                possible outcomes for our clients.
              </p>

              <div className="mt-10">
                {aesthetics.map((item) => {
                  return (
                    <div
                      className={`flex flex-col sm:flex-row text-center lg:text-left items-center my-7 `}
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

              <StaticImage
                src="../../images/black-price-list.png"
                className="rounded-lg"
              />

              <div className="text-primary text-lg my-20 font-medium">
                <Link
                  to="/pricing#facial-aesthetics"
                  className="inline-flex items-center mt-3 hover:underline "
                >
                  Click here to view our full list of Facial Aesthetics
                  treatments and pricing{" "}
                  <FaLongArrowAltRight className="text-lg ml-2" />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl text-primary font-semibold mt-10 mb-6">
                Our Commitment to Excellence: Utilizing the Finest Quality
                Products
              </h2>
              <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
                Discover a curated selection of exceptional products at our
                clinic. From renowned brands like Profhilo, HA Derma, and
                Aliaxin, we only offer the highest quality for your treatments.
                Experience the pinnacle of excellence and indulge in our
                exquisite product collection
              </p>

              <div className="grid grid-cols-3 place-items-center">
                <img src={AliaxinImage} alt="" width={200} />
                <img src={HaDermaImage} alt="" width={180} />
                <img src={ProfhiloImage} alt="" />
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl text-primary font-semibold mt-10 mb-6">
                Facial Aesthetics Treatment FAQ
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="text-primary text-lg font-semibold">Info</h3>
                  <ul>
                    {faqInfo.map((info) => (
                      <li className="text-neutral-500 mx-auto my-0.5 text-base leading-8 flex items-center">
                        <FaLongArrowAltRight className="mr-2 text-secondary" />
                        {info.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 lg:mt-0">
                  <h3 className="text-primary text-lg font-semibold">Risks</h3>
                  <ul>
                    {faqRisk.map((info) => (
                      <li className="text-neutral-500 mx-auto my-0.5 text-base leading-8 flex items-center">
                        <FaLongArrowAltRight className="mr-2 text-secondary" />
                        {info.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-background my-4 rounded-lg  p-4">
                <h3 className="text-xl text-primary font-semibold mb-3">
                  Things to Know:
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="pr:0 lg:pr-10">
                    <h5 className="text-neutral-500 font-semibold text-lg mt-3 flex items-center">
                      <FaBirthdayCake className="mr-2 text-secondary" />
                      Age Limit
                    </h5>
                    <p className="text-neutral-500  my-1 text-base leading-8 text">
                      For the well-being and safety of our patients, we kindly
                      request that all individuals seeking treatment with us be
                      at least 18 years old.
                    </p>
                  </div>

                  <div className="pl-0 lg:pl-10">
                    <h5 className="text-neutral-500 font-semibold text-lg mt-3 flex items-center">
                      <FaUserShield className="mr-2 text-secondary" />
                      Privacy Policy
                    </h5>
                    <p className="text-neutral-500  my-1 text-base leading-8 ">
                      We prioritize confidentiality and data protection,
                      ensuring your personal information remains secure and
                      handled with utmost care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl text-primary font-semibold mt-10 mb-6">
              How we are keeping you safe
            </h2>

            <StaticImage src="../../images/gloves.jpg" className="rounded-lg" />

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8 mt-6  text-justify">
              At Parish Dental, your safety and well-being are our top priority.
              We understand the concerns that come with receiving facial
              aesthetics services during these uncertain times, and we want to
              assure you that we have taken every necessary precaution to keep
              our clinic a safe and healthy environment for you.
            </p>

            <div className="lg:float-right flex justify-center">
              <StaticImage
                className="ml-0 lg:ml-6 my-3"
                src="../../images/care-quality-commission.png"
                width={350}
              />
            </div>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
              As a regulated clinic under the Care Quality Commission (CQC), we
              adhere to strict guidelines and protocols to ensure that our
              clinic is clean, sterile, and sanitized. Our staff members are
              trained in the latest safety procedures, including the use of
              personal protective equipment and the proper handling and disposal
              of hazardous materials. We also prioritize social distancing
              guidelines and limit the number of patients we see at any given
              time to reduce the risk of exposure.
            </p>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
              Rest assured that by choosing Parish Dental, you are choosing a
              clinic that meets the rigorous standards set by the CQC for
              quality and safety. We are committed to providing you with
              exceptional care in a secure and regulated environment. Your
              health and peace of mind are of utmost importance to us."
            </p>

            <p className="text-neutral-500 mx-auto my-3 text-base leading-8  text-justify">
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
    </>
  );
};

export default FacialAesthetics;
