export default function PaymentMethod(){
  return(
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <div className="flex flex-row justify-between">
       <p className="text-gray-400 text-sm text-left mb-4">Please select your payment method</p>
       <p className="text-gray-400 text-sm text-left mb-4">Step 3 of 4</p>
      </div>

      <div className="bg-gray-100 w-full rounded-md p-2 mb-4">
        <div className="flex flex-row justify-between mb-4"><li className="mb-4 font-semibold">Credit Card</li>
        <img src="/rent/Visa.png" alt="logo" /></div> 
      <form className="grid grid-cols-2 gap-4 bg-gray-100 mb-4">      
        <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Card Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Expiration Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Card Holder</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Card Holder"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CVC</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="CVC"
            />
          </div>
      </form>
      </div>
      <div className="bg-gray-100 w-full rounded-md p-2 mb-4 flex flex-row justify-between">
        <div className="flex flex-row flex-start">
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring focus:ring-gray"
            />
            <label className="block text-sm font-medium ml-1 mb-1">Paypal</label>
         </div>
            <div className="flex flex-end">
              <img src="/rent/paypal.png" alt="paypal" />
            </div>
      </div>
      <div className="bg-gray-100 w-full rounded-md p-2 mb-4 flex flex-row justify-between">
        <div className="flex flex-row">
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-blue-400 rounded focus:ring focus:ring-gray"
            />
            <label className="block text-sm font-medium ml-1 mb-1">Bitcoin</label>
         </div>
            <div className="flex flex-end">
              <img src="/rent/bitcoin.png" alt="bitcoin" />
            </div>
      </div>
    </div>
  )
}