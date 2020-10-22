import * as React from 'react';
import './App.css';
import './App.js';
import logo from './logo.svg';

import { BrowserRouter as Router,Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home';
// Components
import Welcome from './components/Welcome/Welcome'



function App() {
    return (
        <div className="App">
          <Router>
             <Header />
           </Router>  
              <Home />
        </div>
    );
}

export default App;