import React from 'react'
import '../Styles/styles.css'
import Person from '../Components/Person'

const AddedPeople = (props) => {

  const persons = props.persons

  return (
    <ul>
      {persons.map((person) =>
        <Person key={person.name} person={person}/>
      )}
    </ul>
  )
}

export default AddedPeople
