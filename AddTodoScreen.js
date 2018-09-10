import React, {Component} from 'react';
import {TextInput,Button,StyleSheet,Text,View} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props)
    const {key, callback} = props
    this.state = {
      key,
      callback,
      title: "",
      memo: "",
    }
  }
  render() {
    const {key,callback,title,memo} = this.state
    let item = {}
    return (
      <View style={styles.container}>
        <Text>追加画面</Text>
        <Text>タイトル</Text>
        <TextInput/>
        <Text>メモ</Text>
        <TextInput/>
        <Button title="追加する" onPress={()=>callback(item)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
})
