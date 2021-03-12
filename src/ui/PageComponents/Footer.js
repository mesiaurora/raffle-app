import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
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
            <SocialIcon url="http://linkedin.com/in/kea-tossavainen-645a1632/"/>
          </Nav.Item>
          <Nav.Item>
            <SocialIcon url="http://github.com/mesiaurora" />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon url="https://www.instagram.com/keamakesthings/" />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon url="https://www.instagram.com/keagoeszero/" />
           </Nav.Item>
          </Nav>
        </Navbar>
    </div>
    )
  }

export default Footer
