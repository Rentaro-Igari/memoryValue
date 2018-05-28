import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Image } from 'react-native';
import { Content, Item, Input, Label, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Textarea } from 'native-base';

import Form from "./Form";
import List from "./List";

export default class MainContent extends React.Component {
  constructor() {
    super();
  }

  static get propTypes() {
    return {
      show: PropTypes.bool,
      firebase: PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      show: false
    };
  }

  render() {
    if(!this.props.show) {
      return null;
    }

  	return (
      <Content>
        <Form firebase={this.props.firebase} />
        <List />
      </Content>
  	);
  }
}
