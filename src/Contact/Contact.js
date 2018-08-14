import React from 'react';
import './Contact.css';

const contact =() => {
    return (
        <div id="contact" class="paddsection">
        <div class="container">
          <div class="contact-block1">
            <div class="row">
    
              <div class="col-lg-6">
                <div class="contact-contact">
    
                  <h2 class="mb-30">GET IN TOUCH</h2>
    
                  <ul class="contact-details">
                    <li><span>Bay Area, United States</span></li>
                    <li><span>+510 3058569</span></li>
                    <li><span>laynahgao@gmail.com</span></li>
                  </ul>
    
                </div>
              </div>
    
              <div class="col-lg-6">
                      <div class="col-lg-12">
                      <a href="mailto:laynahgao@yahoo.com?Subject=Hello%20again">
                      <input type="submit" class="btn btn-defeault btn-send" value="Email Me" id="btnSubmit"/></a>
                    </div>
                    </div>
        </div>
      </div>
    </div>
  </div>    
    )
}
export default contact