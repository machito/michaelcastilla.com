/*
  Components: <Menu/>
  File: Menu.js
  Parent component: <Header/>
*/

/* Core components */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

/* Menu component */
export default function Menu() {
  return (
    <ul className="menu">
      <li className="home">
        <NavLink activeClassName="active" exact to="/" title="Home sweet home!" tabIndex="1">
          <img src="/img/home.svg" alt="Home" width="20" />
        </NavLink>
      </li>
      {/*<li><NavLink activeClassName="active" to="/about" title="About">About</NavLink></li>*/}
      <li><NavLink activeClassName="active" to="/portfolio" title="Check out my portfolio" tabIndex="2">Portfolio</NavLink></li>
      <li><NavLink activeClassName="active" to="/resume" title="Are you hiring?" tabIndex="3">Resume</NavLink></li>
      {/*<li><NavLink activeClassName="active" to="/cv" title="Learn more about my work" tabIndex="4">CV</NavLink></li>*/}
      <li className="contact">
        <a href="mailto:michaelcastilla@gmail.com" title="Contact me">
          <img src="/img/mail.svg" alt="Home" width="20" />
        </a>
      </li>
      {/*<li className="contact">
        <NavLink activeClassName="active" to="/contact" title="Contact me" tabIndex="5"><img src="/img/mail.svg" alt="Home" width="20" /></NavLink>
      </li>*/}
    </ul>
  )
}
