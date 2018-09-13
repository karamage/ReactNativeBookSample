import React, {Component} from 'react';
import {Button,StyleSheet,Text,View,FlatList} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastKey: 4,
      todoList: [
        {
          key: '1',
          title: "部屋の掃除をする",
          memo:  "机の上も片付ける",
        },
        {
          key: '2',
          title: "牛乳を買いに行く",
          memo:  "切らしている",
        },
        {
          key: '3',
          title: "請求書を書く",
          memo:  "月末までに",
        },
        {
          key: '4',
          title: "洗濯する",
          memo:  "洗いもの溜まっている",
        },
      ]
    }
    this.addItem = this.addItem.bind(this)
  }
  tapAddButton() {
    const key = this.state.lastKey + 1
    this.setState({lastkey:key})
    this.props.navigation.navigate('AddTodo', {callback:this.addItem, key:`${key}`})
  }
  addItem(item) {
    console.log(`addItem item.key=${item.key} title=${item.title}`)
    let {todoList} = this.state
    todoList.push(item)
    this.setState({todoList:todoList.map((item)=>item)})
  }
  render() {
    const {todoList} = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({item})=> {
            return (
              <View style={styles.itemCell}>
                <Text>{item.key}.{item.title}</Text>
                <Text style={{fontSize:12,color:"#888"}}>{item.memo}</Text>
              </View>
            )
          }}
        />
        <Button title="追加" onPress={()=>this.tapAddButton()}/>
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
