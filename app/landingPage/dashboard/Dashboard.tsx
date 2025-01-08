import Sidebar from"@/app/landingPage/dashboard/sidebar"
import Carhead from"@/app/landingPage/dashboard/carhead"
import Card from"@/app/landingPage/dashboard/card"

// export default function Dashboard(){
//     return( 
//         <>
//         <div className = "flex items-center justify-between px-4">
//       <div className ="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"> <Sidebar />   </div>
//       <div><Carhead /></div>
//       </div>
//       <div><Card /></div>
       
//        </> 
//     )
// }

export default function Dashboard() {
    return (
      <div className="flex items-start space-x-4">
        {/* Left Component */}
        <div>
          <Sidebar />
        </div>
  
        {/* Right-Aligned Vertical Stack */}
        <div className="flex flex-col items-center space-y-4">
          <div>
            <Carhead />
          </div>
          <div>
            <Card />
          </div>
          <div className="bg-white text-white p-4 w-40 rounded">
            Component 3
          </div>
        </div>
      </div>
    );
  }
  