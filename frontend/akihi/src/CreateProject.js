import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './App.css';

export default function CreateProjectPage () {
    const [vacation_name, setVacationName] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [country, setCountry] = useState("");
    const [vacation_id] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    //create vacation link
    let handleSubmit = async (e) => {
        e.preventDefault();
        //Profile needs to show all projects
            await fetch('/api/vacation', {
                method: "POST", 
                body: JSON.stringify({
                    vacation_name : vacation_name,
                    start_date : start_date,
                    end_date : end_date,
                    country : country,
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8',
                    "Authorization" : 'Bearer ' + token,
                },
            })
            .then(function(response) {
                return response.json().then(function(text) {
                    if (response.status == 201) {
                        window.alert('Vacation has been created');
                        localStorage.setItem("vacation_id", JSON.stringify(text._id))
                    }
                });
            });
            await fetch('/api/itinerary', {
                method: "POST", 
                body: JSON.stringify({
                    _id: localStorage.getItem("vacation_id"),
                    vacation_name : vacation_name,
                    start_date : start_date,
                    end_date : end_date,
                    country : country,
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8',
                    "Authorization" : 'Bearer ' + token,
                },
            })
            .then(function(response) {
                return response.json().then(function(text) {
                    if (response.status == 201) {
                        // alert(JSON.stringify(text))
                        localStorage.setItem("itinerary_id", text._id)
                        // alert(text._id)
                        navigate('/itinerary')
                    }
                });
            });
    }
    //upon submission, it will send request to backend
    //will redirect to itinerary
    return (
        <div>
                <form method="POST" action="api/vacation" onSubmit={handleSubmit} className="form-group"> 
                    <h1>Fill out this form to start your Itinerary</h1>
                    <label>Name:</label>
                    <input required type="text" name="vacation_name" placeholder="name of vacation" value={vacation_name} onChange={(e) => setVacationName(e.target.value)}></input>
                    <br></br>
                    <label>Starting date</label>
                    <input required type="date" name="start" placeholder="start date" value={start_date} onChange={(e) => setStartDate(e.target.value)}></input>
                    <br></br>
                    <label>End date</label>
                    <input required type="date" name="end" placeholder="end date" value={end_date} onChange={(e) => setEndDate(e.target.value)}></input>
                    <br></br>
                    <label>Country</label>
                    <input required type="country" name="country" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                    <button type="submit">Create</button>
                </form>
        </div>
    )
}

