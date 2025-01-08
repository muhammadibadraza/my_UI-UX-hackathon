import React from "react";
import carDetail from"@/app/components/CarCard";
import Checkbox from "@/app/landingPage/dashboard/Checkbox";
import Link from "next/link";


// Define a type for the car object
type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
};

// Define props for the component
type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      {/* <img
        src={car.image}
        alt={car.name}
        className="h-40 object-cover rounded"
      /> */}
      <div className="flex flex-start justify-between col-2 space-x-4">
        <h2 className="text-xl font-semibold mt-4">{car.name}</h2>
        <h3><Checkbox /></h3>
        {/* <input
             id ="heart-checkbox"   
             type ="checkbox"
             className="hidden peer"
           /> */}
         {/* <h3 className="text-gray-600 hover:text-blue-600"><img src="/carspec/Like.png" alt="like" /></h3> */}
      
      </div>
      <div className="flex items-center pl-5 " id="image">
    <img
      src={car.image} // Replace with the car image path
      alt={car.name}   // Replace with a descriptive alt text
      className=" mx-auto object-cover"/>
       {/* Adjust the size and styling */}
       {/* <a href="#">View Details</a> */}
      </div>
      <div className="flex flex-start justify-between col-3 space-x-4">
      <h1 className="text-gray-600 hover:text-blue-600"><img src="/carspec/gas-station.png" alt="fuel" />Fuel</h1>
      <h2 className="text-gray-600 hover:text-blue-600"><img src="/carspec/manual.png" alt="manual" /></h2>
      <h3 className="text-gray-600 hover:text-blue-600"><img src="/carspec/people.png" alt="people" /></h3>
      </div>
      <div className="flex flex-start justify-between col-2 space-x-4">
        <div>
           <p className="text-gray-500 flex flex start">{car.price}</p>
           <p className="text-gray-500 flex flex-start">$80</p>
         </div>
         <Link href="/landingPage/dashboard">
         <button className="flex flex-end bg-blue-500 p-4 rounded-lg shadow-md hover:shadow-lg">
           Rent Now
         </button>
         </Link>
        </div>

      <a
        // href={`/cars/${car.id}`}
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
      
       View details
      
      </a>
    </div>
  );
}



