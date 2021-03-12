import React from 'react'
import '../Styles/styles.css'
import {Form, FormControl, FormLabel, FormGroup} from 'react-bootstrap'

const RaffleSettings = () => {

  return (
    <div>
    <h3>Raffle settings</h3>
    <Form>
      <FormGroup controlId="formName">
        <FormLabel className='text-style-content'>Number of prizes/rounds </FormLabel>
        <FormControl type="text" placeholder="Number of prizes" className="mr-sm-2" />
      </FormGroup>
      <FormLabel className='text-style-content'>Allow multiple entries</FormLabel>
      <Form.Check></Form.Check>
    </Form>
    </div>
  )
}

export default RaffleSettings
