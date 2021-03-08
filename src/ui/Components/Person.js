import React from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name} : {person.numberOfEntries}</li>
  )
}

export default Person
