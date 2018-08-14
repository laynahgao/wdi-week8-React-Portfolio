import React from 'react';
import './Services.css'
const services =() =>{
    return(
        <div id="services">
    <div class="container">

        <div class="services-carousel owl-theme">

          <div class="services-block">

            <i class="ion-ios-browsers-outline"></i>
            <span>RESPONSIVE</span>
            <p class="separator">My layouts will work on any device, big or small.</p>

          </div>

          <div class="services-block">

            <i class="ion-ios-lightbulb-outline"></i>
            <span>INTUITIVE</span>
            <p class="separator">Strong preference for easy to use, intuitive UX/UI. </p>

          </div>

          <div class="services-block">

            <i class="ion-ios-color-wand-outline"></i>
            <span>DYNAMIC</span>
            <p class="separator">Websites don't have to be static, I love making pages come to life. </p>

          </div>


          <div class="services-block">

            <i class="ion-ios-analytics-outline"></i>
            <span>FAST</span>
            <p class="separator">Fast load times and lag free interaction, my highest priority. </p>

          </div>

        </div>

    </div>

  </div>
    )
}
export default services