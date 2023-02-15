import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { NormalButton } from "./Button";
import axios from "axios";

const Error = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className="text-red-600 text-sm">{message}</p>
      )}
    />
  );
};

const Form = ({ inputBg, isPricing, price, service, submitButtonText }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:8080/contact",
      data: data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const inputClasses = [
    `${inputBg} px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-2`,
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            placeholder="First Name"
            className={`${inputClasses}`}
            {...register("firstName", { required: "First name is required" })}
          />
          <Error name="firstName" errors={errors} />
        </div>

        <div>
          <input
            placeholder="Last Name"
            className={`${inputClasses}`}
            {...register("lastName", { required: "Last name is required" })}
          />
          <Error name="lastName" errors={errors} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            placeholder="Phone"
            className={`${inputClasses}`}
            {...register("phone", { required: "Phone number is required" })}
          />
          <Error name="phone" errors={errors} />
        </div>

        <div>
          <input
            placeholder="Email"
            className={`${inputClasses}`}
            {...register("email", {
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/i,
                message: "Invalid email address",
              },
              required: "Email is required",
            })}
          />
          <Error name="email" errors={errors} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="date"
            placeholder="Date"
            className={`${inputClasses}`}
            {...register("date")}
          />
          <Error name="date" errors={errors} />
        </div>

        <div>
          <select
            placeholder="Select a time"
            className={`${inputClasses}`}
            {...register("time")}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          <Error name="time" errors={errors} />
        </div>
      </div>

      <textarea
        placeholder="Messages..."
        rows={5}
        className={`${inputClasses}`}
        {...register("message")}
      />
      <Error name="message" errors={errors} />

      <NormalButton
        variant={"blue"}
        className="px-3 py-2 block w-full"
        type="submit"
      >
        Submit
      </NormalButton>
    </form>
  );
};

export default Form;
