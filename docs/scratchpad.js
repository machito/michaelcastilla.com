// app.js

/* Look up the "projects" collection in Firebase */
const collection = 'projects'
const db = Firebase.database().ref(collection)
/* Watch the DB for changes */
db.on('value', (snapshot) => {
  /* Let's grab only the data inside the project objects */
  let items = Object.values(snapshot.val())
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
      online: item.online
    })
  })
  /* Sort projects by project ID */
  projects = _.sortBy(projects, 'id')
  /* Filter only projects that are "active" */
  projects = _.filter(projects, (project) => {
    return project.active === true
  })

})

// Portfolio.js

componentDidUpdate(prevProps, prevState) {
  if (prevState !== this.state) {
    this.getUserData()
  }

/*
  Component: <Portfolio />
  File: Portfolio.js
*/

/* Core components */
import React, { Component } from 'react'

/* Project component */
import Project from './Project.jsx'

/* Layout components */
import { Header, Footer } from './Layout.jsx'

/* Firebase controller */
import firebase from './../firebase.jsx'

/* Helpers */
import _ from 'underscore'

/* Portfolio class */
class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  loadProjects() {
    console.log('projects loading...')
    const db = firebase.database().ref('projects')
    db.on('value', (snapshot) => {
      console.log('db has changed')
      let items = Object.values(snapshot.val())
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
          online: item.online
        })
      })
      projects = _.sortBy(projects, 'id')
      projects = _.filter(projects, (project) => {
        return project.active === true
      })
      this.setState({
        projects: projects
      })
    })
    console.log('projects loaded!')
  }
  componentDidMount() {
    this.loadProjects()
  }
  componentWillUpdate(prevProps, prevState, snapshot) {
    console.log('state has changed; component updating...')
    let initState = this.state;
    if ( initState !== prevState ) {
      // this.loadProjects()
      console.log('states do not match')
    } else {
      console.log('states match')
    }
    console.log('initState', initState)
    // console.log('prevProps', prevProps)
    console.log('newState', prevState)
    // console.log('snapshot', snapshot)
    console.log('component(s) updated!')
  }
  render() {
    return (
      <div className="container">
        <Header />
        <ul className="portfolio">
          {this.state.projects.map((project, index) => {
            return (
              <Project key={index} item={project} />
            )
          })}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Portfolio

// portfolio.js

/*
  Component: <Portfolio />
  File: Portfolio.js
*/

/* Core components */
import React, { Component } from 'react'

/* Project component */
import Project from './Project.jsx'

/* Layout components */
import { Header, Footer } from './Layout.jsx'

/* Firebase controller */
import firebase from './../firebase.jsx'

/* Helpers */
import _ from 'underscore'

/* Portfolio class */
class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  loadProjects() {
    console.log('projects loading...')
    const db = firebase.database().ref('projects')
    let projects = []
    db.on('value', (snapshot) => {
      console.log('db has changed')
      let items = Object.values(snapshot.val())
      for (let item in items) {
        projects.push({
          id: items[item].id,
          active: items[item].active,
          project: items[item].project,
          brands: items[item].brands,
          logo: items[item].logo,
          highlights: items[item].highlights,
          tags: items[item].tags,
          devices: items[item].devices,
          url: items[item].url,
          online: items[item].online
        })
      }
      projects = _.sortBy(projects, 'id')
      projects = _.filter(projects, (project) => {
        return project.active === true
      })
      console.log('projectsss', projects)
      return projects
    })
    console.log('projects loaded!')
  }
  componentDidMount() {
    console.log('component mounting...')
    let newProjects = this.loadProjects()
    console.log('component mounted!')
    this.setState({
      projects: projects
    })
  }
  componentWillUpdate(prevProps, prevState, snapshot) {
    console.log('state has changed; component updating...')
    let initState = this.state;
    if ( initState !== prevState ) {
      // this.loadProjects()
      console.log('states do not match')
    } else {
      console.log('states match')
    }
    console.log('initState', initState)
    // console.log('prevProps', prevProps)
    console.log('currentState', prevState)
    // console.log('snapshot', snapshot)
    console.log('component updated!')
  }
  render() {
    return (
      <div className="container">
        <Header />
        <ul className="portfolio">
          {this.state.projects.map((project, index) => {
            return (
              <Project key={index} item={project} />
            )
          })}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Portfolio

Highlights.js
function Highlights(props) {
  let items = props.items;
  return <ul className="highlights">{items}</ul>;
}



// server.js

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.jsx');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});


/* Portfolio class */
// class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  loadProjects() {
    console.log('projects loading...')
    const db = firebase.database().ref('projects')
    db.on('value', (snapshot) => {
      console.log('db has changed')
      let items = Object.values(snapshot.val())
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
          online: item.online
        })
      })
      projects = _.sortBy(projects, 'id')
      projects = _.filter(projects, (project) => {
        return project.active === true
      })
      this.setState({
        projects: projects
      })
    })
    console.log('projects loaded!')
  }
  componentDidMount() {
    this.loadProjects()
  }
  componentWillUpdate(prevProps, prevState, snapshot) {
    console.log('state has changed; component updating...')
    let initState = this.state;
    if ( initState !== prevState ) {
      // this.loadProjects()
      console.log('states do not match')
    } else {
      console.log('states match')
    }
    console.log('initState', initState)
    // console.log('prevProps', prevProps)
    console.log('newState', prevState)
    // console.log('snapshot', snapshot)
    console.log('component(s) updated!')
  }
  render() {
    return (
      <div className="container">
        <Header />
        <ul className="portfolio">
          {this.state.projects.map((project, index) => {
            return (
              <Project key={index} item={project} />
            )
          })}
        </ul>
        <Footer />
      </div>
    )
  }
}


