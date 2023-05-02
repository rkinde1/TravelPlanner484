import './googlemaps.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

const key = process.env.REACT_APP_API_KEY;
 


function ToggleGoogle () {
    //function that makes maps hideable
    const [map, returnMaps] = useState(false);
    const handleCheck = () => {
        if (map === true)
            returnMaps(false);
        else 
            returnMaps(true);
    }
    return (
        <div id="addmap">
            <label class="switch">
                <input id="toggle" type="checkbox" value={map} onClick={handleCheck}></input>
                <span class="slider round"></span>
            </label>
            {map && <Map />}
        </div>
    );
}

function Map () {
    const [destination, setDestination] = useState("");
    var [lat, setLat] = useState(44);
    var [long, setLong] = useState(2)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + destination + "&key=" + key, {
            method: "GET", 
        })
        .then(function(res) {
            return res.json().then(function(text) {
                alert(JSON.stringify(text.results[0].geometry.location))
                setLat(JSON.stringify(text.results[0].geometry.location.lat));
                setLong(JSON.stringify(text.results[0].geometry.location.lng));
                alert(lat)
                alert(long)
            });
        });
    }


    const location = {
        address: destination,
        lat: lat,
        lng: long
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)}></input>
                <button type="submit">Search</button>
                <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: key}}
                    defaultCenter={location}
                    defaultZoom={5}
                    >
                    </GoogleMapReact>
                </div>
                </div>
            </form>
        </div>
    )
}
export {ToggleGoogle, Map};