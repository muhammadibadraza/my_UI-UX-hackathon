import CarCard from "@/app/components/CarCard";
import Link from "next/link";

const cars = [
  { id: 1, name: "Koenigsegg", price: "$99.00/day", image: "/cars/Koenigsegg.png" },
  { id: 2, name: "Nissan GT-R", price: "$80.00/day", image: "/cars/Nissan GT-R.png" },
  { id: 3, name: "Rolls Royce", price: "$96.00/day", image: "/cars/Rolls Royce.png" },
  { id: 4, name: "Nissan GT-R", price: "$80.00/day", image: "/cars/Nissan GT-R.png" },
  { id: 5, name: "All New Rush", price: "$72.00/day", image: "/cars/All New Rush.png" },
  { id: 6, name: "CR-V", price: "$80.00/day", image: "/cars/CR-V.png" },
  { id: 7, name: "All New Terios", price: "$74.00/day", image: "/cars/All New Terios.png" },
  { id: 8, name: "CR-V", price: "$80.00/day", image: "/cars/CR-V.png" },
  { id: 9, name: "MG ZX Exclusive", price: "$76.00/day", image: "/cars/MG ZX.png" },
  { id: 10, name: "New MG ZS", price: "$80.00/day", image: "/cars/New MG ZS.png" },
  { id: 11, name: "MG ZX Excite", price: "$74/day", image: "/cars/MG ZX.png" },
  { id: 12, name: "New MG ZS", price: "$80.00/day", image: "/cars/New MG ZS.png" },
];


export default function Home() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold mb-6 flex justify-center">Find Your Dream Car</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-4 mt-4 ml-4 mr-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center"> 
        <Link href="/landingPage/detail">
          <button className="bg-blue-500 justify-center text-white px-4 py-2 mt-4 rounded-md">
            Show More Cars
          </button>
        </Link>
      </div>
    </div>
  );
}