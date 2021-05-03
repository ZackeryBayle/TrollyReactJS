import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navbar from "./components/nav-bar";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Footbar from "./components/footer-bar";

import './main.scss';


function App() {

  return (
      <div>
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/dashboard">
                <Dashboard />
              </Route>

            </Switch>

          </div>


        </Router>
        <Footbar />
      </div>
    );
  }
export default App;