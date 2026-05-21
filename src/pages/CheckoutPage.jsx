import { ArrowLeft } from "lucide-react";
import BillingForm from "../components/checkout/BillingForm";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentSummary from "../components/checkout/PaymentSummary";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[1120px] mx-auto py-3 px-4 md:px-0">
      <button
        type="button"
        aria-label="Back to plans"
        className="self-start inline-flex items-center gap-2 text-sm text-[#6B7280] font-medium hover:-translate-y-1 transition-all duration-200">
        <ArrowLeft size={16} strokeWidth={1.75} /> Back to plans
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-7">
          <BillingForm />
        </section>
        <aside className="lg:col-span-5 flex flex-col gap-[15px]">
          <OrderSummary />
          <PaymentSummary />
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
