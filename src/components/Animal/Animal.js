import React from 'react'
import './Animal.css'

export default function Animal(props) {
  // const animalClass = `${props.name} THE ${props.type} ${props.says} ${props.top} ${props.left}`

  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span className="name">{props.name}</span>
      {props.name} {props.says}
    </div>
  )
}
