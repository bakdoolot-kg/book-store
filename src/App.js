import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import HomePage from './pages/home-page/home-page';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;