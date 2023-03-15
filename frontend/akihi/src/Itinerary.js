import './Itinerary.css';

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
    let i = 1;
    var original = document.getElementById('duplicate');
    const addDay = () => {
        var clone = original.cloneNode(true);
        i++;
        clone.id = 'duplicate' + i;
        original.parentNode.appendChild(clone);
        //When it calls itself, it will create another date
    }    
    return(
        <div>
            <fieldset>
                <button>Expand</button> 
                <h1>Day 1</h1> 
                <div id="duplicate">
                    <button onclick={addDay}>+</button>
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
export {Testing, Notes, CreateProjectButton, Date};