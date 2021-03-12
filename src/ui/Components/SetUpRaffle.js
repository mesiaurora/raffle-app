import React, { useState } from 'react';
import InsertPeople from './InsertPeople';
import Submit from './Submit';
import AddedPeople from './AddedPeople';
import RaffleSettings from './RaffleSettings';
import RaffleWheel from './RaffleWheel';
import '../Styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row} from 'react-bootstrap'

function SetUpRaffle() {
  const [persons, setPersons] = useState([{name: 'testi', numberOfEntries: '2'},{name: 'testi2', numberOfEntries:'3'}])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

    const handleSubmit = e => {
      e.preventDefault()

      const newPerson = {
        name: newName,
        number: newNumber,
      }

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }

  return (
    <div className='container'>
      <Container>

        <RaffleWheel persons={persons}/>
      <Row>
        <Col sm={6}>
          <h3>Raffle settings</h3>
          <RaffleSettings />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h3>Add new person and number of entries</h3>
          <InsertPeople name={newName} newNameMethod={e => setNewName({newName}, e.target.value)}
          number={newNumber}
          newNumberMethod={e => setNewNumber({newNumber}, e.target.value)}
          onSubmit={handleSubmit}/>
        </Col>
        <Col sm={6}>
          <h3>Already added people</h3>
          <AddedPeople persons={persons} />
        </Col>
        </Row>
      <Row>
        <Col sm={12}>
        <Submit />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default SetUpRaffle;
