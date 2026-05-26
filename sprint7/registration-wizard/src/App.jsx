import { useState } from "react";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import ProgressBar from "./components/ProgressBar";
import Success from "./components/Success";

function App() {
  
  const [step, setStep] = useState(1);

  
  const [submitted, setSubmitted] = useState(false);

 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

 
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

 
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

 
  const handleSubmit = () => {
    console.log(formData);

    setSubmitted(true);
  };

  
  if (submitted) {
    return <Success />;
  }

  return (
    <div className="
  min-h-screen
  bg-slate-900
  text-white
  flex
  items-center
  justify-center
  px-4
  sm:px-6
  py-6
  sm:py-10
">
      <div className="
  w-full
  max-w-2xl
  bg-white/5
  border border-white/10
  rounded-3xl
  p-5 sm:p-8
  shadow-2xl
  backdrop-blur-xl
">
        
        {/* Progress */}
        <ProgressBar step={step} />

        {/* Step Rendering */}
        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <StepThree
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;