import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from 'firebase';
import { StyleSheet } from "react-native";
import { Form, Textarea, Item } from "native-base";

import CommonButton from "./CommonButton";

export default class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      database: {},
      tweets: {}
    }
  }

  componentWillMount() {
    const database = firebase.database();
    this.setState({
      database: database
    })
  }

  onChangeText(value) {
    this.setState({
      text: value
    });
  }

  onPressButton() {
    this.state.database.ref('/tweets').push({
      text: this.state.text
    });
    this.setState({
      text: ""
    });
  }

  render() {
  	return(
  	  <Form>
        <Textarea
          rowSpan={5}
          bordered
          placeholder={"write something..."}
          onChangeText={(value) => this.onChangeText(value)}
          value={this.state.text}
        />
        <CommonButton
  	      text={"Submit"}
  	      onPress={() => this.onPressButton()}
  	    />
      </Form>
  	);
  }
}