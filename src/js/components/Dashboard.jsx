/*
  Components: <Dashboard />
  File: Dashboard.js
  Parent component(s): <Home />
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

/* Helpers */
import _ from 'underscore'

/* Data controller */
import { Data } from './../controllers/data.js'

/* Stat component */
import Stat from './Stat.jsx'

/* Dashboard class */
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stats: null
    }
  }
  async loadStats() {
    const { data, error } = await Data
      .from('dashboard')
      .select('*')
      .eq('active', true)
      .order('id')
    if (error) { console.error('loadStats error:', error); return }
    this.setState({ stats: data })
  }
  componentDidMount() {
    this.loadStats()
  }
  render() {
    const stats = this.state.stats
    // console.log('stats', stats)
    const dashboard = _.map(stats, function(stat, key){
      return <Stat key={key} item={stat} />
    })
    // console.log('dashboard', dashboard)
    return (
      <div>
        <div className="content animated fadeIn">{dashboard}</div>
      </div>
    )
  }
}
