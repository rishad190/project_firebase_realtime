import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import SignUp from "./Components/SignUp/SignUp";
import Info from "./Components/Info/Info";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";
import AllCharts from "./Components/AllCharts/AllCharts";
import Meter from "./Components/Meter/Meter";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    error: "",
    password: "",
    success: false,
  });

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/meter">
              <Meter></Meter>
            </Route>
            <Route path="/chart">
              <AllCharts></AllCharts>
            </Route>
            <PrivateRoute path="/info">
              <Info></Info>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="*">
              <h1>Error</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
