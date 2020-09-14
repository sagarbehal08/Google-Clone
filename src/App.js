import React from 'react';
import './App.css';
import Home from '../src/components/Home';
import SearchPage from '../src/pages/SearchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
