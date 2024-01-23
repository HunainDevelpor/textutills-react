

// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'


import React from "react";


function Navbar(props){



  return(
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary  " data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        
      
      </ul>
    </div>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">{props.text}</label>
</div>
  </div>
</nav>
    </>
);
}
export default Navbar;