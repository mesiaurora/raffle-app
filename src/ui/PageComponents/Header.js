import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../Styles/styles.css'
import AboutKea from '../Components/AboutKea';
import Results from '../Components/Results';
import SetUpRaffle from '../Components/SetUpRaffle';


const Header = () => {


  return (
    <div className="fixed-top colour-primary text-style-header">
      <Navbar variant="dark">
        <Nav defaultActiveKey="/" className="m-auto">
        <Nav.Item>
          <Nav.Link href="/">Raffle App</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/AboutKea">Raffle App</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Results">Raffle App</Nav.Link>
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
