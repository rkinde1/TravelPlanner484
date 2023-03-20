import React from 'react'
import './App.css'
import video from './Components/Assets/beach-3998.mp4'

const Home =()=>{
    return(
        // Add In Navbar for react.js so we can have to run all over
        <section className='Home'>
            <div className ="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
        </section>
    )
}
export default Home