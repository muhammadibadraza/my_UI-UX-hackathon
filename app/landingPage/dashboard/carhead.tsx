import Link from "next/link";
import Review from "./review";

export default function Carhead(){
  return(
    <div>
    <div className="flex flex-col-2 gap-6">
     <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="flex flex-col items-center space-y-4">
         <div className="flex items-center pl-5 " id="image">
         <img
          src="/carhead/head.png"// Replace with the car image path
          alt="car" // Replace with a descriptive alt text
          className="w-492px h-360px mx-auto object-cover"/>
          </div>
         <div className="flex flex-between mx-auto items-center space-x-2">
             <h1 className="text-gray-600 hover:text-blue-600"><img src="/carhead/View 1.png" alt="Thumb 1" className="w-150px h-128px object-cover rounded-md " /></h1>
             <h2 className="text-gray-600 hover:text-blue-600"><img src="/carhead/View 2.png" alt="Thumb 2" className="w-148px h-124px object-cover rounded-md" /></h2>
             <h3 className="text-gray-600 hover:text-blue-600"><img src="/carhead/View 3.png" alt="Thumb 3" className="w-148px h-124px object-cover rounded-md" /></h3>
           </div>
       </div>
       </div>
  
       <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <div className="flex flex-col mb-4">
              <h1 className="text-2xl font-semibold">Nissan GT-R</h1>
             <div className="flex flex-row"><img src="/carhead/review.png" alt="stars" /><p className="text-gray-400 ml-4">477+ Reviews</p></div>
             <div><p className="flex flex-shrink text-gray-400 text-sm mt-4 mb-4">MORENT has become the embodient of Nissan's outstanding performance,inspired by the most unforgiving proving ground,the "race track"</p></div>
             <div className="flex flex-row justify-between space-x-4">
               <h1 className="text-gray-400">TypeCar</h1><h2>Sport</h2><h3 className="text-gray-400">Capacity</h3><h4>2Person</h4>
              </div>
             <div className="flex flex-row justify-between space-x-4">
               <h1 className="text-gray-400">Stearing</h1><h2>Manual</h2><h3 className="text-gray-400">Gasoline</h3><h4>70L</h4>
              </div>
             <div className="flex flex-row justify-between items-baseline mt-8">
               <div className="flex flex-row">
                 <div className="flex flex-col mt-4">
                  <h1 className="text-2xl font-semibold">$80.00/</h1><p>$70.00</p>
                 </div>
                 <div>
                   <h2 className="text-gray-400 text-md mt-6">day</h2>
                 </div>
               </div>
               <Link href="/landingPage/admin"> 
                 <button className="bg-blue-500 justify-center text-white px-4 py-2 mt-4 rounded-md">
                  Rent Now
                 </button>  
               </Link>       
            </div>
         </div>
      </div>
      </div>
        <Review />
      </div>
  )}
  
