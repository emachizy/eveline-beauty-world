import React from "react";
import { useForm } from "react-hook-form";

const ServiceStep = ({ formData, setFormData, onContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service: formData.service || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Choose a Service
      </label>
      <select
        {...register("service", { required: "Please select a service" })}
        className="w-full p-2 border rounded"
      >
        <option value="">Select one</option>
        <option value="facial">Facial Treatment</option>
        <option value="makeup">Makeup</option>
        <option value="pedicure">Pedicure</option>
      </select>
      {errors.service && (
        <p className="text-red-500 text-sm">{errors.service.message}</p>
      )}

      <button
        type="submit"
        className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
      >
        Continue
      </button>
    </form>
  );
};

export default ServiceStep;
