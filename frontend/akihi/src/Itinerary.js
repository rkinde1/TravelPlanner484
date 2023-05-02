import './Itinerary.css';
import React, {useState, useEffect} from 'react';
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
    const [checkbox, setCheckbox] = useState('');
    return (
        <div>
            <fieldset className="noteSeparate">
                <legend>Notes: </legend>
                <labal>Have you booked this event?</labal><input type="checkbox" name="checkbox" value={checkbox} onChange={(e) => setCheckbox(e.target.value)}></input><br></br>
                <textarea></textarea>
            </fieldset>
        </div>
    );
}

function Event (props) {
    const[message, setMessage] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const token = localStorage.getItem("token");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState("");
    const [place, setPlace] = useState("");
    const [array, setArray] = useState([{
        message: message,
        checkbox: checkbox,
        category: category,
        time: time,
        cost: cost,
        place: place
    }])
    //send vacation_id in header
    const vacation_id = useState('');
    //Must have id of vacationId
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/event", {
            method: "PATCH", 
            body: JSON.stringify({
                message: message,
                checkbox: checkbox,
                category: category,
                time: time,
                cost: cost,
                place: place
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            return res.text().then(function(text) {
                alert(text);
                alert("Saved")
            });
        });
    }
    return (
        <div className="flex-container">
            <form action="/api/event" method="PATCH" onSubmit={handleSubmit}>
                        <select className="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Flight">Flight</option>
                            <option value="hotel">Hotel</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="time" name="time" placeholder="Arrival Time" className="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                        <input type="number" name="cost" placeholder="Cost" className="cost" value={cost} onChange={(e) => setCost(e.target.value)}></input>
                            <input type="textfield" name="place" placeholder="place" className="place" value={place} onChange={(e) => setPlace(e.target.value)}></input>
                        <legend>Notes: </legend>
                        <label>Have you booked this event?</label><input type="checkbox" name="checkbox" value={checkbox} onChange={(e) => setCheckbox(e.target.value)}></input><br></br>
                        <textarea type="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit">Save</button>
            </form>
        </div>
                    
    );
}

//Will display date field set in which notes is under
function Date() {
    //This is how we add another date on here
    //The duplicate cannot include the day here
    const [event, setEvent] = useState([
        
        <Event key={0} />

    ])
    const [arrayOfEvents, setMyArrayOfEvents] = useState([{

    }]);
    const token= localStorage.getItem("token");
    let addNewRow = (e) => {
        e.preventDefault()
        setEvent([...event, <Event key={event.length}
        />]);
        alert(event[0].time)
    }

    let deleteNewRow = (e) => {
        e.preventDefault();
        setEvent([<Event key={(event.length - 1)} />]);
    }

    let getItinerary = () => {
        fetch("/api/itinerary", {
            method: "GET", 
            body: ({

            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            return res.text().then(function(text) {
                alert(text);
            });
        });
    }
    useEffect(()=> {
        getItinerary();

    }, []);
    return(
        <div>
            <fieldset>
                <div className="flex-container">
                    <h1>Itinerary Events</h1>
                    <button onClick={addNewRow}>Add Event</button>
                    <button onClick={deleteNewRow}>Delete</button>
                    {/* This will show all of the Event functions */}
                    {event}
                </div>
                <p>Toggle Google Maps?</p><ToggleGoogle />
            </fieldset>
        </div>
    );
}

export {Notes, CreateProjectButton, Date, Event};