// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
