import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = ({ inputBg }) => {
  const [state, handleSubmit] = useForm("xlezaedd");

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  const inputClasses = [
    `${inputBg} px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600`,
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="fName"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
          />
        </div>
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="lName"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            type="date"
            className={`${inputClasses} py-2`}
            name="date"
            id="date"
          />
          <ValidationError prefix="Date" field="date" errors={state.errors} />
        </div>
        <div className="w-[49%]">
          <select
            name="daytime"
            id="daytime"
            // form="carform"
            className={`${inputClasses} py-2`}
          >
            <option className="text-neutral-500" value="morning">
              Morning
            </option>
            <option className="text-neutral-500" value="afternoon">
              Afternoon
            </option>
            <option className="text-neutral-500" value="evening">
              Evening
            </option>
          </select>
          <ValidationError
            prefix="Daytime"
            field="daytime"
            errors={state.errors}
          />
        </div>
      </div>

      <textarea
        className={`${inputClasses} py-6`}
        id="message"
        name="message"
        rows="5"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-primary rounded text-white my-2 py-3 hover:bg-secondary transition-colors"
        type="submit"
        disabled={state.submitting}
      >
        Send Request
      </button>
    </form>
  );
};

export default Form;
