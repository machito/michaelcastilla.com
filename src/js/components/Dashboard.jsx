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
  loadStats() {
    let db = Data.database().ref('dashboard')
    db.on('value', snapshot => {
      const items = Object.values(snapshot.val())
      // console.log('items', items)
      let stats = []
      items.map((item, index) => {
        stats.push({
          active: item.active,
          id: item.id,
          label: item.label,
          stat: item.stat,
          title: item.title
        })
      })
      /* Sort stats by stat ID */
      stats = _.sortBy(stats, 'id')
      /* Filter only stats that are "active" */
      stats = _.filter(stats, (stat) => {
        return stat.active === true
      })
      this.setState({ stats: stats })
    })
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
