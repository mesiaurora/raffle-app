import '../Styles/styles.css'
import { Form, Button, FormControl, FormLabel, FormGroup} from 'react-bootstrap'

const InsertPeopleForm = (props) => {

  const newNumber = props.newNumber
  const newName = props.newName
  const handleSubmit = props.handleSubmit

  return (
    <div>
    <Form>
      <FormGroup controlId="newName">
        <FormLabel className='text-style-content'>Name </FormLabel>
        <FormControl type="text" placeholder="Name" value={newName} onChange={props.newNameMethod} className="mr-sm-2" />
      </FormGroup>
      <FormGroup controlId="newNumber">
        <FormLabel className='text-style-content'>Number of entries (optional)</FormLabel>
        <FormControl type="number" placeholder="Number of entries" className="mr-sm-2" value={newNumber} onChange={props.newNumberMethod} />
      </FormGroup>
      <FormGroup controlId="formButton">
        <Button type='submit' variant="info" onClick={handleSubmit}>Add</Button>
      </FormGroup>
    </Form>
    </div>
  )
}

export default InsertPeopleForm
