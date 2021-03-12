/* import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; */
import React, { useState } from 'react';
import Header from '../PageComponents/Header';
import Footer from '../PageComponents/Footer';
import InsertPeople from './InsertPeople';
import Submit from './Submit';
import AddedPeople from './AddedPeople';
import RaffleSettings from './RaffleSettings';
import RaffleWheel from './RaffleWheel';
/* import AboutKea from './AboutKea';
import Results from './Results'; */
import '../Styles/styles.css';
/* import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; */
import { Container, Col, Row} from 'react-bootstrap'

function SetUpRaffle() {
  const [persons, setPersons] = useState([{name: 'testi', numberOfEntries: '2'},{name: 'testi2', numberOfEntries:'3'}])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  /*
    TODO: Padding for submit button
    TODO: Raffle settings
    TODO: Fix form so it adds input
    TODO: Button colours•
    TODO: new number, if empty, always 1
    */


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
    <Header />
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
      <Footer />
    </div>
  );
}

export default SetUpRaffle;
