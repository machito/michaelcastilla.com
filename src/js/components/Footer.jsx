/*
  Components: <Footer/>
  File: Footer.js
*/

/* Core components */
import React from 'react'

/* Tesla component */
import Tesla from './Tesla.jsx'

// import Analytics from './Analytics.jsx'

/* Footer component */
export default function Footer() {
  const copyright = `© 2007-${new Date().getFullYear()} Machito, Inc.`
  const colophon = "Made with ❤️ in Brooklyn."

  return (
    <div className="footer animated fadeIn">
      <Tesla />
      <p>
        <span className="copyright" title={copyright}>{copyright}</span><br/><br/>
        <span className="colophon" title={colophon}>
          Built in Brooklyn. 🗽 Based in Florida. 🌴
        </span><br/><br/>
        <span>Built with React + <s>Firebase</s> Supabase.</span>
      </p>
    </div>
  )
}
