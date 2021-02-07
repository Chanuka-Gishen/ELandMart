import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/common/NavigationBar";
import AlertAnimation from "./components/animations/AlertAnimation";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            {/*<AlertAnimation/>*/}
            <Login/>
        </div>
    );
}

export default App;
