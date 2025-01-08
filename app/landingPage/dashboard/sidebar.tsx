export default function Sidebar(){
    return(
      <>
      <div className ="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg space-x-4">
        <h1 className="text-gray-400 mb-4">Type</h1>       
        
         <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring focus:ring-gray"
           />
           <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">Sport</span><p className="text-gray-400">(10)</p></div>
          </label>
         
         <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">SUV</span><p className="text-gray-400">(12)</p></div>
          </label>

         <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
           />
           <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">MPV</span><p className="text-gray-400">(16)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700  mr-1 ml-1">Sedan </span><p className="text-gray-400">(20)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">Coupe</span><p className="text-gray-400">(14)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">Hatchback</span><p className="text-gray-400">(14)</p></div>
          </label>

          <h2 className="text-gray-400 mb-4 mt-4">Capacity</h2>

          <label  className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">2 Person</span><p className="text-gray-400">(10)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">4 Person</span><p className="text-gray-400">(14)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">6 Person</span><p className="text-gray-400">(12)</p></div>
          </label>

          <label className= "flex flex-row mb-4">           
           <input
             type ="checkbox"
             className="form-checkbox h-5 w-5  text-green-600 rounded focus:ring focus:ring-gray"
            />
            <div className="flex flex-row"><span className="text-gray-700 mr-1 ml-1">8 or More</span><p className="text-gray-400">(10)</p></div>
          </label>
          <h3 className="text-gray-400 mb-4 mt-4">Price</h3>
          <img src="/carhead/price.png" alt="price" />
      </div>
      </>  
    )
}