import React from 'react'
import "./Styling.css"
import video from './Assets/plane.mp4'
import {Link} from 'react-router-dom'

function Hero(){
    return(
        // Add In Navbar for react.js so we can have to run all over
        <div>
            <div className='hero-container'>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
                <h1> START YOUR DREAM TO TRAVEL</h1>
                <p>No Need To Remember We Do It For You</p> 
                <br></br>
                <br></br>

            <Link to="/signup" className="btn btn-primary">Book Today!</Link>

            </div>
        </div>
    )
}
export default Hero




