/* Device & Devices components */

import React from 'react'

/* Experiences */
import { People, Mobile, Tablet, Desktop } from './Experiences.jsx'

export function Device(props) {
  let device = props.item;
  let deviceTitle = device.charAt(0).toUpperCase() + device.slice(1);
  if ( device === 'people' ) {
    return <People className={device} title={deviceTitle} item={device} />
  }
  if ( device === 'mobile' ) {
    return <Mobile className={device} title={deviceTitle} item={device} />
  }
  if ( device === 'tablet' ) {
    return <Tablet className={device} title={deviceTitle} item={device} />
  }
  if ( device === 'desktop' ) {
    return <Desktop className={device} title={deviceTitle} item={device} />
  }
  // return <deviceName className={"device " + device} title={deviceTitle} />
}

export function Devices(props) {
  let items = props.items;
  return <ul className="devices">{items}</ul>
}
