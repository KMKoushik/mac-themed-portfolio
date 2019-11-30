import React from 'react';
import './Projects.css'
import macImage from '../images/mac-portfolio.png'
import snakeImage from '../images/snake.png'
import androidImage from '../images/android.png'

export default function Projects() {
  return (
    <div className="projects">
      <ProjectItem
        title="Mac Themed Portfolio"
        description="Portfolio designed based on MacOS theme"
        image={macImage}
        url="https://github.com/koushikmohan1996/mac-themed-portfolio"
      />
      <ProjectItem
        title="Ri-TimeLog"
        description="An android app for Location based  attendance tracking."
        image={androidImage}
        url="https://github.com/koushikmohan1996/RiTimeLog"
      />
      <ProjectItem
        title="Snake-game"
        description="A simple snake game developed using React"
        image={snakeImage}
        url="https://github.com/koushikmohan1996/snake-game"
      />
      <ProjectItem
        title="Ri-Cart"
        description="A shopping cart designed for RICS system"
        image={androidImage}
        url="https://github.com/koushikmohan1996/RiCart"
      />
    </div>
  )
}

const ProjectItem = (props) => {
  return (
    <div className="project-item" onClick={() => window.open(props.url, '_blank')}>
      <div className="project-image">
        <img src={props.image} alt={props.title} class="project-img" />
      </div>
      <div className="project-details">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
} 