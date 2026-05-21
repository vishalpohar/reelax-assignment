import { CircleArrowUp } from "lucide-react";

const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[10px] p-8">
      <h1 className="text-2xl font-bold text-[#111827]">Order Summary</h1>
      <div className="flex flex-col px-6 py-5 bg-white border border-[#4388FF4D] rounded shadow-card">
        <div className="flex justify-between gap-[29px] flex-wrap">
          <p className="text-3xl font-extrabold text-[#111827] pb-2">
            ₹4,999
            <span className="text-base font-medium text-[#6B7280]">/month</span>
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-[#1977F2]">SELECTED PLAN</p>
            <p className="text-xl font-bold text-[#111827]">Startup</p>
          </div>
        </div>
        <p className="text-sm font-medium text-[#6B7280]">
          Includes 5,000 credits/mo.
        </p>
      </div>
      <button
        type="button"
        aria-label="Upgrade to Growth Plan"
        className="flex items-center justify-center gap-2 py-[10px] text-sm font-bold text-[#1977F2] bg-[#4378FF0D] border border-[#436FFF4D] rounded-3xl hover:scale-105 transition-all duration-200">
        <CircleArrowUp />
        Upgrade to Growth Plan
      </button>
    </div>
  );
};

export default OrderSummary;
