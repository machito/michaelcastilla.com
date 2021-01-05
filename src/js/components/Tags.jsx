/* Tag & Tags components */

import React from 'react'

export function Tag(props) {
  let tag = "#" + props.item;
  return <li className="tag" title={tag}>{tag}</li>;
}

export function Tags(props) {
  let items = props.items;
  return <ul className="tags">{items}</ul>;
}
