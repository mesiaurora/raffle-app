import React from 'react'
import '../Styles/styles.css'
import Person from './Person'

const AddedPeople = (props) => {

  const persons = props.persons

  /* TODO: Maximum height for the list of people */

  return (
    <div>
      <h3>Already added people</h3>
      <ul className="text-style-content">
        {persons.map((person) =>
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default AddedPeople
