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
    this.updateText(this.props.isShow)
  }
  updateText(isShow) {
    const text = getText(isShow)
    this.setState({text})
  }
  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}

const getText = (isShow) => isShow ? "こんにちは":"非表示です"

