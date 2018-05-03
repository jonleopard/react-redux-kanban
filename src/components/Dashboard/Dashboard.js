import React, { Component } from 'react';
import { Container } from 'rebass';
import Header from '../Header';
import ColumnContainer from '../Column/ColumnContainer';

class Dashboard extends Component {
  render = () => {
    return (
      <div>
        <Container>
          <Header />
          <ColumnContainer />
        </Container>
      </div>
    );
  };
}

export default Dashboard;
