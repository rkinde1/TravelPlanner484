import './Itinerary.css';
import React, {useState} from 'react';
import {ToggleGoogle, Map} from './googlemaps.js';
import Button from 'react-bootstrap/Button';
import NavBar from './navbar.js';

/*When pressed this button will create another project under the username. It will send a window.alert for the 
user to input name, location, start, and end date
The location will send a request to Google Maps API
The start and end date will send data to Date
*/
function CreateProjectButton() {
    return (
        <form action="/vacation">
            <input type="submit" value="Create Project"></input>
        </form>
    );
}

/*Separate Notes function that is part of a single place*/
function Notes() {
    return (
        <div>
            <fieldset className="noteSeparate">
                <legend>Notes: </legend>
                <labal>Have you booked this event?</labal><input type="checkbox"></input><br></br>
                <textarea></textarea>
            </fieldset>
        </div>
    );
}

function Event() {
    const[showMessage, setShowMessage] = useState(false);
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState("");
    const [place, setPlace] = useState("");
    return (
        <div className="flex-container">
                        <select className="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Flight">Flight</option>
                            <option value="hotel">Hotel</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="time" placeholder="Arrival Time" className="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                        <input type="number" placeholder="Cost" className="cost" value={cost} onChange={(e) => setCost(e.target.value)}></input>
                        <div
                            onMouseEnter={() => {
                                setShowMessage(true);
                            }}
                            onMouseLeave={()=>{
                                setShowMessage(false);
                            }}
                        >
                            <input type="textfield" placeholder="place" className="place" value={place} onChange={(e) => setPlace(e.target.value)}></input>
                            {showMessage && <Notes />}
                        </div>
                    </div>
    );
}

//Will display date field set in which notes is under
function Date() {
    //This is how we add another date on here
    //The duplicate cannot include the day here
    const [event, setEvent] = useState([<Event key={0} />])
    const [arrayOfEvents, setArrayOfEvents] = useState([

    ])
    let addNewRow = (e) => {
        e.preventDefault()
        setEvent([...event, <Event key={event.length} />]);
    }
    let deleteNewRow = (e) => {
        e.preventDefault();
        setEvent([<Event key={(event.length - 1)} />]);
    }
    return(
        <div>
            <fieldset>
                <form method="PATCH" action="">
                    <div className="flex-container">
                        <h1>Itinerary Events</h1>
                        <button onClick={addNewRow}>Add Event</button>
                        <button onClick={deleteNewRow}>Delete</button>
                        {event}
                    </div>
                </form>
                <p>Toggle Google Maps?</p><ToggleGoogle />
            </fieldset>
        </div>
    );
}

export {Notes, CreateProjectButton, Date, Event};