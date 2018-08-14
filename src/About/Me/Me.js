import React from 'react';
import './Me.css';
import Me from './me.jpeg';

const me =() => {
    return (
        <div id="about" class="paddsection">
          <div class="container">
            <div class="row justify-content-between">
      
              <div class="col-lg-4 ">
                <div class="div-img-bg">
                  <div class="about-img">
                    <img src={Me} class="img-responsive" alt="me"/>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    )
}
export default me;