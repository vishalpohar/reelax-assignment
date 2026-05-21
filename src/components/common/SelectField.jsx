import { ChevronDown } from "lucide-react";

const SelectField = ({ label, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label?.replace(/\s+/g, "-").toLowerCase()}
        className="text-sm font-medium text-[#353535]">
        {label}
      </label>
      <div className="relative">
        <select
          id={label?.replace(/\s+/g, "-").toLowerCase()}
          className="w-full h-11 px-4 py-3 appearance-none text-sm font-normal text-[#353535] bg-[#F8FAFC] border border-[#E5E7EB] rounded outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white">
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown size={16} color="#1977F2" />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
