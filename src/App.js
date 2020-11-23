import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Nav"
import AllCatPage from "./Pages/CatPages/AllCatPage";
import AddComputerPage from "./Pages/computer/AddComputerPage";
import OsPage from "./Pages/Os/OsPage";

function App() {
  return (
  <>
    <Router forceRefresh={true}>
      <Navigation />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/Category"} exact component={AllCatPage} />
        <Route path={"/Computer/Add"} exact component={AddComputerPage} />

        <Route path={"/Os"} exact component={OsPage} />

      </Switch>
    </Router>
  </>
  );
}

export default App;
