import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem, Form, Button, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import '../Styles/styles.css'

const Header = () => {


  return (
    <div className="fixed-top colour-primary text-style-header">
      <Navbar variant="dark">
        <Nav defaultActiveKey="/" className="m-auto">
        <Nav.Item>
          <Nav.Link href="/">Kea Mesi</Nav.Link>
        </Nav.Item>
        <Nav.Item>

          </Nav.Item>
          <Nav.Item>

          </Nav.Item>
          <Nav.Item>

          </Nav.Item>
        </Nav>

        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </Form>

          <Nav.Item>
            <Nav.Link href="#linkedIn"><SocialIcon url="http://linkedin.com/in/kea-tossavainen-645a1632/"/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#gitHub"><SocialIcon url="http://github.com/mesiaurora" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#blogger"><SocialIcon url="http://keamesi.blogspot.com/" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
