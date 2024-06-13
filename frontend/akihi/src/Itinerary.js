import './Itinerary.css';
import React, {useState, useEffect} from 'react';
import {ToggleGoogle, Map} from './googlemaps.js';
import Button from 'react-bootstrap/Button';
import NavBar from './navbar.js';
import EditSpecificVacation from './EditItinerary'
import DeleteVacation from './deleteVacation';

const token = localStorage.getItem("token");
let id = 0;

function Event () {
    const [checkbox, setCheckbox] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState("");
    const [place, setPlace] = useState("");
    const [event, setEvent] = useState([
    ])
    const [finalEvents, setFinalEvents] = useState([])
    //send vacation_id in header
    const vacation_id = useState('');
    //Must have id of vacationId
    const addEvent = async (e) => {
        e.preventDefault();
        setEvent([...event, {
            id: id++,
            category: category,
            time: time,
            cost: cost,
            place: place,
            checkbox: checkbox,
        }])
    }

    //This will send the events to itinerary as a patch update
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/itinerary/:id", {
            method: "PATCH", 
            body: JSON.stringify({
                _id: localStorage.getItem("itinerary_id"),
                events: event
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            return res.json().then(function(text) {
                // alert(JSON.stringify(text));
                // setFinalEvent(JSON.stringify(text.events))
                // alert(JSON.stringify(text.events))
                alert("Saved")
            });
        });
    }
    
    //Gets the final Itinerary after everything has been saved
    const finalItinerary = () => {
        fetch("/api/itinerary/vacationName", {
            method: "POST", 
            body: JSON.stringify({
                vacationName: localStorage.getItem("vacationName")
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            return res.json().then(function(text) {
                //This is what sets up the final Itinerary
                if (JSON.stringify(text[0].Events.length) == 0) {
                    // setFinalEvents("Current Itinerary is empty");
                }
                else {
                    setFinalEvents(JSON.parse(JSON.stringify(text[0].Events)))
                }
            });
        });
    }

    useEffect(() => {
        finalItinerary();
    })
    return (
        <div className="flex-container">
            <div>
                <EditSpecificVacation/>
            </div>
                <div class = "itinerary">
                <h2>Current Vacation: {localStorage.getItem("vacationName")}</h2>
                    <h1>Itinerary Events</h1>
                    <div className="event-container">
                        {finalEvents.map((event) => (
                                <div className="event">
                                    <h3>Category: {event.category}</h3>
                                    <h3>Time: {event.time}</h3>
                                    <h3>Cost: {event.cost}</h3>
                                    <h3>Place: {event.place}</h3>
                                    <h3>Has it been booked: {event.checkbox}</h3>
                                </div>
                        ))}
                        </div>
                <h1>Add Event</h1>
                <form action="/api/itinerary/:id" method="PATCH" onSubmit={handleSubmit}>
                    <select className="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Flight">Flight</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="time" name="time" placeholder="Arrival Time" className="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                    <input type="number" name="cost" placeholder="Cost" className="cost" value={cost} onChange={(e) => setCost(e.target.value)}></input>
                    <input type="textfield" name="place" placeholder="place" className="place" value={place} onChange={(e) => setPlace(e.target.value)}></input>
                    <input type="textfield" name="checkbox" placeholder="Have you booked this event?" className="place" value={checkbox} onChange={(e) => setCheckbox(e.target.value)}></input>
                    <button onClick={addEvent}>Add Event</button>
                    {event.map(event => (
                        <p key={event.id}>{event.key} Time: {event.time} place: {event.place} Cost of Event: {event.cost} Has it been booked? {event.checkbox}</p>
                    ))}
                    <button type="submit">Save Itinerary</button>
                </form>
                <p>Toggle Google Maps?</p><ToggleGoogle />
                </div>
                <div className='deleteItinerary'>
                <h1 className="delete">Delete Vacation</h1>
                <DeleteVacation/>
                </div>
        </div>
                    
    );
}

export {Event};