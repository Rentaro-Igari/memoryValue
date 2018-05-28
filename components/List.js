import React from "react";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import { Card, CardItem, Left, Body, Right, Text, Icon, Button } from 'native-base';
import firebase from "firebase";

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
        {Object.keys(this.state.tweets).map(key => (
          <Card
            transparent
            key={key}
          >
          <CardItem>
            <Body>
              <Text>
                {this.state.tweets[key].text}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            {/*<Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>*/}
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        ))}
      </View>
  	);
  }
}
