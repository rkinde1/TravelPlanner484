import { useState } from "react";
import axios from "axios";

function HotelAPISearch() {
    const [location, setName] = useState("");

    return (
        <form>
            <label>Where To:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}
export default HotelAPISearch