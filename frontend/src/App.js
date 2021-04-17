import './App.css';
import NavigationBar from "./components/commonComponents/NavigationBar";
import AboutUs from "./components/aboutUsPage/AboutUs";
import FeaturesPage from "./components/featuresPage/FeaturesPage";
import HelpPage from "./components/helpPage/HelpPage";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import SignInPage from "./components/signInPage/SignInPage";
import SiteMapPage from "./components/siteMapPage/SiteMapPage";
import Validate from "./components/validatePage/Validate";
import ContactUs from "./components/contactUs/ContactUs";
import LoanCalculatorPage from "./components/loanCalculatorPage/LoanCalculatorPage";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <div className="app">
        <Router>
          <Switch>
              <Route path="/navbar" exact component={NavigationBar}/>
              <Route path="/aboutUs" exact component={AboutUs}/>
              <Route path="/featurePage" exact component={FeaturesPage}/>
              <Route path="/helpPage" exact component={HelpPage}/>
              <Route path="/" exact component={HomePage}/>
              <Route path="/homePage" exact component={HomePage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/signInPage" exact component={SignInPage}/>
              <Route path="/siteMap" exact component={SiteMapPage}/>
              <Route path="/validate" exact component={Validate}/>
              <Route path="/contactUs" exact component={ContactUs}/>
              <Route path="/loanCalculatorPage" exact component={LoanCalculatorPage}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
