export default function Rental(){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Top 5 Car Rental</h1>
        <div className="flex flex-col-2 justify-between">             
            <img src="/admin/Chart.png" alt="chart" />
            <div className="flex flex-col ml-4">
                <div className="flex flex-row justify-between mt-4 mb-4"><li className="text-gray-400 mr-4">Sport Car</li><p className="text-sm">17,439</p></div>
                <div className="flex flex-row justify-between mb-4"><li className="text-gray-400 mr-4">SUV</li><p className="text-sm">9,478</p></div>
                <div className="flex flex-row justify-between mb-4"><li className="text-gray-400 mr-4">Coupe</li><p className="text-sm">18,197</p></div>
                <div className="flex flex-row justify-between mb-4"><li className="text-gray-400 mr-4">Hatchback</li><p className="text-sm">12,510</p></div>
                <div className="flex flex-row justify-between mb-4"><li className="text-gray-400 mr-4">MPV</li><p className="text-sm">14,406</p></div>
            </div>
        </div>
        </div>
    
  )
}