import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Contact from './Components/Contact';


const App = () =>{
  return(
    <>
    <Nav/>
    <Switch>
    <Route exact path="/" component= {Home}/>
      <Route exact path="/about" component= {About}/>
      <Route exact path="/skill" component= {Skill}/>
      <Route exact path="/work" component= {Work}/>
      <Route exact path="/contact" component= {Contact}/>
      <Redirect to="/" />
    </Switch>
    </>
  );

};

export default App;