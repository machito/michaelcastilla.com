import React from 'react'

const DIMS = {
  '1sale':            { w: 49,  h: 26 },
  'aeromexico':       { w: 476, h: 85 },
  'alamo':            { w: 57,  h: 26 },
  'apple':            { w: 14,  h: 17 },
  'back-to-you.png':  { w: 380, h: 103 },
  'bml':              { w: 56,  h: 26 },
  'co.png':           { w: 374, h: 357 },
  'enterprise':       { w: 126, h: 26 },
  'flysaa':           { w: 174, h: 49 },
  'karisma-hotels':   { w: 336, h: 88 },
  'miami':            { w: 77,  h: 18 },
  'ncl':              { w: 174, h: 26 },
  'nyc':              { w: 93,  h: 32 },
  'pandora':          { w: 26,  h: 26 },
  'quicknode':        { w: 40,  h: 40 },
  'ralph-lauren':     { w: 350, h: 25 },
  'rwb':              { w: 85,  h: 26 },
  'siriusxm':        { w: 135, h: 26 },
  'siriusxm+p':      { w: 191, h: 27 },
  'spoke':            { w: 106, h: 26 },
  'stableterm':       { w: 40,  h: 40 },
  'toronto-escapes':  { w: 117, h: 26 },
  'wmx':              { w: 800, h: 450 },
}

export default function Logo(props) {
  if (props.src === undefined) {
    return ''
  }
  const src = props.src
  const brands = props.brands
  const dir = '/img/'
  const prefix = 'logo-'
  const url = src.includes('.') ? dir + prefix + src : dir + prefix + src + '.svg'
  const dims = DIMS[src] || {}
  return <img src={url} alt={brands} title={brands} width={dims.w} height={dims.h} />
}
