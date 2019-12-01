import React, { useState } from 'react';
import './DockMenu.css'
import cancelImage from '../../images/cancel.svg'
  
function DockMenu(props) {
  const [menu, setMenu] = useState(props.default);
  const [transition, setTransition] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const onChange = menuEvent => {
    if (menuEvent === 'minimize') {
      setTransition(true);
      setTimeout(() => setMinimized(true), 250);
    }
    else {
      setTransition(false);
      setMinimized(false);
      setMenu(menuEvent);
    }
  }

  return (
    <div className="dock">
      <div className="dock-menu">
        {React.Children.map(props.children, dockMenuGroup => {
          if (dockMenuGroup === null) {
            return null;
          }
          if (menu === dockMenuGroup.props.name) {
            return React.cloneElement(dockMenuGroup, { isSelected: true,transition ,minimized ,onChange: onChange });
          }
          return React.cloneElement(dockMenuGroup, { isSelected: false,transition: false, minimized ,onChange: onChange });
        })}
      </div>
    </div>
  );
}

function DockMenuGroup(props) {
  return (
    <div>
      <Icon icon={props.icon} title={props.title} isSelected={props.isSelected} onClick={() => { props.onChange(props.name) }} />
      {props.isSelected ? <span className="dock-menu-selected">.</span> : null}
      {props.isSelected && !props.minimized ? React.cloneElement(props.children, { title: props.title, onClose: props.onChange,transition: props.transition }) : null}
    </div>
  )
}

const Icon = props => {
  return (
    <div className="dock-menu-icon" onClick={() => props.onClick()}>
      <div>
        <img className="dock-menu-icon-img" src={props.icon} alt={props.title} />
      </div>
      <span>{props.title}</span>
    </div>
  );
}

const Modal = props => {
  return (
    <div className={props.transition === true? "dock-menu-modal-hide" : "dock-menu-modal" } style={{ backgroundColor: `${props.backgroundColor}` }}>
      <div className="dock-menu-modal-menubar">
        <div className="dock-menu-modal-option">
          <button className="dock-menu-modal-close" onClick={() => props.onClose('')}></button>
          <button className="dock-menu-modal-yellow" onClick={() => props.onClose('minimize')}></button>
          <button className="dock-menu-modal-grey"></button>
        </div>
        <span className="dock-menu-modal-menubar-title">{props.title}</span>
      </div>
      <div className="modal-content">
        {props.children}
      </div>
      <img className="dock-menu-modal-close-parent" src={cancelImage} alt="cancel" onClick={() => props.onClose('')}/>
      
    </div>
  );
}

DockMenuGroup.Modal = Modal;

export { DockMenu, DockMenuGroup };