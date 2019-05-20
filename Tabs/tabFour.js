import React from "react";
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
	header: null,
	};
  /*constructor (props){
  	super (props)
  }  /* Want to enable is the compoment to accept prpos from stack navigator */

  render() {

    return (
      <View>
        <Text>
      Kamata Photo
        </Text>
      </View>

    );
  }
}
