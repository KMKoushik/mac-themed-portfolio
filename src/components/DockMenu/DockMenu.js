import React, { useState } from 'react';
import './DockMenu.css'

function DockMenu(props) {
  const [menu, setMenu] = useState(props.default);

  const onChange = menu => {
    setMenu(menu);
  }

  return (
    <div className="dock">
      <div className="dock-menu">
        {React.Children.map(props.children, dockMenuGroup => {
          if (menu === dockMenuGroup.props.name) {
            return React.cloneElement(dockMenuGroup, { isSelected: true, onChange: onChange });
          }
          return React.cloneElement(dockMenuGroup, { isSelected: false, onChange: onChange });
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
      {props.isSelected ? React.cloneElement(props.children, { title: props.title, onClose: props.onChange }) : null}
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
      <div className="dock-menu-modal">
        <div className="dock-menu-modal-menubar">
          <div className="dock-menu-modal-option">
            <button className="dock-menu-modal-close" onClick={() => props.onClose('')}></button>
            <button className="dock-menu-modal-yellow"></button>
            <button className="dock-menu-modal-grey"></button>
          </div>
          <span className="dock-menu-modal-menubar-title">{props.title}</span>
        </div>
        {props.children}
        <button className="dock-menu-modal-close-mobile" onClick={() => props.onClose('')}></button>
      </div>
  );
}

DockMenuGroup.Modal = Modal;

export { DockMenu, DockMenuGroup };