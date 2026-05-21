const InputField = ({
  label,
  optional = false,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={label?.replace(/\s+/g, "-").toLowerCase()}
          className="text-sm font-medium text-[#353535]">
          {label}
          {optional && (
            <span className="text-[#B0B5BE] font-normal ml-0.5"> (Optional)</span>
          )}
        </label>
      )}
      <input
        type={type}
        id={label?.replace(/\s+/g, "-").toLowerCase()}
        placeholder={placeholder}
        aria-label={label}
        className="w-full h-11 px-4 py-3 text-sm font-normal text-[#353535] placeholder:text-[#B0B5BE] bg-[#F8FAFC] border border-[#E5E7EB] rounded outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white"
      />
    </div>
  );
};

export default InputField;
