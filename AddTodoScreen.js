import React, {Component} from 'react';
import {TextInput,Button,StyleSheet,Text,View} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props)
    let {key, callback, editItem} = props.navigation.state.params
    let title = ""
    let memo = ""
    if (editItem !== undefined) {
      key = editItem.key
      title = editItem.title
      memo = editItem.memo
    }
    this.state = {
      key,
      callback,
      title,
      memo,
      editItem,
    }
  }
  //RN56で日本語入力ができない問題の対応
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.title !== nextState.title){
      return false;
    }
    if(this.state.memo !== nextState.memo){
      return false;
    }
    return true;
  }
  render() {
    const {callback,editItem} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>タイトル</Text>
          <TextInput
            style={{borderColor: 'gray', borderBottomWidth: 1}}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />
          <Text>メモ</Text>
          <TextInput
            style={{borderColor: 'gray', borderBottomWidth: 1}}
            onChangeText={(memo) => this.setState({memo})}
            value={this.state.memo}
          />
        </View>
        <Button title={buttonTitle(editItem)} onPress={()=> {
          const {key,title,memo} = this.state
          console.log(`title=${title}`)
          let item = {key,title,memo}
          callback(item)
          this.props.navigation.goBack()
        }}/>
      </View>
    )
  }
}

const buttonTitle = (editItem)=> editItem === undefined ? "追加する":"更新する"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    margin:20,
  },
})
