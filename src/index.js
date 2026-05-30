/*
  File: index.js
  Note: Webpack entry point
*/

import posthog from 'posthog-js'
posthog.init('phc_86vQi1gIPPgJMT9fHuIUIzt1XsyrcErIEsn1SQPsEPz', {
  api_host: 'https://us.i.posthog.com',
})

/* App fonts */
import './js/controllers/fonts.js'

/* App styles  */
import './css/style.sass'

/* App controller */
import './js/controllers/app.js'
