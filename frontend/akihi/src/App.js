import {CreateProjectButton, Date} from './Itinerary.js';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './login.js';
import Signup from './Signup.js';
import {UserInfo} from './Profile'
import Home from "./Home";
import CreateProjectPage from './CreateProject.js';
import NavBar from './navbar.js';
import Budget from './Budget.js';
import Logout from './logout.js';

//This establishes the routes
function App() {
  return (
    <BrowserRouter>
    <div className = "page-container">
      <div className="nav">
          <NavBar/>
      </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/logout" element={<Logout/>}/>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/itinerary' element={<Date />}/>
              <Route path = '/profile' element = {<UserInfo/>}/>
              <Route path = '/vacation' element = {<CreateProjectPage/>}/>
              <Route path = '/budget' element = {<Budget/>}/>
          </Routes>
        <hr></hr>
        </div>
    </BrowserRouter>
  );
}


export default App;
