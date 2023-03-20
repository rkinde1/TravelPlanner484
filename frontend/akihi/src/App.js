import {CreateProjectButton, Date, Notes} from './Itinerary.js';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import Login from './login.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="home">
        <h1>Welcome to your Itinerary</h1>
        <CreateProjectButton />
        <br></br>
          <Link to={'/app'}>Home</Link>
          <Link to={'login'}>Login</Link>
          <Link to={'itinerary'}>Itinerary</Link>
        </div>
          <Routes>
              <Route index path="/" element={<App/>}/>
              <Route path="login" element={<Login/>}></Route>
              <Route path='itinerary' element={<Date />} />
          </Routes>
        <hr></hr>
    </div>
    </BrowserRouter>
  );
}

export default App;
