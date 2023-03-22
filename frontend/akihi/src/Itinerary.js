import './Itinerary.css';
import React, {useState} from 'react';
import ToggleGoogle from './googlemaps.js';

/*A testing button that will turn into a turn button for the google maps*/
function Testing(){
    return (
        <p>Toggle Google Maps?</p>
    );
}

/*When pressed this button will create another project under the username. It will send a window.alert for the 
user to input name, location, start, and end date
The location will send a request to Google Maps API
The start and end date will send data to Date

*/
function CreateProjectButton() {
    return (
        <button type="button" >Create Project</button>
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

//Will display date field set in which notes is under
function Date() {
    let addNewRow = () => {
        var div = document.getElementById('duplicate'),
        clone = div.cloneNode(true);
        clone.id = "some_id";
        document.body.appendChild(clone);
    }
    return(
        <div>
            <p>Toggle Google Maps?</p><ToggleGoogle />
            <fieldset id='duplicate'>
                <div className="flex-container">
                    <button className="expand">Expand</button> 
                    <h1>Day 1</h1> 
                </div>
                <div>
                    <button onClick={addNewRow}>+</button>
                    <select>
                        <option value="Flight">Flight</option>
                        <option value="hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="datetime-local" placeholder="Arrival Time"></input>
                    <input type="textfield" oninput="" placeholder="place"></input>
                    <input type="number" placeholder="Cost"></input>
                    <button>Delete Row</button>
                    <Notes />
                </div>
            </fieldset>
        </div>
    );
}

/*
function BookingForm() {
    const [events,setEvent] = useState(() => 'Date');
    let addDay = (e) => {
        e.preventDefault()
        setEvent([events, <Date key={events.length} />])
    }
    return (
        <div>
            {events}
            <button onClick={addDay}>+</button>
        </div>
    )
}
*/
export {Testing, Notes, CreateProjectButton, Date};