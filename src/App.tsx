import React from 'react';
import './App.css';
import './Application.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventAddPage from './pages/EventAddPage';
import EventModifyPage from './pages/EventModifyPage'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}></Route>
      </Switch>
      <Switch>
        <Route path='/EventAdd' component={EventAddPage}></Route>
      </Switch>
      <Switch>
        <Route path='/EventModify/:tokenId' component={EventModifyPage}></Route>
      </Switch>
    </Router>
  </div>
);

export default App;