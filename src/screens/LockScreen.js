import React, { useState,useEffect } from 'react';
import '../App.css';
import '../screens/LockScreen.css';
import { getTimeString, getDateString } from '../util.js';
import { CSSTransitionGroup } from 'react-transition-group';

function LockScreen(props) {
  /*State variables */

  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    getTime();
    getDate();
    document.addEventListener('touchmove', () => {setIsLocked(false)}, false);
  }, [])
  const [timeString, setTimeString] = useState();
  const [dateString, setDateString] = useState();

  /*Components */

  const Locked = props => (
    <div key="1" className="screen" onClick = { () => setIsLocked(false) }>
      <div className="time">{ timeString }</div>
      <div className="date">{ dateString }</div>
      <div className="locked">
        {props.children}
      </div>
    </div>
  );
  const UnLocked = props => (<div className="screen" style={{position:'absolute',width:'100%'}}>{props.children}</div>);


  /*Util methods */

  const getBody = () => {
    if (isLocked) {
      return (<Locked > { props.lockedscreen } </Locked>)
    }
    return (<UnLocked key="2"> { props.children } </UnLocked>)
  }

  const getTime = () => {
    setTimeString(getTimeString());
    setTimeout(getTime,60000);
  }

  const getDate = () => setDateString(getDateString());

  return (
    <div>
      <CSSTransitionGroup transitionName="easein"  transitionLeaveTimeout={500}   transitionEnterTimeout={500} >
        { getBody() }
      </CSSTransitionGroup>
    </div>
  );
}


export  { LockScreen};
