/*import React, { useState } from "react";
import axios from "axios";

const FlightBooking = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [flightOptions, setFlightOptions] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/flight-offers-search?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}`);
            setFlightOptions(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const bookFlight = (flightId) => {
        console.log(`Booking flight with id: ${flightId}`);
        // Implement booking functionality
    };

    return (
        <div>
            <h1>Flight Booking</h1>
            <div>
                <label htmlFor="origin">Origin:</label>
                <input id="origin" type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </div>
            <div>
                <label htmlFor="destination">Destination:</label>
                <input id="destination" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div>
                <label htmlFor="departureDate">Departure Date:</label>
                <input id="departureDate" type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="adults">Adults:</label>
                <input id="adults" type="number" min={1} value={adults} onChange={(e) => setAdults(e.target.value)} />
            </div>

            <button onClick={handleSearch}>Search</button>
            <div>
                {flightOptions.map((flight) => (
                    <div key={flight.id}>
                        <h2>{flight.itineraries[0].segments[0].departure.iataCode} to {flight.itineraries[0].segments[0].arrival.iataCode}</h2>
                        <p>Price: {flight.price.total}</p>
                        <button onClick={() => bookFlight(flight.id)}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlightBooking;
*/