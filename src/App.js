import React, { Component } from 'react';
import { Provider } from 'rebass';
import { Flex } from 'grid-styled';
import Container from './components/Container';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <Container>
          <Flex flexDirection="wrap">
            <Header />
          </Flex>
        </Container>
      </Provider>
    );
  }
}

export default App;
