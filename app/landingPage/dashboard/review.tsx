export default function Review(){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg mt-8 mb-8">
        <div className="flex flex-row flex-start">
         <h1 className="font-semibold text-2xl mb-4">Reviews</h1>
         <button className="bg-blue-500 justify-center text-white text-sm px-2 py-1 ml-4 rounded-md mb-4">12</button>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-row">
            <div><img src="/carhead/profile.png" alt="pic" className="flex mt-2" /></div>      
            <div className="flex flex-col ml-4">
              <h1 className="text-xl font-semibold">Alex Stanton</h1>
              <p className="text-gray-400 text-sm mb-4">CEO at Bukalapak</p>
              <p className="flex text-sm mb-4 text-gray-400">We are happy with the service from the MORENT App.Morent has a low price and also a large variety of cars with good and comfortable facilities.In addition,the service provided by the officers is also very friendly and very polite.</p>
            </div>

            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">21July,2022</p>
              <img src="/carhead/review.png" alt="review" />
            </div>
            <p className="flex"></p>
          </div>
        </div>

        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-row">
            <div><img src="/carhead/profile2.png" alt="pic" className="flex mt-2" /></div>      
            <div className="flex flex-col ml-4">
              <h1 className="text-xl font-semibold">Skylar Dias</h1>
              <p className="text-gray-400 text-sm mb-4">CEO at Amazon</p>
              <p className="flex text-sm mb-4 text-gray-400">We are greatly helped by the MORENT Application.Morent has a low price and also a large variety of cars with good and comfortable facilities.In addition,the service provided by the officers is also very friendly and very polite.</p>
            </div>

            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">20July,2022</p>
              <img src="/carhead/review.png" alt="review" />
            </div>
            <p className="flex"></p>
          </div>
        </div>
        <div className="text-gray-400 text-sm flex justify-center">
          <p>Show all</p>
          </div>
      </div>
    )
}