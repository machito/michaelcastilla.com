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
  let heading = "Machito"
  let headingTitle = "Hi there! My name is Michael L. Castilla."
  let tagline = "Product Designer"
  let taglineTitle = "I'm a Product Designer based in NYC."
  let location = "NYC"

  return (
    <div className="header animated fadeInDown">
      <h1 title={headingTitle}>
        <Link to="/" tabIndex="0">{heading}</Link>
      </h1>
      <p className="tagline" title={taglineTitle}>
        <span>{tagline}</span>
        <br/>
        <span>{location}</span>
      </p>
      <Menu />
    </div>
  )
}
