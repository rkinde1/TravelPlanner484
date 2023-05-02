import './Itinerary.css';
import React, {useState, useEffect} from 'react';
import {ToggleGoogle, Map} from './googlemaps.js';
import Button from 'react-bootstrap/Button';
import NavBar from './navbar.js';

const token = localStorage.getItem("token");
let id = 0;

function Event () {
    const[message, setMessage] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState("");
    const [place, setPlace] = useState("");
    const [event, setEvent] = useState([
    ])
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
            message: message
        }])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/event", {
            method: "PATCH", 
            body: JSON.stringify(event),
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
            <fieldset>
                <div className="flex-container">
                    <h1>Itinerary Events</h1>
                </div>
                <form action="/api/event" method="PATCH" onSubmit={handleSubmit}>
                    <select className="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Flight">Flight</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="time" name="time" placeholder="Arrival Time" className="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                    <input type="number" name="cost" placeholder="Cost" className="cost" value={cost} onChange={(e) => setCost(e.target.value)}></input>
                        <input type="textfield" name="place" placeholder="place" className="place" value={place} onChange={(e) => setPlace(e.target.value)}></input>
                    <legend>Notes: </legend>
                    <label>Have you booked this event?</label><input type="checkbox" name="checkbox" value={checkbox} onChange={(e) => setCheckbox(e.target.value)}></input><br></br>
                    <textarea type="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button onClick={addEvent}>Add Event</button>
                    {event.map(event => (
                        <p key={event.id}>{event.time} {event.place} Cost of Event: {event.cost} Has it been booked? {event.checkbox}</p>
                    ))}
                    <button type="submit">Save</button>
                </form>
                <p>Toggle Google Maps?</p><ToggleGoogle />
            </fieldset>
        </div>
                    
    );
}

export {Event};