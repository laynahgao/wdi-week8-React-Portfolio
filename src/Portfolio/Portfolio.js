import React from 'react';
import './Portfolio.css';
import Img1 from './1.jpg';
import Img2 from './2.jpg';
import Img3 from './3.jpg';

const portfolio =() => {
    return (
<div id="portfolio" class="text-center paddsection">

<div class="container">
  <div class="section-title text-center">
    <h2>My Portfolio</h2>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">

    <div class="portfolio-list">

        <ul class="nav list-unstyled" id="portfolio-flters">
          <li class="filter filter-active" data-filter=".all">all</li>
          <li class="filter" data-filter=".branding">JavaScript</li>
          <li class="filter" data-filter=".mockups">HTMl</li>
          <li class="filter" data-filter=".uikits">CSS</li>
          <li class="filter" data-filter=".webdesign">web design</li>
          <li class="filter" data-filter=".photography">Django</li>
        </ul>

      </div>

      <div class="portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
          <a class="popup-img" href={Img1}>
            <img src={Img1} alt="img"/>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography">
          <a class="popup-img" href="./2.jpg">
            <img src={Img2}  alt="img"/>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn">
          <a class="popup-img" href={Img3}>
            <img src={Img3} alt="img"/>
          </a>
        </div>


      </div>
    </div>
  </div>
</div>

</div>
    )
}
export default portfolio;