import React from "react";
import Form from "../components/Form";

const ContactPageForm = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center my-24">
      <div className="w-full lg:w-1/2 lg:p-10">
        <img
          className="w-full object-cover rounded"
          src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 lg:p-10 mt-16 lg:mt-0">
        <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
          Dental Practice
        </h3>
        <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
          Request an Appointment
        </h2>
        <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
          Proin gravida nibh vel velit auctor aliquet. Aenean consulatu, lorem
          quis bibendum auctor nisi elit.
        </p>
        <Form inputBg="bg-white" />
      </div>
    </section>
  );
};

export default ContactPageForm;
