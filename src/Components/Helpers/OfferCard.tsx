import React from "react";

const TrainBookingImage = () => {
  return (
    <div className="flex flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2">
        <img
          src="path/to/your/image.jpg"
          alt="Year-End Train Bookings"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">RAILS</h2>
          <p className="text-lg text-gray-600 mt-2">
            YEAR-END TRAIN BOOKINGS OPEN
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Book by paying 25% of the fare* with our Seat Lock feature!
          </p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            BOOK NOW
          </button>
          <p className="text-xs text-gray-400 mt-2">T&C's Apply</p>
        </div>
      </div>
    </div>
  );
};

export default TrainBookingImage;
