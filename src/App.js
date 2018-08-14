import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Header from './Header/Header.js';
import Portfolio from './Portfolio/Portfolio.js';
import About from './About/About.js';
import Services from './Services/Services.js'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

class App extends Component {



  render() {
    return (
      <div className="App">
      <NavBar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      </div>
    );
  }
}

export default App;
