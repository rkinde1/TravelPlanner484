import React from 'react'
import "./Styling.css"
import video from './Assets/rock-15527.mp4'
import {Link} from 'react-router-dom'

function Hero(){
    return(
        // Add In Navbar for react.js so we can have to run all over
        <div>
            <div className='hero-container'>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
                <h1> START YOUR DREAM TO TRAVEL</h1>
                <p>No Need To Remember We Do It For You</p>

            <a href="/signup" className="btn btn-primary">Book Today!</a>

            </div>
        </div>
    )
}
export default Hero




