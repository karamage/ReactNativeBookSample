import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

const Hoge = () => (
  <View><Text>Hoge</Text></View>
)
export default Hoge
/*
export default class Hoge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "こんにちは"
    }
    this.onPressButton = this.onPressButton.bind(this)
  }
  componentDidMount() {
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
    const promise = async () => {
      await sleep(2000);
      return 'resolve OK'
    }

    const awaitFunc = async () => {
      const result = await promise()
      console.log(result)
    }

    awaitFunc()

    // const promise = new Promise((resolve, reject) => {
    //   window.setTimeout(() => {
    //     resolve('resolve OK');
    //   }, 2000);
    // });
    //
    // promise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
*/

const getText = (isShow) => isShow ? "こんにちは":"非表示です"

