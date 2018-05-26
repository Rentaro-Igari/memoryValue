import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class AppHeader extends React.Component {
  render() {
  	return (
  	  <Header style={styles.header}>
  	  	<Left/>
        <Body>
          <Title style={styles.title}>Memory Value</Title>
        </Body>
        <Right />
  	  </Header>
  	);
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F3E100"
  },
  title: {
    color: "#333000"
  }
});