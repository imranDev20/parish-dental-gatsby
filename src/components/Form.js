import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

const Form = ({ inputBg, isPricing, price, service }) => {
  const [state, handleSubmit] = useForm("mlezzdzv");

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  const inputClasses = [
    `${inputBg} px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600`,
  ];

  const handleNotification = () => {
    if (state.submitting) {
      toast("Sumbitting your request...");
    }
    if (state.succeeded) {
      toast.success("Request sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (state.errors) {
      toast.error("There was an error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Name */}
      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="fName"
            type="text"
            name="First Name"
            placeholder="First Name"
            required
          />
          <ValidationError
            prefix="First Name"
            field="First Name"
            errors={state.errors}
          />
        </div>
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="lName"
            type="text"
            name="Last Name"
            placeholder="Last Name"
          />
          <ValidationError
            prefix="Last Name"
            field="Last Name"
            errors={state.errors}
          />
        </div>
      </div>

      {/* Phone / Email */}
      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="phone"
            type="text"
            name="Phone"
            placeholder="Phone"
          />
          <ValidationError prefix="Phone" field="Phone" errors={state.errors} />
        </div>
        <div className="w-[49%]">
          <input
            className={`${inputClasses} py-2`}
            id="email"
            type="email"
            name="Email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="Email" errors={state.errors} />
        </div>
      </div>

      {/* Time */}
      <div className="flex justify-between">
        <div className="w-[49%]">
          <input
            type="date"
            className={`${inputClasses} py-2`}
            name="Appointment Date"
            id="date"
          />
          <ValidationError
            prefix="Date"
            field="Appointment Date"
            errors={state.errors}
          />
        </div>
        <div className="w-[49%]">
          <select
            name="Preferred time of day"
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
            field="Preferred time of day"
            errors={state.errors}
          />
        </div>
      </div>

      {/* Price Section */}
      {isPricing && (
        <div className="flex justify-between">
          <div className="w-[49%]">
            <input
              type="text"
              className={`${inputClasses} py-2`}
              name="Service Name"
              id="service"
              value={service}
              readOnly
              disabled
            />
            <ValidationError
              prefix="Service"
              field="Service Name"
              errors={state.errors}
            />
          </div>
          <div className="w-[49%]">
            <input
              type="text"
              className={`${inputClasses} py-2`}
              name="Price"
              id="price"
              value={`£${price}`}
              readOnly
              disabled
            />
            <ValidationError
              prefix="Price"
              field="Price"
              errors={state.errors}
            />
          </div>
        </div>
      )}

      <textarea
        className={`${inputClasses} py-6`}
        id="message"
        name="message"
        rows="5"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        onClick={() => handleNotification()}
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
