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
  const copyright = `© All Rights Reserved 2007-${new Date().getFullYear()}`
  const colophon = "Made with ❤️ in Brooklyn"

  return (
    <div className="footer animated fadeIn">
      <Tesla />
      <p>
        <span className="copyright" title={copyright}>{copyright}</span><br/>
        <span className="colophon" title={colophon}>
          Made with <span className="heart">❤️</span> in Brooklyn
        </span>
      </p>
    </div>
  )
}
