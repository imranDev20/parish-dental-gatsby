import React from "react";

const ContactInfo = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-36 container px-10 mx-auto text-center">
      {[0, 1, 2, 3].map((n) => (
        <div key={n}>
          <div className="mb-10">
            <h5 className="text-primary text-2xl font-medium mb-2">
              Emergency Phone
            </h5>
            <a
              href="mailto:415-205-5550"
              className="text-sm text-neutral-500 my-1"
            >
              415-205-5550
            </a>
            <p className="text-sm text-neutral-500 my-1">
              Call us Anytime 24/7
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactInfo;
