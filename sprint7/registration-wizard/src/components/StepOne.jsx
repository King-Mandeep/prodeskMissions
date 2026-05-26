import InputField from "./InputField";
import {
  validateName,
  validateDob,
} from "../utils/validation";
function StepOne({
  formData,
  setFormData,
  nextStep,
}) {
  const isFirstNameValid = validateName(
  formData.firstName
);

const isLastNameValid = validateName(
  formData.lastName
);

const isDobValid = validateDob(
  formData.dob
);

 
  const isStepValid =
    isFirstNameValid &&
    isLastNameValid &&
    isDobValid;

  
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

         <InputField
  label="First Name"
  name="firstName"
  placeholder="Enter first name"
  value={formData.firstName}
  onChange={updateField}
  error={
    !isFirstNameValid &&
    formData.firstName.length > 0
      ? "First name must be at least 2 characters."
      : ""
  }
/>

        </div>

        {/* Last Name */}
        <div>

        <InputField
  label="Last Name"
  name="lastName"
  placeholder="Enter last name"
  value={formData.lastName}
  onChange={updateField}
  error={
    !isLastNameValid &&
    formData.lastName.length > 0
      ? "Last name must be at least 2 characters."
      : ""
  }
/>

        </div>

        {/* DOB */}
        <div>

         <InputField
  label="Date of Birth"
  type="date"
  name="dob"
  value={formData.dob}
  onChange={updateField}
  error={
    !isDobValid
      ? "Date of birth is required."
      : ""
  }
/>
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