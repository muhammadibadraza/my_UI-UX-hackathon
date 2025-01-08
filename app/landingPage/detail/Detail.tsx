import Sidebar from"@/app/landingPage/dashboard/sidebar";
import Cards from"@/app/landingPage/detail/cards";

export default function Dashboard() {
    return (
      <div className="flex items-start space-x-4">
        {/* Left Component */}
        <div className="flex">
          <Sidebar />
        </div>
  
        {/* Right-Aligned Vertical Stack */}
        <div className="flex flex-col items-center space-y-4">
          <div>
            <Cards />
          </div>
          
        </div>
      </div>
    );
  }