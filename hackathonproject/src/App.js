import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
