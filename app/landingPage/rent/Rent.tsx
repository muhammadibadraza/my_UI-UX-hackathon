import BillingInfo from"@/app/landingPage/rent/billinginfo";
import RentalInfo from"@/app/landingPage/rent/rentalinfo";
import PaymentMethod from"@/app/landingPage/rent/payment";
import Confirmation from"@/app/landingPage/rent/confirmation";
import Card from"@/app/landingPage/rent/card";

export default function Rent() {
  return (
    <div className="flex flex-col-2 bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
        <BillingInfo />
        <RentalInfo />
        <PaymentMethod />
        <Confirmation />
      </div>
      <div className="ml-4">
        <Card />
      </div>
    </div>
  );
}
