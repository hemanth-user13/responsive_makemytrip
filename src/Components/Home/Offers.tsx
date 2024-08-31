import React, { useReducer } from "react";

import FlightCard from "../Pages/Flights/FlightCard";
import HotelCard from "../Pages/Hotels/Hotelcard";
import HolidayCard from "../Pages/HolidayPackage/HolidayCard";
import TrainCard from "../Pages/Trains/TrainCard";
import CabCard from "../Pages/Cabs/CabCard";
// import BankOfferCard from "../Pages/TravelInsurance/InsuraceCard";
import BankOfferCard from "../../data";

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
          <button
            className="btn"
            onClick={() => dispatch({ type: "alloffers" })}
          >
            All Offers
          </button>
          <button className="btn" onClick={() => dispatch({ type: "flights" })}>
            Flights
          </button>
          <button className="btn" onClick={() => dispatch({ type: "hotels" })}>
            Hotels
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "holidays" })}
          >
            Holidays
          </button>
          <button className="btn" onClick={() => dispatch({ type: "trains" })}>
            Trains
          </button>
          <button className="btn" onClick={() => dispatch({ type: "cabs" })}>
            Cabs
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "bank-offers" })}
          >
            Bank Offers
          </button>
        </div>
        <div className="mt-8">{renderOfferContent()}</div>
      </div>
    </div>
  );
};

export default Offers;
