/*
  Component: <ProjectDetail />
  File: ProjectDetail.jsx
  Full-page project case study — rendered at /portfolio/:slug
*/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import content from './../data/content.js'
import colors from './../data/colors.js'
import Logo from './Logo.jsx'
import Utilities from './Utilities.jsx'

function parseStat(str) {
  const i = str.indexOf(' ')
  if (i === -1) return { value: str, label: '' }
  return { value: str.slice(0, i), label: str.slice(i + 1) }
}

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.wrapperRef = React.createRef()
  }

  componentDidMount() {
    const el = this.wrapperRef.current
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 16
      window.scroll({ top, left: 0, behavior: 'smooth' })
    }
  }

  render() {
    const { item, allProjects } = this.props
    if (!item) return null

    const story   = content[item.slug] || {}
    const palette = colors[item.slug]  || { bg: '#222', color: '#fff', theme: 'dark' }
    const isDark  = palette.theme !== 'light'

    const tags    = item.tags || []
    const isYear  = t => /^\d{4}(-(\d{4}|present|current))?$/.test(t)
    const yearTag = tags.find(isYear)
    const roles   = tags.filter(t => !isYear(t)).map(t => t.replace(/-/g, ' '))

    const overview = story.overview || item.overview
    const problem  = story.problem  || item.problem
    const solution = story.solution || item.solution
    const impact   = story.impact   || item.impact

    const stats = (item.highlights || []).map(parseStat)

    const sorted = allProjects || []
    const idx    = sorted.findIndex(p => p.slug === item.slug)
    const prev   = sorted[idx - 1]
    const next   = sorted[idx + 1]

    const projectId = Utilities.cleanProjectName(item.project)

    const caseStyle = {
      backgroundColor: palette.bg,
      color: palette.color,
      '--d':  isDark ? 'rgba(255,255,255,.1)'  : 'rgba(0,0,0,.1)',
      '--t0': isDark ? 'rgba(255,255,255,.93)' : 'rgba(0,0,0,.9)',
      '--t1': isDark ? 'rgba(255,255,255,.85)' : 'rgba(0,0,0,.78)',
      '--t2': isDark ? 'rgba(255,255,255,.68)' : 'rgba(0,0,0,.62)',
      '--b':  isDark ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)',
    }

    return (
      <div className="project-case-wrapper" ref={this.wrapperRef}>
        <Helmet>
          <title>{item.project} · Michael Castilla</title>
        </Helmet>

        {/* ── Back link ── */}
        <Link to="/" className="case-back">← Projects</Link>

        <article
          className={`project-case ${projectId} ${isDark ? 'theme-dark' : 'theme-light'}`}
          style={caseStyle}
        >

        {/* ── Header ── */}
        <header className="case-header">
          <div className="case-header-left">
            {yearTag && <span className="case-meta-item">{yearTag.replace('-', ' - ')}</span>}
          </div>
          <div className="case-header-center">
            <Logo src={item.logo} brands={item.brands} />
          </div>
          <div className="case-header-right">
            {item.url && item.online && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="case-meta-item case-meta-link"
              >
                Live ↗
              </a>
            )}
          </div>
        </header>

        {/* ── Lede ── */}
        {overview && (
          <section className="case-lede">
            <p>{overview}</p>
          </section>
        )}

        {/* ── Stats ── */}
        {stats.length > 0 && (
          <section className="case-stats">
            {stats.map((s, i) => (
              <div key={i} className="case-stat">
                <span className="case-stat-value">{s.value}</span>
                <span className="case-stat-label">{s.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* ── Narrative ── */}
        {(problem || solution) && (
          <section className="case-narrative">
            {problem && (
              <div className="case-narrative-row">
                <div className="case-narrative-eyebrow">
                  <span>The</span>
                  <span>Problem</span>
                </div>
                <p className="case-narrative-body">{problem}</p>
              </div>
            )}
            {solution && (
              <div className="case-narrative-row">
                <div className="case-narrative-eyebrow">
                  <span>The</span>
                  <span>Solution</span>
                </div>
                <p className="case-narrative-body">{solution}</p>
              </div>
            )}
          </section>
        )}

        {/* ── Role tags ── */}
        {roles.length > 0 && (
          <section className="case-roles">
            <span className="case-roles-label">Disciplines</span>
            <ul className="case-roles-list">
              {roles.map((r, i) => <li key={i}>#{r.toUpperCase()}</li>)}
            </ul>
          </section>
        )}

        {/* ── Impact ── */}
        {impact && (
          <section className="case-impact">
            <blockquote>{impact}</blockquote>
          </section>
        )}

        </article>

        {/* ── Prev / Next ── */}
        <nav className="case-nav">
          {prev ? (
            <Link to={`/portfolio/${prev.slug}`} className="case-nav-link case-nav-link--prev">
              <span className="case-nav-dir">← Previous</span>
              <span className="case-nav-name">{prev.project}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link to={`/portfolio/${next.slug}`} className="case-nav-link case-nav-link--next">
              <span className="case-nav-dir">Next →</span>
              <span className="case-nav-name">{next.project}</span>
            </Link>
          )}
        </nav>
      </div>
    )
  }
}
