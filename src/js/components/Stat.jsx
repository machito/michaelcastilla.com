/*
  Components: <Stat />
  File: Stat.js
  Parent component(s): <Dashboard />
*/

/* Core components */
import React, { Component } from 'react'

import Utilities from './Utilities.jsx'

/* Stat component */
export default class Stat extends Component {
  render() {
    const stat = this.props.item.stat
    const label = this.props.item.label
    const title = this.props.item.title
    const className = Utilities.cleanProjectName(label)
    const titleAttr = `${title} ${stat} ${label} and counting.`
    return (
      <div className={`panel panel-stat ${className}`} title={titleAttr}>
        <div className="panel-inner">
          <h2>{stat} <span>{label}</span></h2>
          {/*<p>{label}</p>*/}
        </div>
      </div>
    )
  }
}
