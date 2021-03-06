import { Form, Button, FormControl, FormLabel, FormGroup} from 'react-bootstrap'
import '../Styles/styles.css'

const InsertPeople = (props) => {

  const newName = props.name
  const newNumber = props.number
  const handleSubmit = props.handleSubmit

  return (
    <div>
      <h3>Add a new person</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="newName">
          <FormLabel className='text-style-content'>Name </FormLabel>
          <FormControl type="text" placeholder="Name" value={newName} onChange={props.newNameMethod} className="mr-sm-2" />
        </FormGroup>
        <FormGroup controlId="newNumber">
          <FormLabel className='text-style-content'>Number of entries (optional)</FormLabel>
          <FormControl type="number" placeholder="Number of entries" className="mr-sm-2" value={newNumber} onChange={props.newNumberMethod} />
        </FormGroup>
        <FormGroup controlId="formButton">
          <Button type="submit" variant="info">Add</Button>
        </FormGroup>
      </form>
    </div>
  )
}

export default InsertPeople
