/*
  Component: <Branding />
  File: Branding.js
  Child component(s): <Logo />
*/

/* Core components */
import React from 'react'
import { Link } from 'react-router-dom'

/* Logo component */
import Logo from './Logo.jsx'

/* Project titles */
export function Title(props) {
  return (
    <h1 className="project-name" title={`${props.item.name}, a project for ${props.item.branding}.`}>{props.item.name}</h1>
  )
}

/* Company logos */
export function Branding(props) {
  return (
    <span className="brands" title={props.item.branding}>
      <Logo src={props.item.logo} />
    </span>
  )
}
