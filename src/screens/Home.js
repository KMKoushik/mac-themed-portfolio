import React from 'react';
import { getTimeString, getDateString, isMobile } from '../util.js';
import { DockMenu, DockMenuGroup } from '../components/DockMenu/DockMenu.js';
import './Home.css';
import about from '../images/about.svg';
import work from '../images/work.svg';
import snake from '../images/snake.svg';
import contact from '../images/contact.svg';
import project from '../images/project.svg';
import AboutMe from './AboutMe';
import Experience from './Experience';
import SnakeBoard from './SnakeBoard';
import Contact from './Contact';
import Projects from './Projects';

export default function Home(props) {

  return (
    <div className="home" >
      <MacMenuBar title="Koushik Mohan's Portfolio" date={getDateString()} time={getTimeString()} />

      <DockMenu>
        <DockMenuGroup name="about" icon={about} title="About me">
          <DockMenuGroup.Modal>
            <AboutMe />
          </DockMenuGroup.Modal>
        </DockMenuGroup>
        <DockMenuGroup name="experience" icon={work} title="Experience">
          <DockMenuGroup.Modal>
            <Experience />
          </DockMenuGroup.Modal>
        </DockMenuGroup>

        {isMobile() ? null :
          <DockMenuGroup name="snake" icon={snake} title="Snake">
            <DockMenuGroup.Modal backgroundColor="#282c34">
              <SnakeBoard />
            </DockMenuGroup.Modal>
          </DockMenuGroup>
        }
        <DockMenuGroup name="contact" icon={contact} title="Contact">
          <DockMenuGroup.Modal>
            <Contact />
          </DockMenuGroup.Modal>
        </DockMenuGroup>
        <DockMenuGroup name="project" icon={project} title="Projects">
          <DockMenuGroup.Modal>
            <Projects />
          </DockMenuGroup.Modal>
        </DockMenuGroup>
      </DockMenu>
    </div>
  );
}

function MacMenuBar(props) {
  return (
    <div className="menubar">
      <span className="menubar-title">{props.title}</span>
      <span className="menubar-datetime">{props.date + ', '}{props.time}</span>
    </div>
  );
}