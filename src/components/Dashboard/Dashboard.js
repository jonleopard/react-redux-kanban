import React, { Component } from 'react';
import { Container } from 'rebass';
import Header from '../Header';
import ColumnContainer from '../Column/ColumnContainer';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ColumnContainer />
      </Container>
    );
  }
}

export default Dashboard;
