/*
  Components: <Ouch/>
  File: Ouch.js
  Note: Component template
*/

/* Core components */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Ouch component */
export default function Ouch() {
  return (
    <div className="footer">
      <Helmet>
        <title>Michael L. Castilla · 404</title>
      </Helmet>
      <h2>404 - Not Found</h2>
    </div>
  )
}
