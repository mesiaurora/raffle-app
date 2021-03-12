import React from 'react'

const Person = ({ person }) => {
  const id = person.id
  const name = person.name
  const numberOfEntries = person.numberOfEntries
  const winner = person.winner

  return (
    <li>{person.name}</li>
  )
}

export default Person
