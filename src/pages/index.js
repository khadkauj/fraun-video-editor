import CircleAndGrid from 'components/CircleAndGridComponent';
import RandomBouncingCircle from 'components/RandomBouncingCircle';
import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  return (
    <Container>
      <Row><CircleAndGrid /></Row>
      <Row><RandomBouncingCircle /></Row>
    </Container>
  );
};

export default Home;
