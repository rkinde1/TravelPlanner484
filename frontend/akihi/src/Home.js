import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//HOME PAGE
function Home(){
    return(
        <div>
            <Hero/>
        </div>
    )
}
export default Home