import React, { useState } from 'react';
import InsertPeople from '../Components/InsertPeople';
import Submit from '../Components/Submit';
import AddedPeople from '../Components/AddedPeople';
import RaffleSettings from '../Components/RaffleSettings';
import '../Styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row} from 'react-bootstrap'

function SetUpRaffle() {
  const containsAlert = ' is already added. Name needs to be unique'
  const [persons, setPersons] = useState([{ id: 1, name: 'name', numberOfEntries: '2'},{name: 'name2', numberOfEntries:'3'}])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  /*
    TODO: Raffle settings and submit button
  */


  /* Handles add person submit button click */
  const handleSubmit = e => {
    e.preventDefault()

    // Checks if new number is less than 1, and
    // sets it to one
     if (newNumber < 1) {
       setNewNumber('1');
     }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    // If person already exists, they won't be added
    if (!persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      setPersons(persons.concat(newPerson))
    } else {
      const alert = newName + containsAlert
      window.alert(alert)
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div className='container'>
      <Container>
      <Row className="column-spacing">
        <Col sm={6}>
          <RaffleSettings />
        </Col>
      </Row>
      <Row className="column-spacing">
        <Col sm={6}>
          <InsertPeople name={newName} newNameMethod={e => setNewName(e.target.value)}
          number={newNumber} newNumberMethod={e => setNewNumber(e.target.value)}
          handleSubmit={handleSubmit}/>
        </Col>
        <Col sm={6}>
          <AddedPeople persons={persons} />
        </Col>
      </Row>
      <Row className="column-spacing">
        <Col sm={12}>
        <Submit />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default SetUpRaffle;
