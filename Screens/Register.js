//97:FB:AF:B6:D0:69:0D:E7:99:90:33:5B:A5:8C:C4:FF:25:B2:7C:10

import React from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import ImagePicker from 'react-native-image-crop-picker';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
	header: null,
	};
  /*constructor (props){
  	super (props)
  }  /* Want to enable is the compoment to accept prpos from stack navigator */

/*{ ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
  ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
  console.log(image);
});
ImagePicker.openCropper({
  path: 'my-file-path.jpg',
  width: 300,
  height: 400
}).then(image => {
  console.log(image);
});
}*/
  render() {

    return (
      <View>
          <TouchableOpacity>
            <Text>image</Text>
          </TouchableOpacity>

          <View>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            />

            <Text>
              Register  Here now
            </Text>
          <Button onPress={this.ImagePicker} title="Crop Image" color="blue" />
        </View>
      </View>
    );
  }
}
