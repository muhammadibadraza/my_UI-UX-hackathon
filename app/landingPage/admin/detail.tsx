export default function Detail(){
    return(
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                <h1 className="font-semibold text-2xl mb-4">Details Rental</h1>
                <img src="/admin/Maps.png" alt="map" />
                <div className="flex flex-row justify-between mt-4">
                 <img src="/admin/Look.png" alt="car" className="mb-4"/>
                  <div className="flex flex-col mt-4">
                    <label className="font-semibold text-xl">Nissan GT-R</label>
                    <p className="text-gray-400">Sports Car</p>
                  </div>
                  <p className="text-gray-400">#9761</p>
                </div>
                <div>
                    <li className="font-semibold mb-4">Pick-Up</li>
                    <div className="flex flex-row justify-between mb-4">
                        <div className="flex flex-col"><label className="font-semibold">Location</label><p className="text-gray-400 text-sm">Kota Semanang</p></div>
                        <div className="flex flex-col"><label className="font-semibold">Date</label><p className="text-gray-400 text-sm">20 July 2022</p></div>
                        <div className="flex flex-col"><label className="font-semibold">Time</label><p className="text-gray-400 text-sm">07 : 00</p></div>
                    </div>
                </div>
                <div>
                    <li className="font-semibold mb-4">Drop-Off</li>
                    <div className="flex flex-row justify-between mb-4">
                        <div className="flex flex-col"><label className="font-semibold">Location</label><p className="text-gray-400 text-sm">Kota Semanang</p></div>
                        <div className="flex flex-col"><label className="font-semibold">Date</label><p className="text-gray-400 text-sm">21 July 2022</p></div>
                        <div className="flex flex-col"><label className="font-semibold">Time</label><p className="text-gray-400 text-sm">01 : 00</p></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="font-semibold">Total Rental Price</h1>
                    <p className="text-gray-400">Overall price and includes rental discount</p>
                </div>
                <h2 className="font-semibold text-xl">$80.00</h2>
                </div>
            </div>
        </div>
    )
}