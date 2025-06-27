import React from "react";
import { useForm } from "react-hook-form";

const TimeStep = ({ formData, setFormData, onContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: formData.category || "",
      date: formData.date || "",
      startTime: formData.startTime || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select category</option>
            <option value="hair">Hair</option>
            <option value="nails">Nails</option>
            <option value="massage">Massage</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Employee
          </label>
          <select
            {...register("preferredEmployee", {
              required: "Please select a preferred employee",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="any">Any</option>
            <option value="ana">Ana</option>
            <option value="Favour">Favour</option>
          </select>
          {errors.startTime && (
            <p className="text-red-500 text-sm">{errors.startTime.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="date"
            {...register("date", { required: "Please select a date" })}
            className="w-full p-2 border rounded"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("startTime", {
              required: "Please select a start time",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select time</option>
            <option value="08:00">8:00 am</option>
            <option value="09:00">9:00 am</option>
          </select>
          {errors.startTime && (
            <p className="text-red-500 text-sm">{errors.startTime.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
      >
        Continue
      </button>
    </form>
  );
};

export default TimeStep;
