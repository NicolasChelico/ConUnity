import React from 'react';

import './MainHeader.css';

const MainHeader = props => {

  const location = window.location.href.toString();
  console.log("Current location: " , location)
 


  return  <header className="main-header">{props.children}</header>
            

};

export default MainHeader;