import React, { useState } from "react";
import TimeStep from "../components/TimeStep";
import ServiceStep from "../components/ServiceStep";
import DetailsStep from "../components/DetailsStep ";
import PaymentStep from "../components/PaymentStep";
import DoneStep from "../components/DoneStep";
// import TimeStep from "./steps/TimeStep";
// import ServiceStep from "./steps/ServiceStep";
// import DetailsStep from "./steps/DetailsStep";
// import PaymentStep from "./steps/PaymentStep";
// import DoneStep from "./steps/DoneStep";

const steps = ["Time", "Service", "Details", "Payment", "Done"];

const BookNowPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const goToNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      setFormData,
      onContinue: goToNext,
    };

    switch (currentStep) {
      case 0:
        return <TimeStep {...commonProps} />;
      case 1:
        return <ServiceStep {...commonProps} />;
      case 2:
        return <DetailsStep {...commonProps} />;
      case 3:
        return <PaymentStep {...commonProps} />;
      case 4:
        return <DoneStep />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded mt-28">
      {/* Step Indicators */}
      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm font-semibold ${
              index === currentStep
                ? "text-pink-600"
                : index < currentStep
                ? "text-green-500"
                : "text-gray-400"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[250px]">{renderStep()}</div>

      {/* Back Button (hide on final screen) */}
      {currentStep < steps.length - 1 && (
        <div className="mt-6">
          <button
            onClick={goToPrev}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
