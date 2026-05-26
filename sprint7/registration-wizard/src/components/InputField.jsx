function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  showToggle = false,
  isVisible = false,
  onToggle,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-300">
        {label}
      </label>

      <div className="relative">
        <input
          type={isVisible ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
            pr-16
          "
        />

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;