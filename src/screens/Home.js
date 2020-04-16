import React from 'react';
import { getTimeString, getDateString, isMobile } from '../util.js';
import { DockMenu, DockMenuGroup } from '../components/DockMenu/DockMenu.js';
import './Home.css';
import about from '../images/about.svg';
import work from '../images/work.svg';
import snake from '../images/snake.svg';
import contact from '../images/contact.svg';
import project from '../images/project.svg';
import lockImg from '../images/off.svg';
import AboutMe from './AboutMe';
import Experience from './Experience';
import SnakeBoard from './SnakeBoard';
import Contact from './Contact';
import Projects from './Projects';

export default function Home(props) {
  const isMobileView = isMobile();

  return (
    <div className="home" >
      {
        isMobileView ? null :
          <MacMenuBar title="Koushik Mohan's Portfolio" date={getDateString()} time={getTimeString()} lock={props.lock} />
      }
      <div className="notification-group">
        <span className="notification-title">Notifications</span>
        <Notification
          title="GitHub"
          content="Contributed to codeceptJS"
          url="https://codecept.io/" />
        <Notification
          title="Profession"
          content="Joined as developer in Testomat"
          url="http://testomat.io/" />
      </div>
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
        <DockMenuGroup name="project" icon={project} title="Projects">
          <DockMenuGroup.Modal>
            <Projects />
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

      </DockMenu>
    </div>
  );
}

const MacMenuBar = (props) => {
  return (
    <div className="menubar">
      <span className="menubar-title">{props.title}</span>
      <img className="menubar-lock" onClick={() => props.lock(true)} src={lockImg} alt="Lock" />
      <span className="menubar-datetime">{props.date + ', '}{props.time}</span>
    </div>
  );
}

const Notification = (props) => {
  return (
    <div className="notification" onClick={() => window.open(props.url, '_blank')}>
      <p className="notification-title">{props.title}</p>
      <div className="notification-content">
        <span className="notification-content-data">{props.content}</span>
      </div>
    </div>
  )
}