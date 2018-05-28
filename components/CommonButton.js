import React ,{ Component }from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class CommonButton extends Component {
  constructor() {
  	super();
  }

  static get propTypes() {
  	return {
  	  text: PropTypes.string.isRequired,
  	  onPress: PropTypes.func
  	};
  }

  static get defaultProps() {
  	return {
  	  text: "",
  	  onPress: () => {}
  	};
  }

  render() {
    const { onPress, text } = this.props;

  	return(
	    <Button block style={styles.button} onPress={() => onPress()}>
        <Text style={styles.buttonText}>{text}</Text>
      </Button>
  	);
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F3E100",
    width: "50%",
    marginLeft: "10%"
  },
  buttonText: {
    color: "#333000"
  }
});
