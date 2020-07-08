import React from 'react'
import Header from './components/ui/Header'
import './resources/App.css'
import './resources/main.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/books' component={Books} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
