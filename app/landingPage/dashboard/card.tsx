// export default function Card(){
//     return(
//       <>
//       Multiple Cards</>  
//     )
// }
import CarCard from "@/app/components/CarCard";

const cars = [
  { id: 1, name: "Koenigsegg", price: "$99.00/day", image: "/cars/Koenigsegg.png" },
  { id: 2, name: "Nissan GT-R", price: "$80.00/day", image: "/cars/Nissan GT-R.png" },
  { id: 3, name: "Rolls Royce", price: "$96.00/day", image: "/cars/Rolls Royce.png" },
  { id: 4, name: "All New Rush", price: "$72.00/day", image: "/cars/All New Rush.png" },
  { id: 5, name: "CR-V", price: "$80.00/day", image: "/cars/CR-V.png" },
  { id: 6, name: "All New Terios", price: "$74.00/day", image: "/cars/All New Terios.png" },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-between">
       <h1 className="text-md text-gray-400 mb-6">Recent Cars</h1>
       <h2 className="text-blue-400 text-sm">View All</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}