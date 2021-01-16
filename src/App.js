import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Organizations from './components/pages/Organizations';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/organizations' component={Organizations}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>    
        <Footer/>
      </Router>
  
    </>
  );
}

export default App;
