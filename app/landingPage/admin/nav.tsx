import Link from"next/link";

export default function Nav(){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg flex">
          <nav>
        <div className="flex flex-col flex-start mb-4">          
          <label className="block text-sm text-gray-400 font-medium mb-4">MAIN MENU</label>
         <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-col-2 space-x-2 mb-4 "><img src="/admin/dashboard.png" alt="dashboard" className="mr-4"/>Dashboard</button>
         <div><Link href="/landingPage/rent"><button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-col-2 space-x-2 mb-4 "><img src="/admin/car.png" alt="car" className="mr-4" />Car Rent</button></Link></div>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-col-2 space-x-2 mb-4"><img src="/admin/insight.png" alt="insight" className="mr-4" />Insight</button> 
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-col-2 space-x-2 mb-4"><img src="/admin/insight.png" alt="insight" className="mr-4" />Insight</button>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-4"><img src="/admin/reimburse.png" alt="reimburse" className="mr-4" />Reimburse</button>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-4"><img src="/admin/inbox.png" alt="calender" className="mr-4"/>Inbox</button>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-4"><img src="/admin/calendar.png" alt="calender" className="mr-4"/>Calender</button>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-sm text-gray-400 font-medium mb-4">PREFERENCES</label>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-4"><img src="/admin/setting.png" alt="dashboard" className="mr-4"/>Settings</button>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-4"><img src="/admin/help.png" alt="car" className="mr-4"/>Help & Center</button>
          <button className="text-gray-400 hover:bg-blue-600 rounded-md flex flex-row space-x-2 mb-"><img src="/admin/insight.png" alt="insight" className="mr-4"/>Dark Mode<img src="/admin/mode.png" alt="mode" /></button>
        </div>
        </nav>
        </div>
    )
}