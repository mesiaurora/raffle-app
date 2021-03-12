import { Navbar, Nav, NavLink, Form, Button, FormControl } from 'react-bootstrap';
import '../Styles/styles.css'

const Header = () => {
  return (
    <div className="fixed-top colour-primary text-style-header">
      <Navbar variant="dark">
        <Nav defaultActiveKey="/" className="m-auto">
        <Nav.Item>
          <NavLink href="/">Raffle App</NavLink>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="aboutKea">About creator</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="results">Results</Nav.Link>
        </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </Form>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
