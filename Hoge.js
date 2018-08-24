import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class Hoge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "こんにちは"
    }
  }
  componentDidMount() {
    if (!this.props.isShow) {
      this.setState({text:"非表示です"})
    }
  }
  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}

