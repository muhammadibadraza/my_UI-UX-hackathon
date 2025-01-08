const RentalInfo = () => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        
        <h2 className="text-lg font-semibold">Rental Info</h2>
        <div className="flex flex-row justify-between"><p className="text-gray-400 text-sm text-left mb-4">Please select your rental date</p>
        <p className="text-gray-400 text-sm text-left mb-4">Step 2 of 4</p></div>
        

        <li className="font-semibold mb-4">Pick-Up</li>
        <form className="grid grid-cols-2 gap-4">          
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Select your city"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Time</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Select your time"
            />
          </div>
          </form>
          <li className="font-semibold mb-4 mt-4">Drop-Off</li>
          <form className="grid grid-cols-2 gap-4">
          
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Select your city"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Time</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Select your time"
            />
          </div>
          <div>
            <label className="block text-sm font-semiboldmb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default RentalInfo;
  