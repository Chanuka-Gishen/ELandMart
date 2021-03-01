import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/common/NavigationBar";
import AlertAnimation from "./components/animations/AlertAnimation";
import Login from "./components/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">

            {/*<AlertAnimation/>*/}
            <Router>
            <Switch>
                <Route path="/" exact component={NavigationBar}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
            </Router>
            {/*<Login/>*/}
            {/*<NavigationBar/>*/}
        </div>

    );
}

export default App;
