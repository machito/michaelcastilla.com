/*
  Components: <Home />
  File: Home.js
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

/* Dashboard component */
import Dashboard from './Dashboard.jsx'

/* Home class */
export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  componentDidMount() {
    this.scrollToTop()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Michael L. Castilla · Product Designer · NYC</title>
          <link rel="shortcut icon" href="/img/voltage.png"/>
          <body className="home" />
        </Helmet>
        <Dashboard />
      </div>
    )
  }
}
