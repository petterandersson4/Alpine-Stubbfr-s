import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";



import Footer from "./components/Footer/Footer";

import Startsida from "./components/Startsida/Startsida";

import Frashjul from "./components/Frashjul/Frashjul";

import Stubbfras from "./components/Stubbfras/Stubbfras";

import Kontakt from "./components/Kontakt/Kontakt";


function App ()  {
	return (
		<div className="App">
			<Navbar/>
			<Router>
      <Switch>
          <Route exact path = "/" component = { Startsida  }  /> 
          <Route path = "/Stubbfras" component = { Stubbfras  } />
          <Route path = "/Frashjul" component = { Frashjul  } />
          <Route path = "/Kontakt" component = { Kontakt  } />
        </Switch>
        </Router>
        <Footer />
    </div>
	);
}

export default App;