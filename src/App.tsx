import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventAddPage from './pages/EventAddPage';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}></Route>
      </Switch>
      <Switch>
        <Route path='/EventAdd' component={EventAddPage}></Route>
      </Switch>
    </Router>
  </div>
);

export default App;