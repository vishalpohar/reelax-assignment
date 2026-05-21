import { Wallet } from "lucide-react";
import CouponSection from "./CouponSection";
import Button from "../common/Button";

const PaymentSummary = () => {
  return (
    <div className="flex flex-col gap-3 pt-[14px] pb-8 px-8 bg-white border border-[#E5E7EB] rounded-[10px]">
      <div className="flex flex-col gap-3 pt-3">
        <div className="flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded">
          <div className="flex gap-3">
            <div className="flex justify-center items-center w-8 h-8 bg-[#EFF6FF4D] rounded-2xl">
              <Wallet color="#1977F2" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[#111827] font-bold">Wallet Balance</p>
              <p className="text-xs text-[#6B7280] font-medium">
                ₹500.00 available
              </p>
            </div>
          </div>
          <Button
            variant="primaryOutline"
            classNames="px-3 py-[6px] text-sm font-bold">
            Apply
          </Button>
        </div>

        <CouponSection />

        <div className="flex flex-col gap-4 pt-2 pb-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#6B7280] font-medium">Subtotal</p>
            <p className="text-sm text-[#000000] font-semibold">₹14,999.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#6B7280] font-medium">Tax (18% GST)</p>
            <p className="text-sm text-[#000000] font-semibold">₹1,079.64</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
            <p className="text-lg text-[#111827] font-bold">Total due today</p>
            <p className="text-2xl text-[#1977F2] font-extrabold">₹16,078.64</p>
          </div>
          <Button variant="primary" classNames="py-4 text-base font-semibold">
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
