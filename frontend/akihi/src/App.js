import './Itinerary.js';
import './App.css';
import 'react-router-dom';
import Testing from './Itinerary.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your Itinerary</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path="itinerary" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
