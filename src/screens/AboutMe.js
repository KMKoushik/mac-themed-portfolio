import React from 'react';
import './AboutMe.css'
import myImage from '../images/hi2.png';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="profile-img">
        <div >
          <img src={myImage} alt="Profile pic" title="My profile pic" className="image" />
        </div>
      </div>
      <div className="profile-data">
        <div style={{ width: '100%' }}>
          <h1>Koushik Mohan</h1>
          <h4>Fullstack Software developer</h4>
          <div className="table">
            <div className="table-row">
              <div class="table-cell column1">Experience</div>
              <div class="table-cell column2">  </div>
              <div class="table-cell column3">2.7 years</div>
            </div>
            <div className="table-row">
              <div class="table-cell column1">Processor</div>
              <div class="table-cell column2">  </div>
              <div class="table-cell column3">1 brain</div>
            </div>
            <div className="table-row">
              <div class="table-cell column1">Memory</div>
              <div class="table-cell column2">  </div>
              <div class="table-cell column3">1TB</div>
            </div>
            <div className="table-row">
              <div class="table-cell column1">Serial Number</div>
              <div class="table-cell column2">  </div>
              <div class="table-cell column3"><tel>+91-7708431646</tel></div>
            </div>
            <div className="table-row">
              <div class="table-cell column1">Made in</div>
              <div class="table-cell column2"> </div>
              <div class="table-cell column3">India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}