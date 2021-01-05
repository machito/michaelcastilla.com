/*
  Component: <Project />
  File: Project.js
  Child component(s): <Title />, <Branding />, <Devices />, <Highlights />, <Tags />
*/

/* Core components */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

/* Utilities */
import Utilities from './Utilities.jsx'

/* Branding components */
import { Title, Branding } from './Branding.jsx'

/* Devices components */
import { Device, Devices } from './Devices.jsx'

/* Highlights components */
import { Highlight, Highlights } from './Highlights.jsx'

/* Tags components */
import { Tag, Tags } from './Tags.jsx'

/* Project class */
export default class Project extends Component {
  constructor(props) {
      super(props)
      this.state = {
        redirect: false
      }
      this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if ( window.location.pathname.indexOf('/portfolio/') !== -1 ) {
      document.querySelector('body').classList.remove('grid')
      const headerHeight = document.querySelector('.header').offsetHeight
      const scrollOffset = headerHeight + 95
      window.scroll({top: scrollOffset, left: 0, behavior: 'smooth' })
    } else {
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
  }
  handleClick() {
    if ( window.location.pathname.indexOf('/portfolio/') === -1 ) {
      this.setState({ redirect: true })
    } else {
      this.setState({ redirect: false })
    }
  }
  render() {
    let devices = this.props.item.devices
    devices = devices && devices.map((device, index) =>
      <Device key={index} item={device} />
    )
    let highlights = this.props.item.highlights
    highlights = highlights && highlights.map((highlight, index) =>
      <Highlight key={index} item={highlight} />
    )
    let tags = this.props.item.tags
    tags = tags && tags.map((tag, index) =>
      <Tag key={index} item={tag} />
    )
    let tabIndexOffset = document.getElementsByTagName('a').length // the header links are the only <a> tags in the document
    let projectName = this.props.item.project
    let projectId = Utilities.cleanProjectName(projectName)
    let projectClass = `panel ${projectId}`
    let projetIndex = this.props.item.id + tabIndexOffset // offset for header links
    let projectLogo = this.props.item.logo
    let projectBranding = this.props.item.brands
    let online = this.props.item.online
    let slug = this.props.item.slug
    let project = {
      name: projectName,
      id: projectId,
      class: projectClass,
      index: projetIndex,
      logo: projectLogo,
      branding: projectBranding,
      highlights: highlights,
      devices: devices,
      tags: tags,
      online: online,
      slug: slug
    }
    let redirect = `/portfolio/${project.slug}`
    if (this.state.redirect) {
      return <Redirect push to={redirect} />
    }
    return (
      <section
        id={project.id}
        className={project.class}
        tabIndex={project.index}
        onClick={this.handleClick}>
        <div className="panel-inner">
          <Title item={project} />
          <Devices items={project.devices} />
          <Highlights items={project.highlights} />
          <Tags items={project.tags} />
          <Branding item={project} />
        </div>
      </section>
    )
  }
}
