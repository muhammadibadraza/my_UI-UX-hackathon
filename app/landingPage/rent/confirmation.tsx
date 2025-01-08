import Link from "next/link";
import Admin from"@/app/landingPage/admin/Admin";

const Confirmation = () => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-row justify-between"><h2 className="text-lg font-semibold">Confirmation</h2><p className="text-gray-400 text-sm text-left mb-4">Step 4 of 4</p></div>
        <h3 className="text-gray-400 text-sm text-left mb-4">We are getting close to the end.Just few clicks and your rental is ready!</h3>
        <div className="space-y-4">
          <div>
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" className="ml-2">
              I agree with sending marketing emails
            </label>
          </div>
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="ml-2 mb-4">
              I agree with terms and conditions
            </label>
          </div>
          <Link href="/landingPage/admin">
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
            Rent Now
          </button>
          </Link>
        </div>
        <div> 
          <img src="/rent/secure.png" alt="" />
          <p className="text-sm mt-4">All your data are safe</p>
          <p className="flex text-sm text-gray-400">We are using the most advanced security to provide you thy best experience ever</p>
        </div>

        </div>
    )
  };
  
  export default Confirmation;
  