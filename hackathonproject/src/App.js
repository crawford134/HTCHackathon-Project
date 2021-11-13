import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';

import Header from './Components/Header';

function App() {
  return (
    <div className="root">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
        <Route exact path="/page5" component={Page5} />
      </Switch>
    </div>
  );
}

export default App;
