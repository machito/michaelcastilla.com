/*
  Components: <CV/>
  File: CV.js
  Note: Component template
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

/* CV component */
export default class CV extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
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
          <body className="resume" />
          <title>Michael L. Castilla · CV</title>
          <link rel="shortcut icon" href="/img/notepad.png"/>
        </Helmet>
        <div className="row">
          <h2>Intro</h2>
          <p>Hi, my name is Michael L. Castilla. I'm a product designer based in New York City with a passion for studying the art and science of people, habits, and products.</p>
          <p>My approach to digital strategy – called product operations – focuses on a streamlined customer validation process powered by lightweight design systems and agile-inspired software development practices.</p>

          <div className="experience">
            <h2>Experience</h2>
            <p><strong>Product Operations</strong>, SiriusXM + Pandora<br/>
            January 23, 2017 – Present<br/>
            New York, New York</p>
            <p>Sirius XM Radio is an American satellite radio company offering streaming and broadcasting services with a subscriber base of 30MM+.</p>
            <p>In Q2 2017, SiriusXM soflty launched "Spoke", the first social podcast experiment of its kind for the corporation.</p>
            <p>My role on the Spoke project was to lead the user experience and interface design of two web applications: Spoke, the public-facing web experience, and Spoke Publish, an internal app built to edit audio and manage the content on Spoke.</p>
            <p>In Q4 2018, the Spoke experiment was sunsetted & our product incubator was absorbed by the greater SiriusXM organization as apart of the "Data & AI Team". The infrastructure that powered Spoke paved the way for what would become SiriusXM Clips and SiriusXM Publish.</p>
            <p>In Q1 2019, SiriusXM announced the acquisition of Pandora Radio, extending its listener base to 100MM+.</p>
            <p>Pandora Radio is an American music streaming and automated music recommendation internet radio service powered by the Music Genome Project with a user base of 70MM++ and a subscriber base of 6MM+.</p>
            <p>At the beginning of Q2 2019, SiriusXM and Pandora released the first initiative of its kind for the two companies, "SiriusXM Podcasts", a collection of 22 exclusive shows, previously aired on SiriusXM and re-purposed as podcasts, on Pandora's mobile apps for free.</p>
            <p>I worked closely with the team to create the product that connects the two audio platforms together, streaming SiriusXM's content via a digital tool, called "SiriusXM Publish", to Pandora's listener base.</p>
            <p>As a front-end developer, product designer, and, even at times, a product owner for SiriusXM Publish, I help drive creative direction and shape overall product strategy as well as implement technical & design solutions.</p>
            <p>Towards the end of Q2 2019, the "Data & AI Team" team, along with other SiriusXM digital product teams, officially joined forces with Pandora's greater digital product team to form what's now called the "Digital Product Development (DPD)" organization of close to 1k designers and engineers.</p>
          </div>
          <div className="experience">
            <p><strong>Technical Project Manager</strong>, Worldmedia Interactive<br/>
            December 15, 2014 – February 5, 2016<br/>
            Miami, Florida</p>

            <p>Worldmedia Interactive is an award-winning full-service digital agency in Midtown Miami focusing on web and video production for well-known global companies primarily in the travel industry.</p>

            <p>My role involved strategizing and executing digital enterprise solutions. I worked closely with the Director of Technology, Lead Web Developer, & Creative Director to run a nimble, impactful Technology department.</p>

            <ul>
              <li>Built, deployed, and maintained JSON APIs, micro-services, and single-page app using AngularJS, NodeJS, MongoDB, and ExpressJS</li>
              <li>Maintained "WMi Kit", a custom AngularJS starter app</li>
              <li>Maintained "WMi API Framework", a custom WordPress plugin built with PHP and MySQL that exposes the CMS as a JSON API</li>
              <li>Pioneered the first-ever "WMi Smart Banners", a dynamic advertisement platform powered by modern JavaScript and engineered to display highly-engaging, travel-related promotional content to customers on travel search engines such as Expedia.com, Kayak.com, and TripAdvisor.com</li>
              <li>Performed phone, in-person, and technical interviews for the hire of additional developers</li>
              <li>Managed the on-boarding of a senior front-end developer and UX engineer</li>
            </ul>
          </div>
          <div className="experience">
            <p><strong>Product Owner, Mobile</strong>, 1Sale.com<br/>
            Dec 23, 2012 – Jun 30, 2014<br/>
            Miami, FL</p>

            <p>1Sale.com is a "daily deal" website, previously ranked in the top 1,000 websites, according to Alexa.com (2012), and ranked in the top 100 websites, according to InternetRetailer.com (2013).</p>

            <p>My role focused on creating and testing functional and appealing interfaces to enhance the customer shopping experience as well as the platform used by internal departments.</p>

            <ul>
              <li>Contributed thousands of lines of HTML, CSS, JavaScript, and Ruby to an eCommerce platform that facilitated over $150MM dollars in yearly revenue</li>
              <li>Managed the redesign and release of the 1Sale iOS v2 app, including cross-platform promotion resulting in $5MM of mobile sales and 10,000+ new mobile app downloads</li>
              <li>Designed and developed the UX/UI of an internal fraud-prevention app designed as a micro-service that prevented over $750,000 in fraudulent transactions</li>
              <li>Managed the development of a platform to facilitate the sale of third-party affiliate offers and deliver news to the community, an initiative directly requested by the CEO and Senior VP and generated 10MM+ page views and $20MM in affiliate referral commissions and ad sales</li>
              <li>Managed all design and code for all website transactional email templates delivered to 250,000+ customers 12 consecutive months</li>
              <li>Worked directly with the CMO and Creative Director to produce engaging daily promotional newsletters which generated nearly 30% of the company’s recurring revenue</li>
              <li>Tracked conversions, engagement, and click-through rates for new features and UX enhancements via A/B testing with Optimizely and Google Analytics</li>
              <li>Worked with the Social Media and Affiliate Marketing teams to produce and track engaging content on Twitter and Facebook to increase click-through rates and third-party offer sales</li>
              <li>Improved SEO by developing effective product page titles, a search engine friendly sitemap architecture, and driving direction on markup attributes site-wide</li>
              <li>Hand-crafted dozens of technical support emails assisting customers who were having issues placing orders on the site or mobile app</li>
              <li>Performed weeks of "lean" UX research with internal Buying, Fulfillment, Customer Service, and Fraud Prevention departments in order to design the UI for an internal back-end concept</li>
              <li>Attended CSS Dev Conf, SuperConf, and Ruby Conf Miami Beach for learning, networking, and talent recruiting purposes</li>
            </ul>
          </div>
          {/*<div className="experience">
            <p><strong>Head of Product</strong>, WPCoder<br/>
            2008 – 2012<br/>
            Miami, Florida</p>
          </div>
          <div className="experience">
            <p><strong>Head of Product</strong>, Machito<br/>
            2006 – Present<br/>
            Miami, Florida</p>
          </div>*/}

          <div class="content-column">
            <h2>Tools</h2>
            <table>
              <tbody>
                <tr>
                  <td>Product Management</td>
                  <td width="300">Jira, Asana, Basecamp, Trello, Evernote</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Sketch, Photoshop, InVision</td>
                </tr>
                <tr>
                  <td>Typography</td>
                  <td>TypeKit, Google Fonts, Fonts.com</td>
                </tr>
                <tr>
                  <td>Code Editor</td>
                  <td>Sublime Text 3, Atom, WebStorm</td>
                </tr>
                <tr>
                  <td>Markup</td>
                  <td>HTML5, HAML, Markdown, XML</td>
                </tr>
                <tr>
                  <td>Templates</td>
                  <td>Pug, Jade, Mustache, ERB, HAML</td>
                </tr>
                <tr>
                <td>CSS</td>
                <td>CSS3, SCSS, Compass, Bourbon</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>NodeJS, ExpressJS, AngularJS, JSON APIs</td>
                </tr>
                <tr>
                  <td>Version Control</td>
                  <td>Git, GitHub, Bitbucket</td>
                </tr>
                <tr>
                  <td>Build Systems</td>
                  <td>Grunt, Gulp</td>
                </tr>
                <tr>
                  <td>Blogging Engines</td>
                  <td>WordPress, Jekyll, Tumblr, Ghost</td>
                </tr>
                <tr>
                  <td>App Frameworks</td>
                  <td>Ruby on Rails, Django</td>
                </tr>
                <tr>
                  <td>Databases</td>
                  <td>MySQL, MongoDB, Redis</td>
                </tr>
                <tr>
                  <td>Browser Testing</td>
                  <td>BrowserStack, VirtualBox</td>
                </tr>
                <tr>
                  <td>Data</td>
                  <td>Google Analytics, Optimizely, Mixpanel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="content-column">
            <h2>Clients</h2>
            <ul>
              <li>Polo Ralph Lauren</li>
              <li>Neiman Marcus</li>
              <li>James L. Knight Foundation</li>
              <li>South Beach Food & Wine Festival</li>
              <li>Palm Beach Food & Wine Festival The Biltmore Hotel Miami</li>
              <li>The MIAMI Institute</li>
              <li>Karisma Hotels</li>
              <li>iJustine</li>
              <li>.CO</li>
              <li>Microsoft</li>
              <li>Ripley’s Entertainment</li>
              <li>Alcatel-Lucent</li>
              <li>Enterprise Rent-A-Car</li>
              <li>Alamo Rent-A-Car</li>
              <li>Norwegian Cruise Line</li>
              <li>JetBlue Airways</li>
              <li>South African Airways</li>
              <li>Air Canada</li>
              <li>Aeroméxico</li>
              <li>Resorts World Bimini</li>
            </ul>
          </div>

          <div className="">
            <h2>Recognition</h2>
            <p>Nominated for a 2015 Silver ADDY Award for NCL Escape Microsite (2016)</p>
            <p>Awarded the 2015 Travel Weekly Gold Magellan for NCL Escape Microsite (2015)</p>
            <p>Awarded the 2015 Travel Weekly Gold Magellan for NCL Escape Travel Agent Portal (2015)</p>
            <p>Awarded the #1 CSS developer in Miami on GitHub for open-source project “Animate.less” (2015)</p>
            <p>Listed multiple times as a “must follow” on Twitter for WordPress & Web Design topics</p>
          </div>
          <div className="">
            <h2>Publications</h2>
            <p>Featured multiple times in The Miami Herald for tech-related stories (2013, 2012, 1995)</p>
            <p>Mentioned in “WordPress and Flash 10x Cookbook” by Peter Spannagle & Sarah Soward (2010)</p>
            <p>Featured in Web Designer Magazine: Issue 157 (2009)</p>
          </div>

          {/*<h2>References</h2>
          <p>Auston Bunsen<br/>CTO 1Sale.com, (previously)</p>
          <p>Ptah Dunbar<br/>Professor, Miami-Dade College</p>
          <p>Ben Newton <br/>Senior UI Developer, Razorfish</p>
          <p>Joseph Van <br/>Founder, Bootstrap.io</p>*/}
        </div>
      </div>
    )
  }
}
