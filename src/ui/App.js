import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './PageComponents/Header';
import Footer from './PageComponents/Footer';
import InsertPeople from './Components/InsertPeople';
import Submit from './Components/Submit';
import AddedPeople from './Components/AddedPeople';
import './Styles/styles.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem, Form, Button, FormControl, FormLabel, FormGroup, Container, Col, Row} from 'react-bootstrap'

function App() {

  const containsAlert = ' is already added. Name needs to be unique'
  const [persons, setPersons] = useState([{name: 'testi', numberOfEntries: '2'},{name: 'testi2', numberOfEntries:'3'}])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (!persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      setPersons(persons.concat(newPerson))
    } else {
      const alert = newName + containsAlert
      window.alert(alert)
    }

    setNewName('')
    setNewNumber('')
  }

  {/*
    TODO: Padding for submit button
    TODO: Java
    TODO: Fix form so it adds input
    TODO: Button colours
    */}




  return (
    <div className='container'>
    <Container>
    <Row>
      <BrowserRouter>
        <div>
        <Switch>

        </Switch>

        </div></BrowserRouter>

        <Col sm={6}>

        <h2>Add new person and number of entries</h2>
        <InsertPeople />

        </Col>
        <Col sm={6}>
            <h2>Already added people</h2>
            <AddedPeople persons={persons} newNameMethod={e => setNewName(e.target.value)} newNumberMethod={e => setNewNumber(e.target.value)}
                    newName={newName} newNumber={newNumber} addNewPerson={addNewPerson} />
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

export default App;
