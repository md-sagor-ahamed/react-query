import React from 'react'

export default function Person({person}) {
  return (
    <div style={{margin: "10px 0", border: "1px solid black"}}>
        <h2>{person.name}</h2>
        <p>Gender - {person.gender}</p>
        <p>Birth year - {person.birth_year}</p>
    </div>
  )
}
