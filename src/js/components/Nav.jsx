/*
  Components: <Nav />
  File: Nav.js
  Note: Component template
*/

/* Core components */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Nav component */
export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: null,
      className: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // let portfolio = document.querySelector('ul.portfolio')
    // portfolio && portfolio.classList.remove('fadeInUp')
    // portfolio && portfolio.classList.add('fadeIn')
    // console.log('component mounted')
    // console.log('this.state.className', this.state.className)
  }
  componentDidUpdate() {
    // console.log('component updated')
    // console.log('this.state.className', this.state.className)
  }
  handleClick() {
    if ( document.querySelector('.portfolio').classList.value.indexOf('grid') === -1 ) {
      document.querySelector('.portfolio').classList.add('grid')
    } else {
      document.querySelector('.portfolio').classList.remove('grid')
    }
    this.setState({ className: !this.state.className })
    // console.log('this.state.className', this.state.className)
  }
  render() {
    return (
      <ul className="nav animated fadeIn">
        <li className={!this.state.className ? 'stripes active' : 'stripes'} onClick={this.handleClick}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </li>
        <li className={this.state.className ? 'thumbnails-mobile active' : 'thumbnails-mobile'} onClick={this.handleClick}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-large" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg>
        </li>
        <li className={!this.state.className ? 'thumbnails-desktop active' : 'thumbnails-desktop'} onClick={this.handleClick}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-large" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg>
        </li>
        <li className={this.state.className ? 'blocks active' : 'blocks '} onClick={this.handleClick}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg>
        </li>
      </ul>
    )
  }
}
