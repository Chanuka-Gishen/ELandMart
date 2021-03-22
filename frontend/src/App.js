import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/common/NavigationBar";
import AlertAnimation from "./components/animations/AlertAnimation";
import Login from "./components/Login";
import Validate from "./components/Validate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<AlertAnimation/>*/}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Validate">Validate</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={NavigationBar}></Route>
            <Route path="/login" exact component={Login} />
            <Route path="/Validate" exact component={Validate} />
          </Switch>
        </div>
      </Router>
      {/*<Login/>*/}
      {/*<NavigationBar/>*/}
    </div>
  );
}

export default App;
