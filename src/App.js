import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import TopAppBar from './components/TopAppBar';

function App() {
  return (
    <div>

      <TopAppBar />

      <div>
        <Route exact path="/" component={ Home }/>
        <Switch>
          <Route exact path="/home" component={ Home }/>
          <Route exact path="/about" component={ About }/>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
