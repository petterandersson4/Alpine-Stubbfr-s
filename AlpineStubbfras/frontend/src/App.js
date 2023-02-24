import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";



import Footer from "./components/Footer/Footer";

import Startsida from "./components/Startsida/Startsida";

import Frashjul from "./components/Frashjul/Frashjul";

import Stubbfras from "./components/Stubbfras/Stubbfras";

import Kontakt from "./components/Kontakt/Kontakt";


const App = () =>  {
	return (
		<React.Fragment>
			<Navbar/>
			<Router>
      <Switch>
          <Route exact path = "/" component = { Startsida  }  /> 
          <Route exact path = "/stubbfras" component = { Stubbfras  } />
          <Route exact path = "/frashjul" component = { Frashjul  } />
          <Route exact path = "/kontakt" component = { Kontakt  } />
        </Switch>
        </Router>
        <Footer />
    </React.Fragment>
	);
}

export default App;