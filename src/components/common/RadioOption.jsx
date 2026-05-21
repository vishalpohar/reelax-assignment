const RadioOption = ({ code, description, selected, onSelect }) => {
  return (
    <button
      type="button"
      aria-label={`Select coupon ${code}`}
      onClick={onSelect}
      className={`
        w-full
        flex items-center justify-between
        gap-4
        p-3
        bg-white
        border-2
        rounded
        transition-all duration-200
        ${selected ? "border-[#1977F2]" : "border-[#EAEAEA]"}
        hover:border-[#1977F2]
      `}>
      <div className="flex items-center gap-2 min-w-0">
        <h3 className="text-sm font-bold text-[#111827] whitespace-nowrap">
          {code}
        </h3>

        <p className="text-[10px] font-normal text-[#6B7280] leading-normal">
          {description}
        </p>
      </div>

      <div
        className={`
          shrink-0
          flex items-center justify-center
          w-4 h-4
          bg-white
          rounded-full
          border-[#1977F2]
          ${selected ? "border-[4px]" : "border"}
        `}></div>
    </button>
  );
};

export default RadioOption;
