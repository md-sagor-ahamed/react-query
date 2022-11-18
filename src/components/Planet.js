import React from 'react'

export default function Planet({planet}) {
  return (
    <div style={{margin: "10px 0", border: "1px solid black"}}>
        <h2>{planet.name}</h2>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
    </div>
  )
}
