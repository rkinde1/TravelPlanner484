import './googlemaps.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

function ToggleGoogle () {
    //function that makes maps hideable
    const [map, returnMaps] = useState(false);
    const handleCheck = () => {
        if (map == true)
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
    const [destination, setDestination] = useState('');

    const location = {
        address: destination,
        lat: 37,
        lng: 122
    }
    const key = process.env.REACT_APP_API_KEY;
    return(
        <div>
            <input type="text" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)}></input>
            <div className="map">
            <div className="google-map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: key}}
                defaultCenter={location}
                defaultZoom={1}
                >
                </GoogleMapReact>
            </div>
            </div>
        </div>
    )
}
export {ToggleGoogle, Map};