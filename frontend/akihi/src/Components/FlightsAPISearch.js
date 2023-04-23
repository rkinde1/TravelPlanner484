import React,{useState} from 'react';

function FlightsAPISearch(){
    const[destination,setdestination]=useState("");
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Where To:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
}
export default FlightsAPISearch