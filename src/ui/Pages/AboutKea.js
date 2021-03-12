import React from 'react'
import '../Styles/styles.css'
import {Col, Row} from 'react-bootstrap'

const AboutKea = () => {
  return (
    <div className="text-style-content">
    <Row>
    <Col sm={8}>
      <h2>About</h2>
      <h4>About the creator of this page</h4>
      Kea codes and likes camels

      <h4>About this project</h4>
      <p>The idea for this site came from my partner. He has raffles in
        <a className="link" href="https://www.twitch.tv/john0cook8"> his Twitch stream, John0cook8</a> and we couldn't find a good
        raffle app for the use. <br />
        So I decided to make one. </p>

      <p>This is purely a hobby project and free to use.</p>

      <h4>Plugins and resources used</h4>
      <p>
      - <a className="link" href="https://github.com/jaketrent/react-social-icons">React-social-icons by Jake Trent</a>
      </p>
      </Col>
      <Col sm={4}>
        <img src="/images/keamesi_traced.png" alt="traced" width="100%" height="100%" />
      </Col>
      </Row>
    </div>
    )
  }

export default AboutKea
