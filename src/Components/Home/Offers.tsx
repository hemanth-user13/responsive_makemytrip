import React, { useReducer } from "react";

import FlightCard from "../Pages/Flights/FlightCard";
import HotelCard from "../Pages/Hotels/Hotelcard";
import HolidayCard from "../Pages/HolidayPackage/HolidayCard";
import TrainCard from "../Pages/Trains/TrainCard";
import CabCard from "../Pages/Cabs/CabCard";
import BankOfferCard from "../Pages/TravelInsurance/InsuraceCard";

type OfferType =
  | "flights"
  | "hotels"
  | "holidays"
  | "trains"
  | "cabs"
  | "bank-offers"
  | "alloffers";

interface OfferState {
  type: OfferType;
}

type Action = { type: OfferType };

const reducer = (state: OfferState, action: Action): OfferState => {
  return { type: action.type };
};

const Offers: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { type: "alloffers" });

  const renderOfferContent = () => {
    switch (state.type) {
      case "flights":
        return <FlightCard />;
      case "hotels":
        return <HotelCard />;
      case "holidays":
        return <HolidayCard />;
      case "trains":
        return <TrainCard />;
      case "cabs":
        return <CabCard />;
      case "bank-offers":
        return <BankOfferCard />;
      case "alloffers":
      default:
        return <div>All Offers</div>;
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-16">
      <div
        className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200 w-11/12 max-w-6xl"
        style={{ height: "80vh" }}
      >
        <h3 className="font-serif font-semibold text-4xl text-left mb-4">
          Offers
        </h3>
        <div
          className="flex flex-wrap gap-4 mb-6 pb-2 border-b-4 border-b-stone-900"
          style={{ marginLeft: "200px", position: "absolute", top: "110px" }}
        >
          <a
            href="#alloffers"
            className="btn"
            onClick={() => dispatch({ type: "alloffers" })}
          >
            All Offers
          </a>
          <a
            href="#flights"
            className="btn"
            onClick={() => dispatch({ type: "flights" })}
          >
            Flights
          </a>
          <a
            href="#hotels"
            className="btn"
            onClick={() => dispatch({ type: "hotels" })}
          >
            Hotels
          </a>
          <a
            href="#holidays"
            className="btn"
            onClick={() => dispatch({ type: "holidays" })}
          >
            Holidays
          </a>
          <a
            href="#trains"
            className="btn"
            onClick={() => dispatch({ type: "trains" })}
          >
            Trains
          </a>
          <a
            href="#cabs"
            className="btn"
            onClick={() => dispatch({ type: "cabs" })}
          >
            Cabs
          </a>
          <a
            href="#bank-offers"
            className="btn"
            onClick={() => dispatch({ type: "bank-offers" })}
          >
            Bank Offers
          </a>
        </div>
        <div className="mt-8">{renderOfferContent()}</div>
      </div>
    </div>
  );
};

export default Offers;