let highlights = this.project.highlights
highlights = highlights && highlights.map((highlight, index) =>
  <Highlight key={index} item={highlight} />
)
let tags = this.props.item.tags
tags = tags && tags.map((tag, index) =>
  <Tag key={index} item={tag} />
)
let devices = this.props.item.devices
devices = devices && devices.map((device, index) =>
  <Device key={index} item={device} />
)
let projectName = this.props.item.project
let projectId = Utilities.cleanProjectName(projectName)
let projectClass = `panel ${projectId}`
let projetIndex = this.props.item.id
let projectLogo = this.props.item.logo
let projectBranding = this.props.item.brands
let project = {
  name: projectName,
  id: projectId,
  class: projectClass,
  index: projetIndex,
  logo: projectLogo,
  branding: projectBranding,
  highlights: highlights,
  devices: devices,
  tags: tags
}




/* Project class */
class Project extends Component {
  constructor(props, { match }) {
      super(props)
  }
  render() {
    let highlights = this.props.item.highlights
    highlights = highlights && highlights.map((highlight, index) =>
      <Highlight key={index} item={highlight} />
    )
    let tags = this.props.item.tags
    tags = tags && tags.map((tag, index) =>
      <Tag key={index} item={tag} />
    )
    let devices = this.props.item.devices
    devices = devices && devices.map((device, index) =>
      <Device key={index} item={device} />
    )
    let projectName = this.props.item.project
    let projectId = Utilities.cleanProjectName(projectName)
    let projectClass = `panel animated fadeInUp ${projectId}`
    let projetIndex = this.props.item.id
    let projectLogo = this.props.item.logo
    let projectBranding = this.props.item.brands
    let project = {
      name: projectName,
      id: projectId,
      class: projectClass,
      index: projetIndex,
      logo: projectLogo,
      branding: projectBranding,
      highlights: highlights,
      devices: devices,
      tags: tags
    }
    return (
      <section
        id={project.id}
        className={project.class}
        tabIndex={project.index}>
        <div className="panel-inner">
          <Router>
            <h1>
              <Link to={`/projects/${project.id}`}}>
                <span className="project" title={project.name}>{project.name}</span>
              </Link>
              <span className="brands" title={project.branding}>
                <Logo src={project.logo} />
              </span>
            </h1>
            <Highlights items={project.highlights} />
            <Tags items={project.tags} />
            <Devices items={project.devices} />
          </Router>
        </div>
      </section>
    )
  }
}

<ul className="portfolio">{projects}</ul>

projects = projects && projects.map((project, index) => (
  <Project key={index} item={project} />
))

{gists && gists.map((gist,index) => ( <li key={index}>{gist.description}</li> ))}

gists.map((gist,index) => ( <li key={index}>{gist.description}</li> ))}

fetch('https://api.github.com/gists')
  .then(res => res.json())
  .then(gists => {
    console.log('gists from github', gists)
    this.setState({ gists: gists })
})


const projects = JSON.parse(window.localStorage.getItem("projects")) || this.state.projects
if ( window.localStorage.getItem("projects") === null ) { }

<Route exact path="/" render={() => (
  <Redirect to="/portfolio" />
)} />


// GA
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-26472176-2');


<div className="row">
  <div className="header">
    <h1 title="Machito">Machito</h1>
    <p className="tagline">Product Designer<br/>NYC</p>
  </div>
</div>

/* App fonts */
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

if ( window.location.pathname.indexOf('port') === 1 ) {
  window.scroll(0,270)
}

tools: Sketch, Webpack, Node.js, & React


toggleGridMode() {
  {/* TODO: Do this the "React way", effecting <Portfolio />'s state*/}
  this.setState({ className: !this.setState.className })
  document.querySelector('.portfolio').classList.add('grid')
}
togglePanelMode() {
  {/* TODO: Do this the "React way", effecting <Portfolio />'s state*/}
  this.setState({ className: !this.setState.className })
  document.querySelector('.portfolio').classList.remove('grid')
}

let stuff = document.querySelector('ul.portfolio')
stuff && stuff.classList.remove('fadeInUp')
stuff && stuff.classList.add('fadeIn')


// BASH fun

osascript test.applescript 7866141508 "http://192.168.1.245:9000"


<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />

  let tags = []
  let test = projects && projects.map((project, index) => {
    tags.push(project.tags)
  })
  let tagsCount = _.flatten(tags) && _.uniq(tags) && tags.length // merge all tags & get a count of unique tags
  // console.log('tags', tags)
  // console.log('tags', tagsCount)
