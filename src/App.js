import React from 'react';

import {
  Home,
  Contact,
  Profile,
  Blogs,
  Welcome,
  Facial,
  Waxing,
  Makeup,
} from './pages';
import { Header } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Welcome />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Facial'>
            <Facial />
          </Route>
          <Route exact path='/Waxing'>
            <Waxing />
          </Route>
          <Route exact path='/Makeup'>
            <Makeup />
          </Route>
          <Route exact path='/Profile'>
            <Profile />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          <Route exact path='/Blogs'>
            <Blogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
