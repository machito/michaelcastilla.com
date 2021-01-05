/*
  Components: <Test />
  File: Test.js
  Note: Component template
  Parent component(s): <Tester />
  Child component(s): <Testee />
*/

/* Core components */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Utilities */
import Utilities from './Utilities.jsx'

/* Helpers */
import _ from 'underscore'

/* X component */
import X from './X.jsx'

/* Test class */
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Hello, world!</title>
          <body className="" />
          <link rel="shortcut icon" href="" />
        </Helmet>
        <h1>Hello, world!</h1>
      </div>
    )
  }
}

export default Test
