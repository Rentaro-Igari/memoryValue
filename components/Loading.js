import React ,{ Component }from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends Component {
  constructor() {
  	super();
  }

  static get propTypes() {
  	return {
  	  show: PropTypes.bool
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

  	return(
	    <View style={{flex: 1}}>
        <Spinner
          visible
          textContent={"Loading..."}
          textStyle={{ color: "#F3E100"}}
          overlayColor="rgba(0, 0, 0, 0.5)"
        />
      </View>
  	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})