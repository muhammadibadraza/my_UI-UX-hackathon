// export default function CarDetails({ params }) {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">Car Details - ID: {params.id}</h1>
//         <p>Here you can display more details about the car.</p>
//       </div>
//     );
//   }

  export default function CarDetails({ params }: { params: { id: string } }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Car Details - ID: {params.id}</h1>
        <p>Here you can display more details about the car with ID: {params.id}.</p>
      </div>
    );
  }
  
  