const Button = ({ children, variant = "primary", classNames = "" }) => {
  const styles = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 border-0",
    secondary: "border border-[#E5E7EB] text-[#111827] hover:bg-[#E5E7EB]",
    primaryOutline: "border border-[#3171FF33] text-[#1977F2] hover:bg-[#3171FF33] hover:text-white",
  };
  return (
    <button
      type="button"
      aria-label={typeof children === "string" ? children : undefined}
      className={`rounded text-center outline-none cursor-pointer transition-all duration-200 ${styles[variant]} ${classNames}`}>
      {children}
    </button>
  );
};

export default Button;
