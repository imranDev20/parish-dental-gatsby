import React from "react";
import Logo from "../components/Logo";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import MapImage from "../images/maps.png";

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

  const socials = [
    { id: 1, icon: FiFacebook, href: "https://facebook.com" },
    { id: 2, icon: FiTwitter, href: "https://facebook.com" },
    { id: 3, icon: FiInstagram, href: "https://facebook.com" },
  ];

  return (
    <footer className="w-full bg-primary py-20">
      <div className="container mx-auto px-10 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-16 text-white">
        <div>
          <Logo isFooter />
          <p className="my-10">
            This is AllSmiles, a place dedicated to clear, white & perfect
            smiles
          </p>

          <div className="flex items-center my-5">
            {socials.map((social) => {
              const SocialIconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href="https://facebook.com"
                  className="bg-white hover:bg-secondary w-10 h-10 rounded-md flex justify-center items-center mr-5 group transition-colors"
                >
                  <SocialIconComponent className="text-primary group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="">
          <h3 className="font-medium text-xl mb-2">Work Hours</h3>
          <div>
            {schedule?.map((item) => (
              <div className="flex justify-between my-2" key={item.id}>
                <span className="font-light">{item.day}</span>
                <span className="font-light">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-xl mb-2">Contact Info</h3>
          <div></div>
        </div>
        <div>
          <a href="https://www.google.com/maps?ll=52.946335,-1.189357&z=14&t=m&hl=en&gl=US&mapclient=embed&q=31+Wollaton+Hall+Dr+Lenton+Nottingham+NG8+1AF+UK">
            <img
              className="w-full h-full object-cover rounded"
              src={MapImage}
              alt="31 Wollaton Hall Dr Lenton Nottingham NG8 1AF UK"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
