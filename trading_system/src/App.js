
import './App.css';
import Login from './login';
import { useState } from 'react';
import Register from './register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddStock } from './AddStock';
import Stockc from './stock';
import {Watchlist} from './Watchlist';
import WatchDetail from './WatchDetail';
import WatchlistHome from './WatchlistHome';
import Watch from "./Watch";
import React from "react";
import Navbar from "./Navbar";
import {Homepage} from "./homepage";
import {Aboutpage} from "./Aboutpage";
import {Contactpage} from "./Contactpage";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage/>
     <Footer/>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutpage/>
    <Footer/>
    </>
  );
};

const WatchList = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> WatchList Page</h1>
      </section>
      <Footer/>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Contactpage/>
     <Footer/>
    </>
  );
};

const Createacc = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Create Account Page</h1>
      </section>
    </>
  );
};

function App() { const [ user, setLoginUser] = useState({})
  return (  <Router>
    <div className="App">
    
     <Switch>
     <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
     <Route exact path="/Home">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/PortfolioDetail/:id">
              <PortfolioDetail />
          </Route>

      

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/createacc">
        <Createacc />
      </Route>
            {/* <Route exact path="/">
            <Stockc />
            </Route> */}
            <Route  path="/AddStock">
            <AddStock />
            </Route>
            <Route exact path="/Watch">
            <Watch />
            </Route>
            <Route exact path="/WatchlistHome">
            <WatchlistHome />
            </Route>
            <Route path="/watchlist/:id">
              <WatchDetail />
            </Route>
      </Switch>

      

    </div>
    </Router>
  );
}

export default App;
