import React, { Component } from 'react';
import { Container } from 'rebass';
import Header from '../Header';
import Row from '../Row';

class Dashboard extends Component {
  render = () => {
    return (
      <div>
      <Container>
        <Header />
        <Row />
      </Container>
    </div>
    );
  };
}

export default Dashboard;
