/*
  Components: <App/>
  File: App.js
  Child component(s): <Header />, <Portfolio />, <Resume />, <CV />, <About />, <Contact />, <Footer />
*/

/* Core components */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Layout components */
import { Header, Footer } from './Layout.jsx'

/* Home component */
import Home from './../components/Home.jsx'

/* Portfolio component */
import Portfolio from './../components/Portfolio.jsx'

/* Resume component */
import Resume from './../components/Resume.jsx'

/* CV component */
import CV from './../components/CV.jsx'

/* About components */
import { About } from './Templates.jsx'

/* Contact component */

/* CMS component */
import CMS from './../components/CMS.jsx'

/* 404 component */
import Ouch from './../components/Ouch.jsx'

/* App component */
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <body className="portfolio" />
          <title>Loading...</title>
        </Helmet>
        <Router>
          <Route exact path="/cms" component={CMS} />
          <Route path={/^(?!\/cms).*/} render={() => (
            <span>
              <Header />
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route path="/portfolio/:slug" component={Portfolio} />
                <Route exact path="/stats" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/cv" component={CV} />
                <Route path="/" component={Ouch} />
              </Switch>
              <Footer />
            </span>
          )} />
        </Router>
      </div>
    )
  }
}
