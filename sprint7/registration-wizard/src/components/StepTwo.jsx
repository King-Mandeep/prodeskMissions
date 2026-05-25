import { useState } from "react";

function StepTwo({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  // Password visibility
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // Validation
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.email
    );

  const isPasswordValid =
    formData.password.length >= 8;

  const isConfirmPasswordValid =
    formData.confirmPassword ===
      formData.password &&
    formData.confirmPassword !== "";

  // Overall validity
  const isStepValid =
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  // Handle input changes
  const handleChange = (e) => {
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
          <label className="block mb-2 text-sm text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
           className="
  w-full
  px-4
  py-3
  rounded-xl
  bg-slate-800
  border border-white/10
  outline-none
  focus:border-blue-500
  focus:ring-2
  focus:ring-blue-500/20
  transition
"
          />

          {!isEmailValid &&
            formData.email.length > 0 && (
              <p className="text-red-400 text-sm mt-2">
                Please enter a valid email address.
              </p>
            )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Password
          </label>

          <div className="relative">
            <input
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="
  w-full
  px-4
  py-3
  rounded-xl
  bg-slate-800
  border border-white/10
  outline-none
  focus:border-blue-500
  focus:ring-2
  focus:ring-blue-500/20
  transition
"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {!isPasswordValid &&
            formData.password.length > 0 && (
              <p className="text-red-400 text-sm mt-2">
                Password must be at least 8 characters.
              </p>
            )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
             className="
  w-full
  px-4
  py-3
  rounded-xl
  bg-slate-800
  border border-white/10
  outline-none
  focus:border-blue-500
  focus:ring-2
  focus:ring-blue-500/20
  transition
"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400"
            >
              {showConfirmPassword
                ? "Hide"
                : "Show"}
            </button>
          </div>

          {!isConfirmPasswordValid &&
            formData.confirmPassword.length > 0 && (
              <p className="text-red-400 text-sm mt-2">
                Passwords do not match.
              </p>
            )}
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