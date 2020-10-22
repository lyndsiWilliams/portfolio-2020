// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
