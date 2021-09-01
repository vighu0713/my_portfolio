import React from 'react'
import '../src/css/style.css'
import './css/responsive.css'
import './css/util.css'
import Home from './page/home/Home'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import Projects from './components/Projects'
import Skills from './page/skills/Skills'
import Teams from './components/Teams'
import "./components/Font-Icons/Fontawesome"
import NavBar from './components/NavBar';
import { Redirect,Switch,Route, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
     <Route exact path="/home" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/projects" component={Projects}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/skills" component={Skills}/>
     <Route exact path="/teams" component={Teams}/>
    <Redirect to="/home"/>
      </Switch>
 
      
      
    </div>
  );
}

export default App;
