import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1> *testing github pages w/ react and github actions</h1>
          </p>
           
          
        </header>
      </div>
    </Router>
  );
}

export default App;
