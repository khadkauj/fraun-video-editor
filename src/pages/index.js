import CircleAndGrid from 'components/CircleAndGridComponent';
import RandomBouncingCircle from 'components/RandomBouncingCircle';
import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FindGridCoordintate from 'components/FindGridCoordintate';
import VideoMouseTracker from 'components/VideoMouseTracker';
// import InteractiveMap from 'components/InteractiveMap';
// import Map from '../../components/Map';

import dynamic from 'next/dynamic';
import Detection from 'components/Detection';
import RTSPtoHLSVideoStream from 'components/RTSPtoHLSVideoStream';
const Map = dynamic(() => import('components/InteractiveMap'), {
  ssr: false
} )


const Home = () => {

  return (
    <Container style={{ display: 'grid', placeItems: 'center' }} >
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
      <Row>
        <Col>
          <FindGridCoordintate />
        </Col>
      </Row>
      <Row>
        <Col>
          <VideoMouseTracker />
        </Col>
      </Row>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
      <Row>
        <Col>
          <Detection />
        </Col>
      </Row>
      <Row>
        <Col>
          <RTSPtoHLSVideoStream />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

