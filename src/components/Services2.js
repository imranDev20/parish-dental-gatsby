import React from "react";
import SectionHeader from "./SectionHeader";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Services2 = () => {
  const data = useStaticQuery(graphql`
    query Services2Query {
      allStrapiService {
        nodes {
          serviceText
          serviceName

          serviceImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, placeholder: BLURRED)
              }
            }
          }

          serviceIcon {
            alternativeText
            localFile {
              publicURL
              url
            }
          }
        }
      }
    }
  `);

  const services = data?.allStrapiService?.nodes;

  return (
    <section className="bg-rose-50 py-24">
      <div className="container px-10 mx-auto ">
        <SectionHeader
          subTitle="this is subtitle"
          mainTitle="Example Title"
          description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {services.map((service, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <div>
                <GatsbyImage
                  image={getImage(service?.serviceImage?.localFile)}
                  alt={service?.serviceImage?.alternativeText}
                />
              </div>
              <div className="bg-white  p-5 relative">
                <div className="absolute top-0 -translate-y-1/2  bg-white rounded shadow w-20 h-20 p-3">
                  <img
                    className="object-contain"
                    src={service?.serviceIcon?.localFile?.url}
                    alt=""
                  />
                </div>
                <h5 className="text-2xl text-primary font-medium mt-10">
                  {service?.serviceName}
                </h5>
                <p className="text-neutral-500 my-2 mx-auto text-base leading-8">
                  {service?.serviceText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
