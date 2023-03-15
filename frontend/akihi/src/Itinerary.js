import './Itinerary.css';
import React, {useState} from 'react';

function Testing(){
    return (
        <p>Toggle Google Maps?</p>
    );
}

function CreateProjectButton() {
    return (
        <button type="button" >Create Project</button>
    );
}

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
            <fieldset>
                <div className="flex-container">
                    <button className="expand">Expand</button> 
                    <h1>Day 1</h1> 
                </div>
                <div id='duplicate'>
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