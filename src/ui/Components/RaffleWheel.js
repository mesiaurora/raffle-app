import React from 'react'
import '../Styles/styles.css'
import '../Styles/wheel.css'
/* import Person from '../Components/Person'
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem, Form, Button, FormControl, FormLabel, FormGroup} from 'react-bootstrap'
*/

const RaffleWheel = (props) => {

  const persons = props.persons

  /*

  const selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  const { selectedItem } = 2;
  const { items } = persons;

  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItem,
  };
  const spinning = selectedItem !== null ? 'spinning' : '';



  <div>
  <div className="wheel-container">
    <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
      {items.map((item, index) => (
        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
          {item}
        </div>
      ))}
    </div>
  </div>
  </div>
*/


  return (
    <div className="wheel-container">
  {persons.map((item, index) => (
    <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
      {item.name}
    </div>
  ))}
</div>
  )
}

export default RaffleWheel
