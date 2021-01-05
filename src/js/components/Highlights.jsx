/* Highlight & Highlights components */

/* Core components */
import React, { Component } from 'react'

/* Highlight class */
export class Highlight extends Component {
  constructor(props) {
    super()
  }
  render() {
    let highlight = this.props.item
    return <li className="highlight" title={highlight}>{highlight}</li>
  }
}

/* Highlights class */
export class Highlights extends Component {
  constructor(props) {
    super()
  }
  render() {
    return <ul className="highlights">{this.props.items}</ul>
  }
}
