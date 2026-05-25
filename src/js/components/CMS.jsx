import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import supabase from '../controllers/supabase.js'

const ALL_TAGS = [
  'program-leadership', 'business-operations', 'leadership', 'strategy',
  'ux', 'ui', 'design-systems', 'front-end', 'back-end', 'api', 'email', 'ads'
]
const ALL_DEVICES = ['people', 'mobile', 'tablet', 'desktop']

const BLANK_FORM = {
  project: '', brands: '', logo: '', url: '',
  highlights: ['', '', '', ''],
  tags: [], devices: [],
  sort_order: '', active: true, online: true, slug: ''
}

function blankForm() {
  return { ...BLANK_FORM, highlights: ['', '', '', ''], tags: [], devices: [] }
}

export default class CMS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: null,
      email: '', password: '',
      projects: [],
      form: blankForm(),
      editing: null,
      saving: false,
      error: null,
      success: null
    }
  }

  async componentDidMount() {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) { this.setState({ session }, () => this.loadProjects()) }
    supabase.auth.onAuthStateChange((_event, session) => {
      this.setState({ session })
      if (session) this.loadProjects()
    })
  }

  async handleLogin(e) {
    e.preventDefault()
    this.setState({ error: null })
    const { data, error } = await supabase.auth.signInWithPassword({
      email: this.state.email,
      password: this.state.password
    })
    if (error) return this.setState({ error: error.message })
    this.setState({ session: data.session }, () => this.loadProjects())
  }

  async handleLogout() {
    await supabase.auth.signOut()
    this.setState({ session: null, projects: [], form: blankForm(), editing: null })
  }

  async loadProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: false })
      if (error) return this.setState({ error: `DB error: ${error.message}` })
      this.setState({ projects: data || [] })
    } catch (e) {
      this.setState({ error: `Failed: ${e.message}` })
    }
  }

  handleFormChange(field, value) {
    this.setState(prev => ({ form: { ...prev.form, [field]: value } }))
  }

  handleHighlightChange(index, value) {
    this.setState(prev => {
      const highlights = [...prev.form.highlights]
      highlights[index] = value
      return { form: { ...prev.form, highlights } }
    })
  }

  handleTagToggle(tag) {
    this.setState(prev => {
      const tags = prev.form.tags.includes(tag)
        ? prev.form.tags.filter(t => t !== tag)
        : [...prev.form.tags, tag]
      return { form: { ...prev.form, tags } }
    })
  }

  handleDeviceToggle(device) {
    this.setState(prev => {
      const devices = prev.form.devices.includes(device)
        ? prev.form.devices.filter(d => d !== device)
        : [...prev.form.devices, device]
      return { form: { ...prev.form, devices } }
    })
  }

  startEdit(project) {
    this.setState({
      editing: project.id,
      form: {
        ...project,
        highlights: [0,1,2,3].map(i => (project.highlights || [])[i] || ''),
        tags: [...(project.tags || [])],
        devices: [...(project.devices || [])]
      },
      error: null, success: null
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  cancelEdit() {
    this.setState({ editing: null, form: blankForm(), error: null, success: null })
  }

  async handleSave(e) {
    e.preventDefault()
    this.setState({ saving: true, error: null, success: null })

    const { form, editing, projects } = this.state
    const highlights = form.highlights.filter(h => h.trim() !== '')
    const slug = form.slug || form.project.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const nextSortOrder = editing !== null
      ? parseInt(form.sort_order, 10)
      : Math.max(...projects.map(p => p.sort_order ?? 0), 0) + 1

    const payload = {
      project: form.project, brands: form.brands, logo: form.logo, url: form.url,
      highlights, tags: form.tags, devices: form.devices,
      sort_order: nextSortOrder, active: form.active, online: form.online, slug
    }

    let error
    if (editing !== null) {
      ;({ error } = await supabase.from('projects').update(payload).eq('id', editing))
    } else {
      const maxId = Math.max(...projects.map(p => p.id), -1)
      ;({ error } = await supabase.from('projects').insert({ ...payload, id: maxId + 1 }))
    }

    if (error) {
      this.setState({ saving: false, error: error.message })
    } else {
      this.setState({ saving: false, success: editing ? 'Project updated.' : 'Project added.', editing: null, form: blankForm() })
      this.loadProjects()
    }
  }

  async handleDelete(project) {
    if (!window.confirm(`Delete "${project.project}"?`)) return
    const { error } = await supabase.from('projects').delete().eq('id', project.id)
    if (error) return this.setState({ error: error.message })
    this.loadProjects()
  }

  async moveUp(project) {
    const { projects } = this.state
    const idx = projects.findIndex(p => p.id === project.id)
    if (idx === 0) return
    const above = projects[idx - 1]
    await supabase.from('projects').update({ sort_order: above.sort_order }).eq('id', project.id)
    await supabase.from('projects').update({ sort_order: project.sort_order }).eq('id', above.id)
    this.loadProjects()
  }

  async moveDown(project) {
    const { projects } = this.state
    const idx = projects.findIndex(p => p.id === project.id)
    if (idx === projects.length - 1) return
    const below = projects[idx + 1]
    await supabase.from('projects').update({ sort_order: below.sort_order }).eq('id', project.id)
    await supabase.from('projects').update({ sort_order: project.sort_order }).eq('id', below.id)
    this.loadProjects()
  }

  render() {
    const { session, email, password, projects, form, editing, saving, error, success } = this.state

    const helmet = (
      <Helmet>
        <title>CMS · michaelcastilla.com</title>
        <style>{'body { background-color: #f5f5f7 !important; margin: 0; }'}</style>
      </Helmet>
    )

    if (!session) {
      return (
        <div style={styles.page}>
          {helmet}
          <form onSubmit={e => this.handleLogin(e)} style={styles.loginBox}>
            <h2 style={styles.heading}>Portfolio CMS</h2>
            <input type="email" placeholder="Email" value={email} autoFocus required
              onChange={e => this.setState({ email: e.target.value, error: null })}
              style={styles.input} />
            <input type="password" placeholder="Password" value={password} required
              onChange={e => this.setState({ password: e.target.value, error: null })}
              style={styles.input} />
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.btn}>Sign in</button>
          </form>
        </div>
      )
    }

    return (
      <div style={styles.page}>
        {helmet}
        <div style={styles.topbar}>
          <span style={styles.heading}>{editing !== null ? 'Edit Project' : 'Add New Project'}</span>
          <button style={styles.btnGhost} onClick={() => this.handleLogout()}>Sign out</button>
        </div>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <form onSubmit={e => this.handleSave(e)} style={styles.form}>
          <div style={styles.grid2}>
            <div style={styles.row}>
              <label style={styles.label}>Project Name</label>
              <input style={styles.input} value={form.project} required onChange={e => this.handleFormChange('project', e.target.value)} />
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Brands</label>
              <input style={styles.input} value={form.brands} onChange={e => this.handleFormChange('brands', e.target.value)} />
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Logo slug <span style={styles.hint}>(e.g. "apple")</span></label>
              <input style={styles.input} value={form.logo} onChange={e => this.handleFormChange('logo', e.target.value)} />
            </div>
            <div style={styles.row}>
              <label style={styles.label}>URL</label>
              <input style={styles.input} type="url" value={form.url} onChange={e => this.handleFormChange('url', e.target.value)} />
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Slug <span style={styles.hint}>(auto if blank)</span></label>
              <input style={styles.input} value={form.slug} onChange={e => this.handleFormChange('slug', e.target.value)} />
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Sort Order <span style={styles.hint}>(lower = top)</span></label>
              <input style={styles.input} type="number" value={form.sort_order} onChange={e => this.handleFormChange('sort_order', e.target.value)} />
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Highlights</label>
            <div style={styles.grid2}>
              {form.highlights.map((h, i) => (
                <input key={i} style={styles.input} placeholder={`Highlight ${i + 1}`} value={h}
                  onChange={e => this.handleHighlightChange(i, e.target.value)} />
              ))}
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Tags</label>
            <div style={styles.chipGrid}>
              {ALL_TAGS.map(tag => (
                <button key={tag} type="button"
                  style={form.tags.includes(tag) ? styles.chipOn : styles.chipOff}
                  onClick={() => this.handleTagToggle(tag)}>#{tag}</button>
              ))}
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Devices</label>
            <div style={styles.chipGrid}>
              {ALL_DEVICES.map(d => (
                <button key={d} type="button"
                  style={form.devices.includes(d) ? styles.chipOn : styles.chipOff}
                  onClick={() => this.handleDeviceToggle(d)}>{d}</button>
              ))}
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Flags</label>
            <div style={styles.chipGrid}>
              {[['active', 'Active'], ['online', 'Online']].map(([field, label]) => (
                <button key={field} type="button"
                  style={form[field] ? styles.chipOn : styles.chipOff}
                  onClick={() => this.handleFormChange(field, !form[field])}>{label}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" style={styles.btn} disabled={saving}>
              {saving ? 'Saving…' : editing !== null ? 'Update Project' : 'Add Project'}
            </button>
            {editing !== null && <button type="button" style={styles.btnGhost} onClick={() => this.cancelEdit()}>Cancel</button>}
          </div>
        </form>

        <h3 style={{ ...styles.label, margin: '32px 0 12px', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
          Projects ({projects.length})
        </h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order</th>
              <th style={styles.th}>Project</th>
              <th style={styles.th}>Slug</th>
              <th style={styles.th}>Active</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, idx) => (
              <tr key={p.id} style={idx % 2 === 0 ? styles.trEven : styles.trOdd}>
                <td style={styles.td}>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <span style={{ width: 28, textAlign: 'right', color: '#999', fontSize: 12 }}>{p.sort_order}</span>
                    <button style={styles.btnSmall} onClick={() => this.moveUp(p)}>↑</button>
                    <button style={styles.btnSmall} onClick={() => this.moveDown(p)}>↓</button>
                  </div>
                </td>
                <td style={styles.td}>{p.project}</td>
                <td style={{ ...styles.td, color: '#999', fontSize: 12 }}>{p.slug}</td>
                <td style={styles.td}>{p.active ? '✓' : '—'}</td>
                <td style={styles.td}>
                  <button style={styles.btnSmall} onClick={() => this.startEdit(p)}>Edit</button>
                  {' '}
                  <button style={{ ...styles.btnSmall, color: '#c00' }} onClick={() => this.handleDelete(p)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const styles = {
  page: { maxWidth: 900, margin: '0 auto', padding: '40px 24px', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', color: '#1d1d1f', minHeight: '100vh', userSelect: 'text' },
  loginBox: { maxWidth: 340, margin: '15vh auto 0', display: 'flex', flexDirection: 'column', gap: 12, background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 20px rgba(0,0,0,.08)' },
  topbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  heading: { fontSize: 20, fontWeight: 700 },
  form: { display: 'flex', flexDirection: 'column', gap: 16, background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,.06)' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  row: { display: 'flex', flexDirection: 'column', gap: 4 },
  label: { fontSize: 12, fontWeight: 600, color: '#666' },
  hint: { fontWeight: 400, color: '#aaa' },
  input: { padding: '8px 10px', borderRadius: 6, border: '1px solid #e0e0e0', fontSize: 14, width: '100%', boxSizing: 'border-box', background: '#fff' },
  chipGrid: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  chipOn: { padding: '4px 12px', borderRadius: 20, border: 'none', background: '#1d1d1f', color: '#fff', fontSize: 12, cursor: 'pointer' },
  chipOff: { padding: '4px 12px', borderRadius: 20, border: '1px solid #ddd', background: '#fff', color: '#666', fontSize: 12, cursor: 'pointer' },
  btn: { padding: '10px 22px', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, cursor: 'pointer', fontWeight: 600 },
  btnGhost: { padding: '8px 16px', background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 8, fontSize: 13, cursor: 'pointer' },
  btnSmall: { padding: '3px 8px', background: '#f0f0f0', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 12, cursor: 'pointer' },
  error: { color: '#c00', fontSize: 13, margin: '4px 0' },
  success: { color: '#080', fontSize: 13, margin: '4px 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th: { textAlign: 'left', padding: '8px 10px', borderBottom: '2px solid #eee', fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 0.5 },
  td: { padding: '8px 10px', borderBottom: '1px solid #f5f5f5', verticalAlign: 'middle' },
  trEven: { background: '#fff' },
  trOdd: { background: '#fafafa' }
}
