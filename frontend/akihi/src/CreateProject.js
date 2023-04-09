import React, {useState} from "react";

export default function CreateProjectPage () {
    const [vacation_id, setVacationId] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [country, setCountry] = useState("");
    let handleSubmit = async (vacation_id, start_date, end_date, country) => {
            await fetch("http://localhost:3000/vacation", {
                method: "POST", 
                body: JSON.stringify({
                    vacation_id : vacation_id,
                    start_date : start_date,
                    end_date : end_date,
                    country : country
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }
    //upon submission, it will send request to backend
    //will redirect to itinerary
    return (
        <div>
            <form method="POST" action="" onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input type="text" name="vacation_id" placeholder="name of vacation" value={vacation_id} onChange={(e) => setVacationId(e.target.value)}></input>
                <label>Starting date</label>
                <input type="date" name="start" placeholder="start date" value={start_date} onChange={(e) => setStartDate(e.target.value)}></input>
                <label>End date</label>
                <input type="date" name="end" placeholder="end date" value={end_date} onChange={(e) => setEndDate(e.target.value)}></input>
                <label>Country</label>
                <input type="country" name="country" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

