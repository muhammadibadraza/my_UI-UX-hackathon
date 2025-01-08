// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-4">
//       <p>&copy; 2024 Morent Clone. All rights reserved.</p>
//     </footer>
//   );
// }

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">MORENT</h3>
            <p className="text-gray-500">
              Our vision is to provide convenience and help increase efficiency
              for transportation needs.
            </p>
          </div>
  
          {/* About Links */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">About</h3>
            <ul className="text-gray-500 space-y-1">
              <li>How it Works</li>
              <li>Featured</li>
              <li>Partnership</li>
            </ul>
          </div>
  
          {/* Community Links */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Community</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcasts</li>
            </ul>
          </div>
  
          {/* Socials */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Socials</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          © 2024 MORENT. All rights reserved.
        </div>
      </footer>
    );
  }
  