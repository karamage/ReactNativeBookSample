import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

export default class Hoge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "こんにちは"
    }
    this.onPressButton = this.onPressButton.bind(this)
  }
  componentDidMount() {
    this.updateText(this.props.isShow)
  }
  updateText(isShow) {
    const text = getText(isShow)
    this.setState({text})
  }
  onPressButton() {
    const text = "ボタンを押したよ"
    this.setState({text})
    this.props.callback(text)
  }
  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
        <Button title="おして" onPress={this.onPressButton} />
      </View>
    )
  }
}

const getText = (isShow) => isShow ? "こんにちは":"非表示です"

