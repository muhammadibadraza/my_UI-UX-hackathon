export default function Recent(){
    return(
        <div className="bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg flex flex-col space-y-4">
            <h1 className="font-semibold text-2xl mb-4">Recent Transaction</h1>
          
            
                <div className="flex flex-row justify-between mt-4 divide divide-gray-400">
                 <img src="/cars/Nissan GT-R.png" alt="nissan"/>
                 <div className="flex flex-col ml-4 mr-4">
                    <label className="font-semibold">Nissan GT-R</label><p className="text-gray-400">Sport Car</p>
                 </div>                
                 <div className="flex flex-col"><p className="text-gray-400">20 July</p><p className="font-semibold">$80.00</p></div>
                </div>
           

            <div className="flex flex-row mt-4">
                <img src="/cars/Koenigsegg.png" alt="nissan"/>
                <div className="flex flex-col ml-4 mr-4">
                    <label className="font-semibold">Koenigsegg</label><p className="text-gray-400">Sport Car</p>
                </div>
                <div className="flex flex-col"><p className="text-gray-400">19 July</p><p className="font-semibold">$99.00</p></div>
            </div>

            <div className="flex flex-row mt-4">
                <img src="/cars/Rolls Royce.png" alt="rolls"/>
                <div className="flex flex-col ml-4 mr-4">
                    <label className="font-semibold">Rolls Royce</label><p className="text-gray-400">Sport Car</p>
                </div>
                <div className="flex flex-col"><p className="text-gray-400">18 July</p><p className="font-semibold">$96.00</p></div>
            </div>

            <div className="flex flex-row mt-4">
                <img src="/cars/CR-V.png" alt="nissan"/>
                <div className="flex flex-col ml-4 mr-4">
                    <label className="font-semibold">CR-V</label><p className="text-gray-400">SUV</p>
                </div>
                <div className="flex flex-col ml-4"><p className="text-gray-400">17 July</p><p className="font-semibold">$80.00</p></div>
            </div>          
        </div>
        </div>
    )
}