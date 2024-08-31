import {
  FaPlane,
  FaHotel,
  FaHome,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaTaxi,
  FaShieldAlt,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

interface CategoriesProps {
  styles?: string;
}

const Categories: React.FC<CategoriesProps> = ({ styles }) => {
  return (
    <div className={`${styles} flex items-center justify-center`}>
      <div className="bg-white py-6 px-8 flex justify-between items-center gap-4 sm:gap-6 md:gap-8 shadow-md rounded-3xl max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-2">
          <Link to="/">
            <FaPlane className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Flights
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/hotels">
            <FaHotel className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Hotels
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/homestays">
            <FaHome className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Homestays
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/Holidaypackage">
            <FaUmbrellaBeach className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Holidays
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/trains">
            <FaTrain className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Trains
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/buses">
            <FaBus className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Buses
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/cabs">
            <FaTaxi className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Cabs
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/insurance">
            <FaShieldAlt className="text-blue-500 text-3xl sm:text-4xl" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Travel Insurance
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
