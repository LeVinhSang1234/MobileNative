import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import KeyboardInput from '@/lib/KeyboardInput';
import InputChat from '@/lib/InputChat';

class App extends Component<any, any> {
  render() {
    return (
      <KeyboardInput input={<InputChat />}>
        <FlatList
          contentContainerStyle={styles.container}
          inverted
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
          renderItem={({item}) => (
            <View style={[styles.viewItem]}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={item => item.toString()}
        />
      </KeyboardInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  viewItem: {
    paddingTop: 50,
  },
});

export default App;
