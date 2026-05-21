import { useState } from "react";
import { ChevronUp, Tag } from "lucide-react";
import InputField from "../common/InputField";
import RadioOption from "../common/RadioOption";
import Button from "../common/Button";

const CouponSection = () => {
  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME20");
  return (
    <div className="flex flex-col bg-white border border-[#E5E7EB] rounded shadow-card">
      <div className="flex items-center justify-between p-4 bg-white border-b border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <Tag size={18} color="#6B7280" strokeWidth={1.5} />
          <p className="text-sm text-[#111827] font-bold">Apply Coupon</p>
        </div>
        <ChevronUp size={16} color="#6B7280" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-4 p-4 bg-[#F3F4F61A]">
        <div className="flex items-start gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full px-3 py-2 text-sm font-normal text-[#353535] placeholder:text-[#6B7280] bg-[#FFFFFF] border border-[#E5E7EB] rounded outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-500 focus:bg-white"
            aria-label="Enter coupon code"
          />

          <Button
            variant="primaryOutline"
            classNames="px-3 py-[6px] text-sm font-bold">
            Apply
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <RadioOption
            code="WELCOME20"
            description="20% off on your first month"
            selected={selectedCoupon === "WELCOME20"}
            onSelect={() => setSelectedCoupon("WELCOME20")}
          />

          <RadioOption
            code="ANNUAL50"
            description="50% off on annual plans"
            selected={selectedCoupon === "ANNUAL50"}
            onSelect={() => setSelectedCoupon("ANNUAL50")}
          />
        </div>
      </div>
    </div>
  );
};

export default CouponSection;
