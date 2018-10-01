import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './Blink.styles';

export default class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: true
    };

    setInterval(() => {
      this.setState(prevState => ({
        showText: !prevState.showText
      }));
    }, 1000);
  }

  render() {
    let text = this.state.showText ? this.props.text : '';
    return <Text style={styles.text}>{text}</Text>;
  }
}
