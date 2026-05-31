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
    let prefix = 'logo-'
    let url = src.includes('.') ? dir + prefix + src : dir + prefix + src + '.svg'
    return <img src={url} alt={brands} title={brands} />
  }
}
