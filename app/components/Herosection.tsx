// components/Herosectio
// components/Herosection.tsx

export default function HeroSection() {
  return (
    <section className="page py-5 px-4 md:py-8 md:px-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Cars</h2>

        {/* Cards Wrapper */}
        <div className="grid gap-6">

          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kstE2UUElhdObTXjky2sFnAm3aGp8MB4xA&s"
                alt="Car 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 1</h3>
                <p className="text-gray-600">This is the first featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGMKpF3LjWTJWJ5aMGqejOTk8sB0icLcU2Q&s"
                alt="Car 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 2</h3>
                <p className="text-gray-600">This is the second featured car card.</p>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="@/app/public/car.jpg"
                alt="Car 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 3</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car4.jpg"
                alt="Car 4"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 4</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car5.jpg"
                alt="Car 5"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 5</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
          </div>

          {/* Third Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car6.jpg"
                alt="Car 6"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 6</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car7.jpg"
                alt="Car 7"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 7</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car8.jpg"
                alt="Car 8"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 8</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
          </div>

          {/* Fourth Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car9.jpg"
                alt="Car 9"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 9</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car10.jpg"
                alt="Car 10"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 10</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src="/images/car11.jpg"
                alt="Car 11"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car 11</h3>
                <p className="text-gray-600">This is a featured car card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


//export default HeroSection;

// export default function Herosection() {
//   return (
//     < div className="flex justify-evenly">
//     <section className="bg-gray-100 py-6 md:py-12 px-4 md:px-12">
//       {/* <div className="flex flex-col md:flex-row justify-between items-center gap-8"> */}
//       <div className="flex flex-col md:flex-row items-left gap-4">
//         {/* Left Section */}
//         <div>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//             Find Your Perfect <span className="text-blue-600">Car</span>
//           </h1>
//           <p className="text-gray-500 mb-6">
//             Rent the car you love, easily and quickly with MORENT.
//           </p>
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500">
//             Explore Cars
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2">
//           <img
//             src=".\public\car.jpg" // Replace with your car image in /public
//             alt="Hero Car"
//             className="w-full object-contain"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-left gap-4">
//         {/* Left Section */}
//         <div>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//             Find Your Perfect <span className="text-blue-600">Car</span>
//           </h1>
//           <p className="text-gray-500 mb-6">
//             Rent the car you love, easily and quickly with MORENT.
//           </p>
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500">
//             Explore Cars
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2">
//           <img
//             src="./public/car.jpg" // Replace with your car image in /public
//             alt="Hero Car"
//             //className="w-full object-contain"
//           />
//         </div>
//       </div>

//     </section>
//     </div>
//   );
// }

// export default function HeroSection() {
//     return (
//       <section className="mt-16 p-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center bg-blue-50 rounded-lg p-6">
//             <div>
//               <h1 className="text-4xl font-bold text-blue-600 mb-4">
//                 Find the Perfect Car
//               </h1>
//               <p className="text-gray-600 mb-4">
//                 Choose from a wide range of cars with unbeatable prices.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
//                 Discover More
//               </button>
//             </div>
//             <div>
//               {/* Placeholder for a Hero Image */}
//               <img
//                 src="/hero-image.png"
//                 alt="Hero Car"
  //               className="max-w-md"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
  