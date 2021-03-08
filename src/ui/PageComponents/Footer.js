import React from 'react'
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem, Form, Button, FormControl, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {


  return (
      <div className="fixed-bottom colour-secondary text-style-footer">
        <Navbar variant="light">
            <Nav defaultActiveKey="/" className="m-auto">
                Contact: kea.tossavainen(a)gmail.com
              </Nav>
              <Nav className="mx-auto">
                (c) Kea Tossavainen, 2020)
                <br />
                Built with React
              </Nav>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="#linkedIn"><SocialIcon url="http://linkedin.com/in/kea-tossavainen-645a1632/"/></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#gitHub"><SocialIcon url="http://github.com/mesiaurora" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#instagram"><SocialIcon url="https://www.instagram.com/keamakesthings/" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#instagram"><SocialIcon url="https://www.instagram.com/keagoeszero/" /></Nav.Link>
              </Nav.Item>
            </Nav>
        </Navbar>
    </div>
    )
  }

export default Footer
