import React from "react";
import Logo from "../components/Logo";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = () => {
  const schedule = [
    { id: 1, day: "Sunday", time: "8AM-7PM" },
    { id: 2, day: "Monday", time: "8AM-7PM" },
    { id: 3, day: "Tuesday", time: "8AM-7PM" },
    { id: 4, day: "Wednesday", time: "8AM-7PM" },
    { id: 5, day: "Thursday", time: "8AM-7PM" },
    { id: 6, day: "Friday", time: "8AM-7PM" },
    { id: 7, day: "Saturday", time: "8AM-7PM" },
  ];

  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiGlobal {
        contactInfo {
          address
          email
          phone
        }
        footer {
          mapImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 360)
              }
            }
          }
        }
        socials {
          facebookLink
          instagramLink
          twitterLink
        }
      }
      strapiSchedule {
        scheduleDayTime {
          day
          time
        }
      }
    }
  `);

  const mapImage = getImage(data?.strapiGlobal?.footer?.mapImage?.localFile);
  const contact = data?.strapiGlobal?.contactInfo;

  const socialLinks = data?.strapiGlobal?.socials;

  const socials = [
    { id: 1, icon: FiFacebook, href: socialLinks.facebookLink },
    { id: 2, icon: FiTwitter, href: socialLinks.instagramLink },
    { id: 3, icon: FiInstagram, href: socialLinks.twitterLink },
  ];

  const scheduleData = data?.strapiSchedule?.scheduleDayTime;
  console.log(scheduleData);

  return (
    <footer className="w-full bg-primary py-20">
      <div className="container mx-auto px-10 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-16 text-white">
        <div>
          <Logo isFooter />
          <p className="my-10 font-light">
            This is AllSmiles, a place dedicated to clear, white & perfect
            smiles
          </p>

          <div className="flex items-center my-5">
            {socials.map((social) => {
              const SocialIconComponent = social.icon;
              return (
                <a
                  key={social?.id}
                  href={social?.href}
                  className="bg-white hover:bg-secondary w-10 h-10 rounded-md flex justify-center items-center mr-5 group transition-colors"
                >
                  <SocialIconComponent className="text-primary group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="">
          <h3 className="font-medium text-xl mb-7">Work Hours</h3>
          <div>
            {scheduleData?.map((item, index) => (
              <div className="flex justify-between my-2" key={index}>
                <span className="font-light">{item.day}</span>
                <span className="font-light">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-xl mb-7">Contact Info</h3>

          <div className="flex items-center mb-7">
            <FiMapPin className="mr-2 w-1/12 text-xl" />{" "}
            <span className="w-11/12 font-light">{contact.address}</span>
          </div>

          <a
            href={`mailto:${contact?.email}`}
            className="flex items-center  mb-7"
          >
            <FiMail className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">{contact.email}</span>
          </a>

          <a href={`tel:${contact?.phone}`} className="flex items-center  mb-7">
            <FiPhone className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">{contact.phone}</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.google.com/maps?ll=52.946335,-1.189357&z=14&t=m&hl=en&gl=US&mapclient=embed&q=31+Wollaton+Hall+Dr+Lenton+Nottingham+NG8+1AF+UK"
            target="_blank"
          >
            <GatsbyImage
              image={mapImage}
              className="h-full w-full"
              imgClassName="w-full h-full object-cover rounded"
              alt="31 Wollaton Hall Dr Lenton Nottingham NG8 1AF UK"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
