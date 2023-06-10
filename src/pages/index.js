import CircleAndGrid from 'components/CircleAndGridComponent';
import RandomBouncingCircle from 'components/RandomBouncingCircle';
import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  return (
    <Container style={{display:'grid', placeItems:'center'}} >
      <Row>
        <Col>
          <CircleAndGrid />
        </Col>
      </Row>
      <Row>
        <Col>
          <RandomBouncingCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

