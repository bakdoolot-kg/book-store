import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import {HomePage} from './pages/home-page';
import {BookPage} from "./pages/book-page";
import {OrderPage} from "./pages/order-page";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/book/:id/">
            <BookPage/>
          </Route>
          <Route exact path="/order">
            <OrderPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;