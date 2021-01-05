// app.js

/* Machito's Portfolio */

import React from 'react'

/* Branding */
export default function Logo(props) {
  if (props.src === undefined) {
    return ''
  } else {
    let src = props.src
    let brands = props.brands
    let dir = '/img/'
    let ext = '.svg'
    let prefix = 'logo-'
    let url = dir + prefix + src + ext
    return <img src={url} alt={brands} title={brands} />
  }
}
