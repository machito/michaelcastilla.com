/*
  Component: <Resume />
  File: Resume.jsx
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Resume extends Component {
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  componentDidMount() {
    this.scrollToTop()
  }
  render() {
    return (
      <div className="content animated fadeIn">
        <Helmet>
          <title>Michael Castilla · Resume</title>
          <link rel="shortcut icon" href="/img/document.png"/>
          <body className="resume" />
        </Helmet>
        <div className="row">
          <div className="column">

            <h2>Intro</h2>
            <p>I'm Michael Castilla — a GTM Engineer based in Central Florida with 20+ years of experience at the intersection of product, engineering, and go-to-market strategy. I've built developer tools at Quicknode, shipped CRM infrastructure at Apple, and launched SiriusXM's first podcast platform in collaboration with Pandora. I specialize in product operations: closing the loop between what gets built, how it ships, and how it grows.</p>

            <h2>Tools</h2>
            <ul>
              <li>Figma, Framer, Storybook</li>
              <li>React, TypeScript, Next.js, Node.js</li>
              <li>Sass, Tailwind, CSS Modules</li>
              <li>Supabase, PostgreSQL, Firebase, Redis</li>
              <li>AWS, Vercel, Cloudflare, GitHub Actions</li>
              <li>Linear, Notion, Jira, Confluence</li>
              <li>PostHog, Mixpanel, Metabase</li>
              <li>Claude, Cursor, GitHub Copilot</li>
              <li>Git, GitHub, CI/CD pipelines</li>
              <li>Webpack, Vite, Turborepo</li>
              <li>HubSpot, Segment, Slack</li>
            </ul>

            <h2>Clients</h2>
            <ul>
              <li>.CO Internet</li>
              <li>Aeroméxico</li>
              <li>Alamo Rent-A-Car</li>
              <li>Alcatel-Lucent</li>
              <li>Anteros Cruises</li>
              <li>Back To You Rehab &amp; Therapy</li>
              <li>Chantecaille</li>
              <li>City of New York</li>
              <li>Enterprise Rent-A-Car</li>
              <li>First Quality</li>
              <li>James L. Knight Foundation</li>
              <li>JetBlue Airways</li>
              <li>Karisma Hotels &amp; Resorts</li>
              <li>Macy's</li>
              <li>Microsoft</li>
              <li>Neiman Marcus</li>
              <li>Norwegian Cruise Line</li>
              <li>Palm Beach Food &amp; Wine Festival</li>
              <li>Ralph Lauren</li>
              <li>Resorts World Bimini</li>
              <li>Ripley's Entertainment</li>
              <li>South African Airways</li>
              <li>South Beach Food &amp; Wine Festival</li>
              <li>The Biltmore Hotel Coral Gables</li>
              <li>The Leiden Collection</li>
              <li>The MIAMI Institute</li>
              <li>Toronto Escapes</li>
            </ul>

          </div>

          <div className="column">

            <h2>Experience</h2>

            <p>
              <strong>GTM Engineer</strong><br/>
              <em>Quicknode (2025–Present)</em><br/>
              Leading developer experience design and product operations across 80+ chains and 130+ networks for the web3 infrastructure platform.
            </p>

            <p>
              <strong>Senior Software Engineer</strong><br/>
              <em>Apple (2021–2025)</em><br/>
              Built front-end features for a custom CRM platform and co-managed a design system across a large cross-functional team.
            </p>

            <p>
              <strong>Product Operations Lead</strong><br/>
              <em>SiriusXM + Pandora (2017–2019)</em><br/>
              Led product operations at SiriusXM's internal product incubator, Big Mirror Labs. Shipped across 4 simultaneous product tracks with 18 engineers, 6 designers, and 2 data scientists.
            </p>

            <p>
              <strong>Product Designer</strong><br/>
              <em>Worldmedia Interactive (2014–2016)</em><br/>
              Digital product solutions for global travel and hospitality brands including Alamo, Enterprise, Norwegian Cruise Line, and Ralph Lauren.
            </p>

            <p>
              <strong>Product Owner, Mobile</strong><br/>
              <em>1Sale.com (2012–2014)</em><br/>
              Product development for a flash-sale retailer's iOS app. Mobile became the platform's primary conversion channel.
            </p>

            <h2>Recognition</h2>
            <p>Featured in The New York Times<br/>
            <em>City of NY's first cybersecurity initiative "NYC Secure" (2018)</em></p>

            <p>Travel Weekly Gold Magellan Award<br/>
            <em>NCL Escape Microsite &amp; Travel Agent Portal (2015)</em></p>

            <p>Nominated for a Silver ADDY Award<br/>
            <em>NCL Escape Microsite (2015)</em></p>

            <p>Awarded #1 CSS developer in Miami on GitHub<br/>
            <em>Open-source project "Animate.less" (2015)</em></p>

            <p>Founder of the largest annual WordPress event in Florida<br/>
            <em>WordCamp Miami (2008–Present)</em></p>

            <p>Featured in Web Designer Magazine: Issue 157 (2009)</p>

            <p>Mentioned in "WordPress and Flash 10x Cookbook"<br/>
            <em>Peter Spannagle &amp; Sarah Soward (2010)</em></p>

            <p>Featured multiple times for technology initiatives<br/>
            <em>The Miami Herald (2013, 2012, 1995)</em></p>

          </div>
        </div>
      </div>
    )
  }
}
