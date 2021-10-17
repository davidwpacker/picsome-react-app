import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
           
          
        </header>
      </div>
    </Router>
  );
}

export default App;
