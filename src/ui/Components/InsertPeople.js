import InsertPeopleForm from '../Components/InsertPeopleForm'

const InsertPeople = (props) => {

  const name = props.name
  const number = props.number
  const handleSubmit = props.handleSubmit

  return (
    <div>

    <InsertPeopleForm name={name} number={number}
    newNameMethod={props.newNumberMethod}
    newNumberMethod={props.newNameMethod}
    onSubmit={handleSubmit}/>

    </div>
  )
}

export default InsertPeople
