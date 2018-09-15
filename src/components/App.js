import React, { Component } from 'react';
import Form from './Form.js';
import { Header, Container } from './common';


class App extends Component {
  render() {
    return (
      <Container>
        <Header headerText="Jones Form" />
        <Form />
      </Container>
    );
  }
}

export default App;
