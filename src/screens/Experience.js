import React from 'react'
import './Experience.css'

export default function Experience(props) {
  return (
    <div style={{marginTop:'5%', display:'flex', justifyContent:'center'}}>
      <div className="experience">
        <div className="experienceItem">
          <h2>Software Developer, Zoho</h2>
          <p>Full stack developer in MDM Cloud team. A cloud based enterprise solution to control mobile devices, push applications, and other operations used by IT admins</p>
        </div>
        <div className="experienceItem">
          <h2>Intern, Zoho</h2>
          <p>Developed an automated tool to download and analyse log files sent by customers. These zip files will be downloaded, extracted, parsed and report will generated.</p>
        </div>
        <div className="experienceItem">
          <h2>Freelance developer, RICS system</h2>
          <p>Developed a shopping cart and location based attendance manager android apps for Rics systems. </p>
        </div>
      </div>
    </div>
  );
}