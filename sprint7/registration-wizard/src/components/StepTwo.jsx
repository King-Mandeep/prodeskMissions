import { useState } from "react";
import InputField from "./InputField";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validation";

function StepTwo({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  
  const isEmailValid = validateEmail(
  formData.email
);

const isPasswordValid = validatePassword(
  formData.password
);

const isConfirmPasswordValid =
  validateConfirmPassword(
    formData.password,
    formData.confirmPassword
  );

 
  const isStepValid =
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  
  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
          Step 2
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Account Details
        </h1>

        <p className="text-gray-400">
          Create your account credentials.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Email */}
        <div>
         <InputField
  label="Email Address"
  type="email"
  name="email"
  placeholder="Enter email"
  value={formData.email}
  onChange={updateField}
  error={
    !isEmailValid &&
    formData.email.length > 0
      ? "Please enter a valid email address."
      : ""
  }
/>
        </div>

        {/* Password */}
        <div>
         <InputField
  label="Password"
  type="password"
  name="password"
  placeholder="Enter password"
  value={formData.password}
  onChange={updateField}
  error={
    !isPasswordValid &&
    formData.password.length > 0
      ? "Password must be at least 8 characters."
      : ""
  }
  showToggle={true}
  isVisible={showPassword}
  onToggle={() =>
    setShowPassword(!showPassword)
  }
/>

        </div>

        {/* Confirm Password */}
        <div>
         <InputField
  label="Confirm Password"
  type="password"
  name="confirmPassword"
  placeholder="Confirm password"
  value={formData.confirmPassword}
  onChange={updateField}
  error={
    !isConfirmPasswordValid &&
    formData.confirmPassword.length > 0
      ? "Passwords do not match."
      : ""
  }
  showToggle={true}
  isVisible={showConfirmPassword}
  onToggle={() =>
    setShowConfirmPassword(
      !showConfirmPassword
    )
  }
/>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            onClick={prevStep}
            className="flex-1 bg-slate-700 hover:bg-slate-600 transition py-3 rounded-xl font-medium"
          >
            Back
          </button>

          <button
            onClick={nextStep}
            disabled={!isStepValid}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              isStepValid
                ? "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                : "bg-slate-700 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;