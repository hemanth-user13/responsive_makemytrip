import React, { useEffect, useReducer } from "react";
import axios from "axios";

// Define types for the API response
interface ApiResponse {
  best_flights: Flight[];
}

interface Flight {
  type: string;
  price: number;
  total_duration: number;
  carbon_emissions: {
    this_flight: number;
  };
  flights: FlightLeg[];
}

interface FlightLeg {
  airline: string;
  flight_number: string;
  departure_airport: {
    name: string;
    id: string;
    time: string;
  };
  arrival_airport: {
    name: string;
    id: string;
    time: string;
  };
  duration: number;
  airplane: string;
  travel_class: string;
  legroom: string;
  extensions: string[];
}

// Define action types and reducer
type Action =
  | { type: "FETCH_SUCCESS"; payload: Flight[] }
  | { type: "FETCH_FAILURE"; error: string };

interface State {
  flights: Flight[];
  error: string | null;
}

const initialState: State = {
  flights: [],
  error: null,
};

const flightsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, flights: action.payload, error: null };
    case "FETCH_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const FlightSearch: React.FC = () => {
  const [state, dispatch] = useReducer(flightsReducer, initialState);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8003/flights"
        );
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data.best_flights,
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", error: "Failed to fetch flights" });
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Flight Search Results</h1>
      {state.error ? (
        <p>{state.error}</p>
      ) : state.flights && state.flights.length > 0 ? (
        <ul>
          {state.flights.map((flight, index) => (
            <li key={index}>
              <h2>
                {flight.type} - ${flight.price}
              </h2>
              <p>Total Duration: {flight.total_duration} minutes</p>
              <p>Carbon Emissions: {flight.carbon_emissions.this_flight} kg</p>
              {flight.flights.map((leg, legIndex) => (
                <div key={legIndex}>
                  <h3>
                    {leg.airline} - {leg.flight_number}
                  </h3>
                  <p>
                    {leg.departure_airport.name} ({leg.departure_airport.id}) -{" "}
                    {leg.arrival_airport.name} ({leg.arrival_airport.id})
                  </p>
                  <p>Departure Time: {leg.departure_airport.time}</p>
                  <p>Arrival Time: {leg.arrival_airport.time}</p>
                  <p>Duration: {leg.duration} minutes</p>
                  <p>Airplane: {leg.airplane}</p>
                  <p>Travel Class: {leg.travel_class}</p>
                  <p>Legroom: {leg.legroom}</p>
                  <ul>
                    {leg.extensions.map((ext, extIndex) => (
                      <li key={extIndex}>{ext}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default FlightSearch;
