import React from "react";
import PageHeader from "../global/PageHeader";
import Form from "../global/Form";
import HomeBanner from "../home/HomeBanner";
import { Link } from "gatsby";

const DomiciliaryCare = () => {
  const points = [
    "Unique mobile dental service",
    "Working with 200+ care homes",
    "Make your home oral-health CQC-compliant",
    " NHS partners",
    "The very latest mobile dental equipment",
    "Hundreds of satisfied patients",
    "Attract more residents",
    "Engage carers and improve staff retention",
  ];

  return (
    <>
      <PageHeader pageTitle="Domiciliary Care" />
      <div className="bg-gradient-to-b from-backgroundSecondary to-white py-10">
        <div
          className={`container mx-auto flex flex-col lg:flex-row px-10 items-start relative mb-20`}
        >
          <article className="w-full lg:w-2/3  pr-0 lg:pr-7">
            <section>
              {/* <StaticImage
                src="../../images/domiciliary-van.jpg"
                layout="fullWidth"
              
                placeholder="blurred"
                imgClassName="rounded"
                className="rounded-lg"
                transformOptions={{
                  cropFocus: "center",
                }}
              /> */}

              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/lebQf5sdnLU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1 className="text-4xl text-primary font-semibold mt-10 mb-2 leading-[1.3]">
                Experience Convenient Mobile Dental Care with Comprehensive
                Dentistry Delivered to Your Doorstep
              </h1>

              <p className="text-gray-600  text-base leading-8 text-justify mx-auto my-3">
                Parish Dental Mobile is a unique dental service that enables our
                patients to access a full range of dental services from the
                comfort of their own home. With many combined years of dental
                experience in both traditional and mobile dentistry along with
                the latest technology and equipment we guarantee our patients
                the upmost satisfactory service.
              </p>
            </section>

            <section>
              <h3 className="text-primary text-xl font-semibold mt-7">
                Concerned about your residents' dental needs? <br /> We Are The
                Dentists That Come To You.
              </h3>

              <ul className="mt-3 list-disc list-inside">
                {points.map((item, index) => (
                  <li
                    className="text-gray-600  text-base leading-8 "
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl text-primary font-semibold mt-10 mb-3">
                We Come to You
              </h2>
              <p className="text-gray-600  text-base leading-8 text-justify mx-auto my-3">
                We have a modern, well-equipped mobile surgery  that allows us
                to visit you in the comfort of your own home.
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-primary font-semibold mt-10 mb-3">
                Location
              </h2>
              <p className="text-gray-600  text-base leading-8 text-justify mx-auto my-3">
                Parish Dental Mobile visits patients across the UK.
              </p>
            </section>

            <section>
              <p className="text-gray-600 text-xl font-semibold mt-7">
                Let us look after your dental health. Call us on{" "}
                <a href="tel:01132638509" className="text-secondary">
                  0113 263 8509{" "}
                </a>
                or{" "}
                <Link to="#appointment" className="text-secondary">
                  make an appointment.
                </Link>
              </p>
            </section>
          </article>

          <aside
            id="appointment"
            className="w-full lg:w-1/3 bg-white p-7 rounded-lg shadow-lg sticky top-5  mt-10 lg:mt-0"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              Request an Appointment
            </h3>
            <Form oneCol />
          </aside>
        </div>

        <HomeBanner />
      </div>
    </>
  );
};

export default DomiciliaryCare;
