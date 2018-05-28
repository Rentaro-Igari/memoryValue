import React from "react";
import { StyleSheet } from "react-native";
import { PropTypes } from "prop-types";
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';

export default class AppHeader extends React.Component {
  static get propTypes() {
    return {
      doLogout: PropTypes.func.isRequire
    };
  }

  static get defaultProps() {
    return {
      doLogout: () => {}
    };
  }

  render() {
  	return (
  	  <Header style={styles.header}>
  	  	<Left/>
        <Body>
          <Title style={styles.title}>Memory Value</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.doLogout()}>
            <Icon name="ios-log-out" />
          </Button>
        </Right>
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