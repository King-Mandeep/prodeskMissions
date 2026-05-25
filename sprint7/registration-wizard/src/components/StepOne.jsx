function StepOne({
  formData,
  setFormData,
  nextStep,
}) {
  // Validation
  const isFirstNameValid =
    formData.firstName.trim().length >= 2;

  const isLastNameValid =
    formData.lastName.trim().length >= 2;

  const isDobValid = formData.dob !== "";

  // Overall Step Validity
  const isStepValid =
    isFirstNameValid &&
    isLastNameValid &&
    isDobValid;

  // Handle Input Change
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
          Step 1
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Personal Information
        </h1>

        <p className="text-gray-400">
          Enter your personal details to continue.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* First Name */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
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

          {!isFirstNameValid &&
            formData.firstName.length > 0 && (
              <p className="text-red-400 text-sm mt-2">
                First name must be at least 2 characters.
              </p>
            )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
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

          {!isLastNameValid &&
            formData.lastName.length > 0 && (
              <p className="text-red-400 text-sm mt-2">
                Last name must be at least 2 characters.
              </p>
            )}
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
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

          {!isDobValid && (
            <p className="text-red-400 text-sm mt-2">
              Date of birth is required.
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={nextStep}
          disabled={!isStepValid}
          className={`w-full py-3 rounded-xl font-medium transition ${
            isStepValid
              ? "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]s"
              : "bg-slate-700 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;