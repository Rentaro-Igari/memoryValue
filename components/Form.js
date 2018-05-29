import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from 'firebase';
import moment from "moment";
import { StyleSheet, View } from "react-native";
import { Form, Textarea, Item } from "native-base";

import CommonButton from "./CommonButton";

export default class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      database: {},
      tweets: {}
    }
    this.textarea = React.createRef();
  }

  componentWillMount() {
    const database = firebase.database();
    this.setState({
      database: database
    })
  }

  onPressButton() {
    const textareaValue = this.textarea.current.wrappedInstance._lastNativeText;
    console.log(this.textarea.current);
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      console.log(currentUser);
      this.state.database.ref('/tweets').push({
        text: textareaValue,
        created_at: moment().format("YYYY-MM-DD hh:mm"),
        uid: currentUser.uid
      });
      this.textarea;
    } else {
      console.log("cannnot get currentUser");
    }
  }

  render() {
  	return(
  	  <Form>
        <View style={{marginTop: 20}} >
          <Textarea
            rowSpan={5}
            bordered
            placeholder={"今どうしてる？"}
            ref={this.textarea}
          />
        </View>
        <View style={{marginTop: 30, marginLeft: 80, marginBottom: 50}} >
          <CommonButton
    	      text={"record"}
    	      onPress={() => this.onPressButton()}
    	    />
        </View>
      </Form>
  	);
  }
}