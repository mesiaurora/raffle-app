import React from 'react'
import '../Styles/styles.css'
import Person from '../Components/Person'
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem, Form, Button, FormControl, FormLabel, FormGroup} from 'react-bootstrap'

const InsertPeopleForm = (props) => {

  const newNumber = props.newNumber
  const newName = props.newName

  return (
    <div>
    <Form inline>
      <FormGroup controlId="formName">
        <FormLabel className='text-style-content'>Name </FormLabel>
        <FormControl type="text" placeholder="Name" className="mr-sm-2" />
      </FormGroup>
      <FormGroup controlId="formNumber">
        <FormLabel className='text-style-content'>Number of entries (optional)</FormLabel> <br />
        <FormControl type="text" placeholder="Number of entries" className="mr-sm-2" />
      </FormGroup>
      <FormGroup controlId="formButton">
        <Button color="rgba(255, 255, 255)">Add</Button>
      </FormGroup>
    </Form>
    </div>
  )
}

export default InsertPeopleForm
