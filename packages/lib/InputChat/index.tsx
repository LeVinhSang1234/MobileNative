import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class InputChat extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput multiline placeholder="Sang" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default InputChat;
