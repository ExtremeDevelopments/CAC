import logo from '../Hurricane.png';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="current-hurricanes">Check for current hurricanes.</button>
      </header>
    </div>
  );
}

export default App;
