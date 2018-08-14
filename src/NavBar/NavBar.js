import React, {Component} from 'react';
import './NavBar.css'
import Logo from './logo.png'

class Navbar extends Component {

  componentDidMount() {
    window.scroll(() => {
      var scroll = $(window).scrollTop();
      if (scroll > 200 ) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav-subpage").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(700);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    })

  }

  render(){

    return(
        <nav id="main-nav">
        <div className="row">
          <div class="container">
    
            <div class="logo">
              <a href={"index.html"}><img src={Logo} alt="logo"/></a>
            </div>
    
            <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>
    
            <ul class="nav-menu list-unstyled">
              <li><a href="#header" class="smoothScroll">Home</a></li>
              <li><a href="#portfolio" class="smoothScroll">Portfolio</a></li>
              <li><a href="#about" class="smoothScroll">About</a></li>
              <li><a href="#contact" class="smoothScroll">Contact</a></li>
            </ul>
    
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;