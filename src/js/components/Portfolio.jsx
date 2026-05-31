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

/* ProjectDetail component */
import ProjectDetail from './ProjectDetail.jsx'

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
  async loadProjects() {
    const { data, error } = await Data
      .from('projects')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: false })
    if (error) { console.error('loadProjects error:', error); return }
    this.setState({ projects: data })
  }
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  componentDidMount() {
    this.scrollToTop()
    this.loadProjects()
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
          <title>Michael Castilla · Product Engineer · Portfolio</title>
          <link rel="shortcut icon" href="/img/briefcase.png"/>
        </Helmet>
        {portfolio && (
          <Route exact path="/" render={() => (
            <span>
              <Nav />
              <div className={className}>{portfolio}</div>
            </span>
          )} />
        )}
        {projects && (
          <Route path="/portfolio/:slug" render={({ match }) => {
            const project = _.find(projects, (p) => p.slug === match.params.slug)
            return <ProjectDetail item={project} allProjects={projects} />
          }} />
        )}
      </div>
    )
  }
}
