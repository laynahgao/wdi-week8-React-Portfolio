import React from 'react';
import Me from './Me/Me';
import Skill from './Skill/Skill';
import './About.css';

const about =() => {
    return (
        <div id="about" class="paddsection">
          <div class="container">
            <div class="row justify-content-between">
            <Me/>
            <Skill/> 
            </div>
          </div>
        </div>
    )
}
export default about;