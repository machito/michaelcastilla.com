### Machito's Portfolio
> v1.20.0

Welcome to the portfolio of Michael L. Castilla ⚡

#### Use this repo:

Run for development:

`npm install && npm start`

Build the app for production:

`npm run build`

Deploy in one step:

`npm run deploy`

#### Things to do:

- ~Turn this doc into Markdown~
- ~Update Webpack to compile SCSS~
- Update fonts (use Typekit)
- Setup Google Analytics
- ~Use React Helmet for `<head>` management~
- Basic social meta data
- ~Setup Git and Bitbucket~
- ~Resume view~
- About view
- Contact view
- CV view (WIP)
- Use Flexbox where applicable (WIP)
- ~Use SASS instead of SCSS~
- ~Abstract `<Portfolio/>` as `<App/>`~
- SASS mixins for font families
- Variable font for GT Pressura Mono
- Move resume content to Firebase
- Host static assets on S3/Firebase
- Refactor `_project.sass` (WIP)
- Home view (WIP)
- ~README.md for running the app~
- Webpack common vs. dev vs. prod configs
- Fix `<Router/>` issues/concerns (WIP)
- ~Add menu to `<Header/>`~
- ~`<Menu/>`~
- ~Use `.jsx` instead of `.js` for component files~
- ~Implement better inline JSX comments~
- Parents & child component comments (WIP)
- "Light" & "dark" themes
- [Storybook](https://storybook.js.org/docs/basics/introduction/)
- ~Adjust `tabIndex` to account for menu items~
- Abstract `<Project/>` from `<Portfolio/>`
- `<Router/>` [URL params](https://reacttraining.com/react-router/web/example/url-params) to sort & order projects
- Proper tooltips
- "Gallery mode"
- Fix brand logos on smaller screens (WIP)
- ~Add a favicon~
- Add a sounds effects library
- "Narrow" vs "wide" containers
- Create a CMS to manage `<Dashboard/>` and `<Portfolio/>` (maybe use Electron 🤔)
- ~Dynamic copyright date in `<Footer/>`~
- Create a service for Firebase
- Dynamic `background-color` for `<Project/>`
- `background-color` vs `background-image` themes
- Convert from SASS to Stylus
- Mobile "column ordering" vs desktop column ordering

#### Notable technology used in this project:

- Babel
- ES6 functions
- ES6 classes
- React
- React Router
- Webpack
- Webpack Dev Server
- Git
- Bitbucket
- Firebase Real Time Database
- Firebase Hosting
- Firebase CLI
- Let's Encrypt SSL
- Underscore
- Sass
- Flexbox

#### Data schemas for app models:

Stat (Home):

```
Object: {
  "id" : Number,
  "active" : Boolean,
  "stat" : String,
  "label" : String
```

Project (Portfolio):

```
Object: {
  "id" : Number,
  "active" : Boolean,
  "project" : String,
  "brands" : String,
  "logo" : String,
  "highlights" : Array(Strings),
  "tags" : Array(Strings),
  "devices" : Array(Strings),
  "url" : String,
  "online" : Boolean,
  "slug" : String
}
```

Resume (WIP):

```
Object: {
  "id" : Number,
  "active" : Boolean,
  "heading" : String,
  "body": String|Array(Objects)
}
```

#### Component architecture:

```
<App />
  <Header />
    <Menu />
  <Home />
    <Dashboard />
      <Stat />
  <Portfolio />
    <Nav />
    <Project />
      <Title />
      <Highlights />
        <Highlight />
      <Devices />
        <Device />
          <People />
          <Mobile />
          <Tablet />
          <Desktop />
      <Tags />
        <Tag />
      <Branding />
        <Logo />
  <Resume />
  <CV />
  <Ouch />
  <Footer />
    <Tesla />
```

Routes:

```
/
/about
/contact
/notes
/cv
/portfolio
/portfolio/:project-slug
/resume
```
