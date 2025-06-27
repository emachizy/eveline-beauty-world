import React from "react";
import { useForm } from "react-hook-form";

const PaymentStep = ({ formData, setFormData, onContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: formData.paymentMethod || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Select Payment Method
      </label>
      <select
        {...register("paymentMethod", {
          required: "Please select a payment method",
        })}
        className="w-full p-2 border rounded"
      >
        <option value="">Choose one</option>
        <option value="card">Credit/Debit Card</option>
        <option value="transfer">Bank Transfer</option>
        <option value="pay-on-visit">Pay on Visit</option>
      </select>
      {errors.paymentMethod && (
        <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
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

export default PaymentStep;
