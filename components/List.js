import React from "react";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import { Card, CardItem, Left, Body, Right, Text, Icon, Button } from 'native-base';
import firebase from "firebase";
import moment from "moment";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      database: {},
      tweets: {}
    }
  }

  static get propTypes() {
    return {
    };
  }

  static get defaultProps() {
    return {
    };
  }

  componentWillMount() {
    const database = firebase.database();
    this.setState({
      database: database
    })
  }

  componentDidMount() {
    this.state.database.ref("/tweets").on('value', snapShot => {
      console.log(snapShot.val());
      this.setState({tweets: snapShot.val()});
    });
  }

  render() {
  	return (
      <View>
        {Object.keys(this.state.tweets).reverse().map(key => (
          <Card
            transparent
            key={key}
          >
            <CardItem header>
              <Text>{this.state.tweets[key].uid}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.state.tweets[key].text}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Right>
                <Text>{this.state.tweets[key].created_at}</Text>
              </Right>
            </CardItem>
          </Card>
        ))}
      </View>
  	);
  }
}
