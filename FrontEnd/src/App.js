import './App.css';
import Homepage from "./component/Homepage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/Register";



function App() {
  return (
    <>
      
        <Router>
       
        <div className="App">
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path="/Resume-Maker" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/resume" component={Homepage} />
              </Switch>
            </div>
          </div>
        </div>
        </Router>
    
    </>
  );
}

export default App;
