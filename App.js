import React from 'react';
import { Container, Text } from 'native-base';

import Header from "./components/Header";
// import Content from "./components/Content";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
