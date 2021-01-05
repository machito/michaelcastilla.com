/*
  Component: <Portfolio />
  File: Portfolio.js
*/

/* Core components */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Project component */
import Project from './Project.jsx'

/* Layout components */
import { Header, Footer } from './Layout.jsx'

/* Data controller */
import { Data } from './../controllers/data.js'

/* Helpers */
import _ from 'underscore'

/* Portfolio class */
export default class Resume extends Component {
  constructor(props) {
      super(props)
      this.state = {
        resume: null
      }
  }
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  componentDidMount() {
    this.scrollToTop()
  }
  render() {
    return (
      <div className="content animated fadeIn">
        <Helmet>
          <title>Michael L. Castilla · Resume</title>
          <link rel="shortcut icon" href="/img/document.png"/>
          <body className="resume" />
        </Helmet>
        <div className="row">
          <div className="column">
            <h2>Intro</h2>
            <p>Hi, my name is Michael L. Castilla. I'm a product designer from Miami currently based in New York City with a passion for understanding the intersection of people creating products and the process and tools they use.</p>

            <p>My approach to digital strategy – called product operations – focuses on a streamlined customer validation process powered by lightweight design systems and data-driven software development practices.</p>

            <h2>Tools</h2>
            <ul>
              <li>Slack, Basecamp, Trello, Jira</li>
              <li>Photoshop, Sketch, Abstract, InVision</li>
              <li>SCSS, SASS, Stylus, SMACSS, BEM</li>
              <li>Bootstrap, Foundation, Semantic UI</li>
              <li>Firebase, Redis, MongoDB, MySQL</li>
              <li>Flask, Django, JSON APIs</li>
              <li>Grunt, Gulp, Webpack</li>
              <li>NodeJS, Express, Angular, React</li>
              <li>AWS, Google Cloud Platform, Firebase, Heroku</li>
              <li>Git, GitHub, Bitbucket, Jenkins</li>
              <li>MailChimp, Mandrill, Campaign Monitor</li>
              <li>Optimizely, Segment.io, Customer.io</li>
            </ul>

            <h2>Clients</h2>
            <ul>
              <li>.CO</li>
              <li>Aeroméxico</li>
              <li>Alamo Rent-A-Car</li>
              <li>Alcatel-Lucent</li>
              <li>Anteros Cruises</li>
              <li>Chantecaille</li>
              <li>City of New York</li>
              <li>Enterprise Rent-A-Car</li>
              <li>First Quality</li>
              <li>James L. Knight Foundation</li>
              <li>JetBlue Airways</li>
              <li>Karisma Hotels & Resorts</li>
              <li>Macy's</li>
              <li>Microsoft</li>
              <li>Neiman Marcus</li>
              <li>Norwegian Cruise Line</li>
              <li>Palm Beach Food &amp; Wine Festival</li>
              <li>Ralph Lauren</li>
              <li>Resorts World Bimini</li>
              <li>Ripley’s Entertainment</li>
              <li>South African Airways</li>
              <li>South Beach Food &amp; Wine Festival</li>
              <li>The Biltmore Hotel Coral Gables</li>
              <li>The Leiden Collection</li>
              <li>The MIAMI Institute</li>
              <li>Toronto Escapes</li>
            </ul>
          </div>

          <div className="column">
            <h2>Experience</h2>
            <p>
            <strong>Product Operations</strong><br/>
            <em>SiriusXM + Pandora (2017–Current)</em><br/>
            Leading design systems and digital product strategy at SiriusXM's product incubator.
            </p>
            {/*<p>
            <strong>Product Designer</strong><br/>
            <em>Disruptive Media Lab (2016–2017)</em><br/>
            Digital enterprise product solutions for global fashion and retail brands.
            </p>*/}
            <p>
            <strong>Product Designer</strong><br/>
            <em>Worldmedia Interactive (2014–2016)</em><br/>
            Digital enterprise product solutions for global travel and hospitality brands.
            </p>
            <p>
            <strong>Product Owner, Mobile</strong><br/>
            <em>1Sale.com (2012–2014)</em><br/>
            Product development for an online retailer's iOS app.
            </p>
            {/*<p>
            <strong>President</strong><br/>
            <em>Machito, Inc. (2006–Present)</em><br/>
            Product development for an online retailer's iOS app.
            </p>*/}

            <h2>Recognition</h2>
            <p>Featured in The New York Times<br/>
            <em>City of NY's first cyber-security initative "NYC Secure" (2018)</em></p>

            <p>Awarded the #1 CSS developer in Miami on GitHub<br/>
            <em>Open-source project "Animate.less" (2015 – Present)</em></p>

            <p>Nominated for a Silver ADDY Award<br/>
            <em>NCL Escape Microsite (2015)</em></p>

            <p>Travel Weekly Gold Magellan Award<br/>
            <em>NCL Escape Microsite (2015)</em></p>

            <p>Travel Weekly Gold Magellan Award<br/>
            <em>NCL Escape Travel Agent Portal (2015)</em></p>

            <p>Featured multiple times for technology initiatives<br/>
            <em>The Miami Herald (2013, 2012, 1995)</em></p>

            <p>Mentioned in "WordPress and Flash 10x Cookbook"<br/>
            <em>Peter Spannagle &amp; Sarah Soward (2010)</em></p>

            <p>Featured in Web Designer Magazine: Issue 157 (2009)</p>

            <p>Founder of the largest annual WordPress event in Florida<br/>
            <em>WordCamp Miami (2008 - Current)</em></p>
          </div>
        </div>
      </div>
    )
  }
}
