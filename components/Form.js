import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from 'firebase';
import moment from "moment";
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
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      console.log(currentUser);
      this.state.database.ref('/tweets').push({
        text: this.state.text,
        created_at: moment().format("YYYY-MM-DD hh:mm"),
        uid: currentUser.uid
      });
      this.setState({
        text: ""
      });
    } else {
      console.log("cannnot get currentUser");
    }
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