import React from 'react'
import './Animal.css'

export default function Animal({ name, says, top, left, type }) {
  // const animalClass = `${name} THE ${props.type} ${props.says} ${props.top} ${props.left}`

  return (
    <div className="animal" style={{ top: top, left: left }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <span className="name">{name}</span>
      {name} {says}
    </div>
  )
}
