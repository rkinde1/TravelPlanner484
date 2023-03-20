import './Itinerary.js';
import './App.css';
import 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div className="home">
        <h1>Welcome to you Itinerary</h1>
        <CreateProjectButton/>
        <br></br>

        <Link to ={'login'}>Login</Link>
          <Link to={'itinerary'}>Itinerary</Link>
      </div>
      <Routes>
        <Route path ="/app" element = {<App/>}/>
        <Route path="login" element={<Login/>}></Route>
      <Route path ='itinerary' element={<Date/>}/>
      </Routes>
      <hr></hr>
    </div>
  </BrowserRouter>


  );
}

export default App;
