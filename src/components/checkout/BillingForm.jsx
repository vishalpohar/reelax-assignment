import Button from "../common/Button";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import { cities, states } from "../../data/locationData";

const BillingForm = () => {
  return (
    <div className="flex flex-col gap-[15px] bg-white rounded-[10px] px-[22px] py-[26px]">
      <h1 className="text-[26px] font-semibold text-[#111827]">
        Review your details
      </h1>
      <p className="text-xl font-bold text-[#505050]">Billing Information</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField label="Company Name" placeholder="abhigyan" />
        <InputField label="Email" placeholder="abhigyan.pandey@getreelax.com" />
        <InputField
          label="GST Number"
          optional={true}
          placeholder="GST Number"
        />
        <InputField
          label="PAN Number"
          optional={true}
          placeholder="PAN Number"
        />
        <InputField label="Premise/House no." placeholder="Premise/House no." />
        <InputField label="Street" placeholder="Street" />
        <SelectField label="State" options={states} />
        <SelectField label="City" options={cities} />
        <InputField label="Country" placeholder="India" />
        <InputField label="Pin Code" placeholder="Pincode" />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#E5E7EB]">
          <Button variant="secondary" classNames="py-[10px] px-6 text-base font-bold">
            Cancel
          </Button>
          <Button variant="primary" classNames="py-[13px] px-6 text-base font-bold">
            Save Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
