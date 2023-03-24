import './googlemaps.css';
import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
function ToggleGoogle () {
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
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37,
        lng: 122
    }
    return(
        <div className="map">
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={location}
              defaultZoom={17}
            >
            </GoogleMapReact>
          </div>
        </div>
    )
}
export {ToggleGoogle, Map};