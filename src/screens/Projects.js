import React from 'react';
import './Projects.css'
import macImage from '../images/project/mac-portfolio.png'
import snakeImage from '../images/project/snake.png'
import fluxoImage from '../images/project/fluxo.png'
import codeceptImage from '../images/project/codecept.png'
import iotImage from '../images/project/IOT-gateway.png'

export default function Projects() {
  return (
    <div className="projects">
      <ProjectItem
        title="Fluxo"
        description="Create workflows by between thirdparty apps"
        tech="NodeJS, MongoDB, ReactJS"
        image={fluxoImage}
        url="https://github.com/pesto-students/batch-11-fluxo"
      />
      <ProjectItem
        title="CodeceptJS"
        description="Contributed to an open source framework for End 2 End Testing Framework for NodeJS"
        tech="NodeJS"
        image={codeceptImage}
        url="https://github.com/Codeception/CodeceptJS/issues?utf8=%E2%9C%93&q=+author%3Akoushikmohan1996+"
      />
      <ProjectItem
        title="Mac Themed Portfolio"
        description="Personal portfolio designed based on MacOS theme"
        tech="ReactJS"
        image={macImage}
        url="https://github.com/koushikmohan1996/mac-themed-portfolio"
      />
      <ProjectItem
        title="Snake-game"
        description="A simple snake game developed using React"
        tech="ReactJS"
        image={snakeImage}
        url="https://github.com/koushikmohan1996/snake-game"
      />
      <ProjectItem
        title="IOT Gateway"
        description="Gateway designed to communicate with MQTT, bluetooth and Xbee devices"
        tech="Python, MySql"
        image={iotImage}
        url="https://github.com/koushikmohan1996/IOTGateway"
      />
    </div>
  )
}

const ProjectItem = (props) => {
  return (
    <div className="project-item" onClick={() => window.open(props.url, '_blank')}>
      <img src={props.image} alt={props.title} class="project-img" />
      <div className="project-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Tech stack: {props.tech}</p>
      </div>
      <p>{props.title}</p>
    </div>
  )
} 