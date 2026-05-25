import { useState } from "react";

function StepThree({
  formData,
  prevStep,
  handleSubmit,
}) {
const [showPassword, setShowPassword] =
  useState(false);

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
          Step 3
        </p>

        <h1 className="text-3xl font-bold mb-2">
          Review & Submit
        </h1>

        <p className="text-gray-400">
          Please review your information before submitting.
        </p>
      </div>

      {/* Review Card */}
      <div className="bg-slate-800 border border-white/10 rounded-2xl p-6 space-y-5">
        
        {/* First Name */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
          <span className="text-gray-400">
            First Name
          </span>

          <span className="font-medium">
            {formData.firstName}
          </span>
        </div>

        {/* Last Name */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
          <span className="text-gray-400">
            Last Name
          </span>

          <span className="font-medium">
            {formData.lastName}
          </span>
        </div>

        {/* DOB */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
          <span className="text-gray-400">
            Date of Birth
          </span>

          <span className="font-medium">
            {formData.dob}
          </span>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
          <span className="text-gray-400">
            Email
          </span>

          <span className="font-medium">
            {formData.email}
          </span>
        </div>

        {/* Password */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
          <span className="text-gray-400">
            Password
          </span>

        <div className="flex items-center gap-3">
  <span className="font-medium">
    {showPassword
      ? formData.password
      : "********"}
  </span>

  <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="text-sm text-blue-400 hover:text-blue-300 transition"
  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevStep}
          className="flex-1 bg-slate-700 hover:bg-slate-600 transition py-3 rounded-xl font-medium"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="flex-1 bg-green-600 hover:bg-green-700 transition py-3 rounded-xl font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default StepThree;