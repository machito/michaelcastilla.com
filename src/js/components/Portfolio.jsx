/*
  Component: <Portfolio />
  File: Portfolio.js
  Child component(s): <Project/>
*/

/* Core components */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Helpers */
import _ from 'underscore'

/* Data controller */
import { Data } from './../controllers/data.js'

/* Project component */
import Project from './Project.jsx'

/* Nav component */
import Nav from './Nav.jsx'

/* Portfolio class */
export default class Portfolio extends Component {
  constructor(props) {
      super(props)
      this.state = {
        projects: null,
        class: "portfolio animated fadeIn"
      }
  }
  loadProjects() {
    let db = Data.database().ref('projects')
    db.on('value', snapshot => {
      const items = Object.values(snapshot.val())
      let projects = []
      items.map((item, index) => {
        projects.push({
          id: item.id,
          active: item.active,
          project: item.project,
          brands: item.brands,
          logo: item.logo,
          highlights: item.highlights,
          tags: item.tags,
          devices: item.devices,
          url: item.url,
          online: item.online,
          slug: item.slug
        })
      })
      /* Sort projects by project ID */
      projects = _.sortBy(projects, 'id')
      /* Filter only projects that are "active" */
      projects = _.filter(projects, (project) => {
        return project.active === true
      })
      this.setState({ projects: projects })
    })
  }
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  loadLocalProjects() {
    let projects = Data
    this.setState({ projects: projects })
  }
  componentDidMount() {
    // this.loadLocalProjects()
    this.scrollToTop()
    this.loadProjects()
    // this.setState({class: "portfolio animated fadeIn"}) // TODO: Fix this
  }
  render() {
    const className = this.state.class
    const projects = this.state.projects
    // console.log('projects', projects)
    const portfolio = projects && projects.map((project, index) => (
      <Project key={index} item={project} />
    ))
    // console.log('portfolio', portfolio)
    return (
      <div className="content">
        <Helmet>
          <title>Michael L. Castilla · Portfolio</title>
          <link rel="shortcut icon" href="/img/briefcase.png"/>
        </Helmet>
        {portfolio && (
          <Route exact path="/portfolio" render={() => (
            <span>
              <Nav />
              <div className={className}>{portfolio}</div>
            </span>
          )} />
        )}
        {projects && (
          <Route path="/portfolio/:slug" render={({ match }) => (
            <div className="portfolio project">
              <Project item={_.find(projects, (p) => { return p.slug === match.params.slug})} />
            </div>
          ) || 'Loading projects...'} />
        )}
      </div>
    )
  }
}
