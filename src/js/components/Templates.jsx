/*
  Components: <About />
  File: Project.js
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

/* About component */
export function About() {
  return (
    <div className="content animated fadeIn">
      <Helmet>
        <title>Michael L. Castilla · About</title>
        <body className="about" />
      </Helmet>
      <div class="row">
        <div class="column">
          <h1>About</h1>
        </div>
      </div>
    </div>
  )
}
