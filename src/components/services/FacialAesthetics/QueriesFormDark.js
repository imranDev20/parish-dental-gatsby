import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Loader from "../../global/Loader";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { toast } from "react-toastify";
import { NormalButton } from "../../global/Button";

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

const QueriesFormDark = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toastId = React.useRef(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Message sent successfully!", {
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

  const onSubmit = (data) => {
    const url = `${process.env.EMAIL_SERVER}/contact`;

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-3 lg:mb-5 gap-4">
        <div className="mb-1 lg:mb-0">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  label="First Name"
                  variant="standard"
                  fullWidth
                />
                <Error name="firstName" errors={errors} />
              </>
            )}
          />
        </div>
        <div className="mb-1 lg:mb-0">
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  label="Last Name"
                  variant="standard"
                  fullWidth
                />
                <Error name="lastName" errors={errors} />
              </>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-3 lg:mb-5  gap-4">
        <div className="mb-1 lg:mb-0">
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <>
                <Input {...field} label="Phone" variant="standard" fullWidth />
                <Error name="phone" errors={errors} />
              </>
            )}
          />
        </div>
        <div className="mb-1 lg:mb-0">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email address is required",
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <>
                <Input {...field} label="Email" variant="standard" fullWidth />
                <Error name="email" errors={errors} />
              </>
            )}
          />
        </div>
      </div>

      <div className="mb-1 lg:mb-0">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <>
              <Textarea {...field} label="Message" variant="standard" />
              <Error name="message" errors={errors} />
            </>
          )}
        />
      </div>

      <p className="text-red-600 text-sm mb-4">{errorMessage}</p>

      <Button fullWidth type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default QueriesFormDark;
