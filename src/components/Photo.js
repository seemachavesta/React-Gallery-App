import React from 'react'

const Photos = props => ( 
  <li>
    <img src={props.url} alt={props.title}/>
  </li>
)

export default Photos;