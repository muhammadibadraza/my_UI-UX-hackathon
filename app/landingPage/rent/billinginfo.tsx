const BillingInfo = () => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        
        <h2 className="text-lg font-semibold">Billing Info</h2>
        <div className="flex flex-row justify-between">
         <h3 className="text-gray-400 text-sm text-left mb-4">Please enter your billing info</h3>
         <p className="text-gray-400 text-sm text-left mb-4">Step 1 of 4</p>
        </div>
        
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Town / City</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Town or city"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default BillingInfo;
  