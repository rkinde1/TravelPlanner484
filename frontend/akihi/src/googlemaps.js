import './googlemaps.css';
import GoogleMapReact from 'google-map-react';
function ToggleGoogle () {
    return (
        <div>
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
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