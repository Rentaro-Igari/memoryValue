import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import PropTypes from 'prop-types';
import { Form, Item, Input, Label, Button, Text } from 'native-base';

import CommonButton from "./CommonButton";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  static get propTypes() {
    return {
      isLogin: PropTypes.bool,
      doLogin: PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      isLogin: false,
      doLogin: () => {}
    }
  }

  onChangeEmail(value) {
    this.setState({
      email: value
    })
  }

  onChangePassword(value) {
    this.setState({
      password: value
    })
  }

  onPressButton() {
    this.props.doLogin(
      this.state.email,
      this.state.password
    );
  }

  render() {
    if(this.props.isLogin) {
      return null;
    }

    return (
      <Form>
        <Item floatingLabel>
          <Label>e-mail</Label>
          <Input
            onChangeText={value => this.onChangeEmail(value)}
            value={this.state.email}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            onChangeText={value => this.onChangePassword(value)}
            value={this.state.password}
            secureTextEntry
          />
        </Item>
        <CommonButton
          text={"Sign in"}
          onPress={() => this.onPressButton()}
        />
      </Form>
    );
  }
}
