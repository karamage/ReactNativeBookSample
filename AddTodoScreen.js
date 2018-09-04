import React, {Component} from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      memo: "",
    }
  }
  render() {
    const {todoList} = this.state
    return (
      <View style={styles.container}>
        <Text>追加画面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  itemCell: {
    flex: 1,
    width:'100%',
    padding: 20,
    margin: 2,
    backgroundColor: '#FFFFFF',
  }
})
