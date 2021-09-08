import React from 'react';
import MainPage from './pages/MainPage';
import EventAddPage from './pages/EventAddPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

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