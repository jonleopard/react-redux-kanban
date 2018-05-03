import React, { Component } from 'react';
import { Flex, Container } from 'rebass';
import Header from '../Header';
import ColumnContainer from '../Column/ColumnContainer';

const TestUrl =
  'https://gist.githubusercontent.com/pocketjoso/cfc14569428be2ca94307d7320b1f8d6/raw/82ed8042a92bce01837ff82577dc025b1f535558/snips-linguist-challenge-data--simple-one-level.json';

class Dashboard extends Component {
  state = {
    definition: [],
    possibleValues: [],
  };

  componentWillMount() {
    fetch(`${TestUrl}`)
      .then(res => res.json())
      .then(data => {
        const { definition, possibleValues } = data;

        this.setState({
          definition,
          possibleValues,
        });
      });
  }

  render() {
    const { definition, possibleValues } = this.state;
    return (
      <Flex>
        <Container>
          <Header />
          <ColumnContainer />
        </Container>
      </Flex>
    );
  }
}

export default Dashboard;
