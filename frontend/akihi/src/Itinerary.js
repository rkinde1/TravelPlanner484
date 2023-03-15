import './Itinerary.css';

function Testing(){
    return (
        <p>Toggle Google Maps?</p>
    );
}

function CreateProjectButton() {
    const handleClick = () => {
        //Function is called
        //New project number is created under the user account
        //Doesn't work: return(<h1>Hello my love</h1>);
    };
    return (
        <button type="button" onClick={handleClick}>Create Project</button>
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
    const addDay = () => {
        //When it calls itself, it will create another date
    }
    return(
        <div>
            <fieldset>
                <button>Expand</button> 
                <h1>Day 1</h1> 
                <button>+</button>
                <Notes />
            </fieldset>
        </div>
    );
}

export {Testing, Notes, CreateProjectButton, Date};