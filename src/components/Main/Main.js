import React from 'react'
import './Main.css'
import background from '../../background.png'
import { animals } from '../../data'
import Animal from '../Animal/Animal'

export default function Main() {
  return (
    <main className="Background" style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          type={animal.type}
          says={animal.says}
          left={animal.left}
          top={animal.top}
          name={animal.name}
        />
      ))}
    </main>
  )
}
