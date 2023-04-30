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
import PrivateRoute from './util/privateRoute.js';

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
              <Route path='/signup' element={<Signup/>}></Route>
              <Route element={<PrivateRoute />}>
                <Route path='/itinerary' element={<Date />} exact/>
                <Route path = '/profile' element = {<UserInfo/>} exact/>
                <Route path = '/vacation' element = {<CreateProjectPage/>} exact/>
                <Route path = '/budget' element = {<Budget/>} exact/>
              </Route>
          </Routes>
        <hr></hr>
        </div>
    </BrowserRouter>
  );
}


export default App;
