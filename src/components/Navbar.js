import React from 'react'
import PropTypes from 'prop-types'
import ColorTheme from './ColorTheme'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

 

  return (
    <>
  <nav style={{backgroundColor:`${(props.mode.colorValue === 'blue')?'#0c0cc5':(props.mode.colorValue === 'yellow')?'#e8be139c':props.mode.colorValue}`}} className={`navbar navbar-expand-lg navbar-${props.mode.colorValue} bg-${props.mode.colorValue}`}>
  <div className="container-fluid">
    <Link style={{color:`${props.mode.textColor}`}} className="navbar-brand" to="/">{props.titleText}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link style={{color:`${props.mode.textColor}`}} className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:`${props.mode.textColor}`}} className="nav-link " to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <ColorTheme changeColor={props.enableColor} mode={props.mode}/>
    </div>
  </div>
</nav>
</>

  )
}

Navbar.prototypes = {
    titleText: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    titleText: "Set Title Here",
    aboutText: "Set About"
}
