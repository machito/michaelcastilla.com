/*
  Components: <Header/>
  File: Header.js
  Parent component(s): <Portfolio/>, <App/>
  Child component(s): <Menu/>
*/

/* Core components */
import React from 'react'
import { Link } from 'react-router-dom'

/* Menu component */
import Menu from './Menu.jsx'

/* Header component */
export default function Header() {
  const heading = "Michael L. Castilla"
  const headingTitle = `Hi there! My name is ${heading}`
  const jobTitle = "Product Designer"
  const location = "Remote"
  const tagline = `I'm a ${jobTitle} based in Miami, FL.`
  

  return (
    <div className="header animated fadeInDown">
      <Link to="/" tabIndex="0">
        <img className="bitmoji"  title={headingTitle} src="img/michaelcastilla-bitmoji.png" alt="Michael L. Castilla" />
      </Link>
      <h1 title={headingTitle}>
        <Link to="/" tabIndex="0">{heading}</Link>
      </h1>
      <p className="tagline" title={tagline}>
        <span>{jobTitle}</span>
        <br/>
        <span>{location}</span>
      </p>
      <Menu />
    </div>
  )
}
