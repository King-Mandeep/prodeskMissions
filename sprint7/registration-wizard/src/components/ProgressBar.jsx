function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="mb-8">
      {/* Text */}
      <div className="flex justify-between mb-2 text-sm text-gray-400">
        <span>Registration Progress</span>
        <span>Step {step} of 3</span>
      </div>

      {/* Bar */}
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;