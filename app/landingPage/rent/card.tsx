export default function Card(){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <div className="flex flex-col space-y-4">
            <div>
            <h2 className="text-lg font-semibold">Rental Summary</h2>            
            <p className="text-gray-400 text-sm text-left mb-4">Price may change depending on the the length of the rental and the price of your rental car</p>
            </div>
            <div className="flex flex-auto space-x-4">
            {/* <div className="grid grid-cols-2 gap-4"> */}
                <img src="/rent/Look.png" alt="car" />
                <div>
                 <label className="text-lg font-semibold mb-4">  Nissan GT-R</label>
                 <img src="/carhead/Review Star.png" alt="reviews" />
                </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Subtotal</p><p className="font-semibold">$80.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Tax</p><p className="font-semibold">$0</p>
            </div>
            <div className="flex flex-row items-corner bg-gray-100 w-full border rounded-md p-2">              
               <input
                type="text"
                className="bg-gray-100 w-full rounded-md p-2"
                placeholder="Apply promo code"
               />
               <div>
                <button className="flex flex-row items-center font-semibold">Apply Now</button>
                </div>                
            </div>
            <div className="flex flex-col-2 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Total Rental Price</h3> 
                <p className="text-gray-400 text-sm text-left">Overall price and include rental discounts</p>
              </div>
              <div className="font-semibold text-4xl">
                $80.00
              </div>
            </div>
            </div>
        </div>
    )
}