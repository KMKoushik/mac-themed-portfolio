import React from 'react';
import './AboutMe.css'
import myImage from '../images/hi2.png';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="profile-img">
        <div >
          <img src={myImage} alt="Profile pic" title="My profile pic" className="image"/>
        </div>
      </div>
      <div className="profile-data">
        <div style={{width:'100%'}}>
          <h1>Koushik Mohan</h1>
          <ul>
            <li>Fullstack Software developer</li>
            <li>Experience : 2 years</li>
            <li>Memory : 1 Brain</li>
            <li>Serial Number : <tel>+91-7708431646</tel></li>
          </ul>

         
        </div>
      </div>
    </div>
  )
}