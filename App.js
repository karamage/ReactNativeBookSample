/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import TodoListScreen from './TodoListScreen'
type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <TodoNavigator/>
    )
  }
}

const TodoNavigator = StackNavigator({
  TodoList: { screen: TodoListScreen },
}, {
  initialRouteName: 'TodoList',
});
