import React, { useState } from "react";
import { Input, Textarea, Button, Spinner } from "@material-tailwind/react";
import { BsSendFill } from "react-icons/bs";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";

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

function EmergencyForm() {
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
    const url = `${process.env.SERVER_URL}/contact`;

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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-10 my-20">
      <div>
        <h2 className="font-bold text-blue-gray-900 text-3xl">
          Send us a message
        </h2>

        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4 grid-cols-2 grid gap-3">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <>
                  <Input {...field} size="lg" label="First Name" color="red" />
                  <Error name="firstName" errors={errors} />
                </>
              )}
            />

            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <>
                  <Input {...field} size="lg" label="Last Name" color="red" />
                  <Error name="lastName" errors={errors} />
                </>
              )}
            />
          </div>

          <div className="my-4 grid grid-cols-2 gap-3">
            <Input size="lg" label="Email" color="red" />
            <Input size="lg" label="Phone" color="red" />
          </div>
          <div>
            <Textarea label="What's your emergency?" color="red" />
          </div>

          <p className="text-red-600 text-sm mb-4">{errorMessage}</p>

          <Button className="mt-3 flex items-center" color="red" type="submit">
            {isLoading ? (
              <Spinner className="h-4 w-4 mr-3" />
            ) : (
              <BsSendFill className="mr-3" />
            )}
            Send Request
          </Button>
        </form>
      </div>

      <div>
        <StaticImage
          src="../../../images/emergency-form.jpeg"
          alt="Emergency Form"
          className="rounded-lg"
          placeholder="blurred"
        />
      </div>
    </section>
  );
}
export default EmergencyForm;
