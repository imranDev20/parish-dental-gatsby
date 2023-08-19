import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { NormalButton } from "./Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

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

const Form = ({ inputBg, oneCol, isModal }) => {
  const toastId = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Appointment request successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "customId",
      });
    }
  };

  const url = `${process.env.SERVER_URL}/appointment`;

  const onSubmit = (data) => {
    setIsLoading(true);
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        if (res.status === 200) {
          notify();
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErrorMessage("Something went wrong. Try again later.");
        }
      });
  };

  const inputClasses = [
    `${inputBg} px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-gray-400 focus:text-gray-600 py-2`,
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="myForm">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div
          className={`grid ${oneCol ? "grid-cols-1" : "grid-cols-2"}  gap-3`}
        >
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

        <div
          className={`grid ${oneCol ? "grid-cols-1" : "grid-cols-2"}  gap-3`}
        >
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
                    /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,5}){1,2}$/i,
                  message: "Invalid email address",
                },
                required: "Email is required",
              })}
            />
            <Error name="email" errors={errors} />
          </div>
        </div>

        <div
          className={`grid ${oneCol ? "grid-cols-1" : "grid-cols-2"}  gap-3`}
        >
          <div>
            <input
              type="text"
              placeholder="Date of Birth - DD/MM/YYYY"
              className={`${inputClasses}`}
              {...register("dob")}
            />

            <Error name="dob" errors={errors} />
          </div>

          <div>
            <input
              placeholder="Your address..."
              className={`${inputClasses}`}
              {...register("address")}
            />

            <Error name="address" errors={errors} />
          </div>
        </div>

        <textarea
          placeholder="What type of appointment/ treatment do you feel you require?"
          rows={5}
          className={`${inputClasses}`}
          {...register("message")}
        />
        <Error name="message" errors={errors} />

        <p className="text-red-600 text-sm mb-4">{errorMessage}</p>

        <NormalButton
          disabled={isLoading ? true : false}
          variant={"blue"}
          className="px-3  w-full py-3 flex justify-center items-center"
          type="submit"
        >
          {isLoading ? <Loader /> : null}
          Submit
        </NormalButton>
      </form>
    </>
  );
};

export default Form;
