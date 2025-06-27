import React from "react";
import { useForm } from "react-hook-form";

const DetailsStep = ({ formData, setFormData, onContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: formData.fullName || "",
      email: formData.email || "",
      phone: formData.phone || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName", { required: "Name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 7,
              message: "Phone number must be at least 7 digits",
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition duration-300"
      >
        Continue
      </button>
    </form>
  );
};

export default DetailsStep;
