import React, {Component} from 'react';
import {
  Animated,
  KeyboardEvent,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {KeyboardInputProps} from '@/types';
import FreezeChildren from '@/lib/FreezeChilren';
import KeyboardListener from '@/lib/KeyboardListener';

class KeyboardInput extends Component<KeyboardInputProps, any> {
  hKb: number;
  hViewKb: Animated.Value;
  constructor(props: any) {
    super(props);
    this.state = {heightKeyboard: 0, hWd: 0};
    this.hKb = 0;
    this.hViewKb = new Animated.Value(0);
  }

  onLayout = ({nativeEvent: {layout}}: LayoutChangeEvent) => {
    this.setState({
      hWd: layout.height + Platform.select({android: this.hKb, default: 0}),
    });
  };

  keyboardShow = ({endCoordinates: {height}}: KeyboardEvent) => {
    this.hKb = height;
    this.animationView();
  };

  hideKeyboard = () => {
    this.hKb = 0;
    this.animationView();
  };

  animationView = () => {
    Animated.spring(this.hViewKb, {
      toValue: this.hKb,
      useNativeDriver: false,
      bounciness: 0,
      speed: Platform.select({android: 280, default: 12}),
      overshootClamping: true,
    }).start();
  };

  render() {
    const {hWd} = this.state;
    const {children, input} = this.props;
    return (
      <View style={styles.view} onLayout={this.onLayout}>
        <View style={{height: hWd}}>
          <FreezeChildren>{children}</FreezeChildren>
          <KeyboardListener
            onWillShow={this.keyboardShow}
            onWillHide={this.hideKeyboard}
          />
          <FreezeChildren>{input}</FreezeChildren>
          <Animated.View style={{height: this.hViewKb}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {flex: 1},
});

export default KeyboardInput;
