import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import './App.css';

const token = localStorage.getItem("token");

export function DeleteVacation () {
    //get id from vacation presed
    //send id to backend through fetch
    let delete2 = () => {
        fetch("/api/vacation", {
            method: "DELETE", 
            body: JSON.stringify({
                id: localStorage.getItem("vacation_id")
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                "Authorization" : 'Bearer ' + token,
            },
        })
        .then(function(res) {
            localStorage.setItem("vacation_id", null)
            return res.json().then(function(text) {
                alert('Deleted');
            });
        });
    }
    return (
        <div>
            <form action="/api/vacation" method="DELETE" onSubmit={delete2}>
                <input type="textfield" name="id" value={localStorage.getItem("vacation_id")}></input>
                <button type="submit">Delete Vacation</button>
            </form>
        </div>
    );
}

//Create a function here that user clicks delete on name of vacation
//Sends to backend and deletes with matching id

export function FindVacations () {
    const vacationName = useState("");
    const listOfVacations = async () => {
        await fetch('/api/vacation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //This is sent to back end
                'Authorization' : 'Bearer ' + token
            },
        })
        .then(function(response) {
            //Checks what the status code is and works
            if (response.status == 200) {
                //returns json response
                return response.text().then(function(text) {
                    alert(text);
                    alert(text)
                });
            }
            else {
                alert('Unsuccessful');
            }
        });
    }

    useEffect(()=> {
        listOfVacations();
    }, []);
    return (
        <div>

        </div>
    );
}

export default DeleteVacation;