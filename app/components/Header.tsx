// export default function Header() {
//   return (
//     <header className="bg-white shadow p-4">
//       <nav className="flex justify-between items-center">
//         <a href="/" className="text-2xl font-bold text-blue-600">Morent</a>
//         <div>
//           <a href="#" className="mx-2 text-gray-600 hover:text-blue-600">Home</a>
//           <a href="#" className="mx-2 text-gray-600 hover:text-blue-600">Cars</a>
//           <a href="#" className="mx-2 text-gray-600 hover:text-blue-600">About</a>
//         </div>
//       </nav>
//     </header>
//   );
// }

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <nav className="width:1440px height:124px border:1px flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MORENT</div>

        {/* Search Bar */}
        {/* <div className="width: 492px;height: 44px;top: 40px;left: 272px;gap: 0px"> */}
        <a>
        <div className="search-wrapper border-1 bg-white px-4 py-3 md:p-0 w-full flex gap-4 items-center justify-start fixed -top-40px left-272px right-0 md:static focus:outline-blue-500">
          <input
            type="text"
            placeholder="Search something here"
            className="border-1 focus:outline-blue-500"
          />
          <img src="/navbar/filter.png"/>
          </div>
          </a>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-blue-600"><img src="/navbar/Like.png" alt="like" /></button>
          <button className="text-gray-600 hover:text-blue-600"><img src="/navbar/notification.png" alt="notify" /></button>
          <button className="text-gray-600 hover:text-blue-600"><img src="/navbar/setting-2.png" alt="settings" /></button>
          <button className="w-8 h-8 rounded-full bg-gray-300"><img src="/navbar/profile.png" alt="Profile" /></button>
        </div>
      </nav>
    </header>
  );
}

