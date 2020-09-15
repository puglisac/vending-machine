import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './VendingMachine';
import Chips from './Chips';
import Coke from './Coke';
import Snickers from './Snickers';
import Home from './Home'
import './App.css';

function App() {
    return (
      <div className ="App">
        <h1>Vending Machine</h1>

      <BrowserRouter>
      <NavBar/>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route exact path="/chips">
          <Chips/>
      </Route>
      <Route exact path="/coke">
          <Coke/>
      </Route>
      <Route exact path="/snickers">
          <Snickers/>
      </Route>
      </BrowserRouter>
      </div>
  );
}

export default App;
