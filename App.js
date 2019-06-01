/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation"
import LoginView from './src/login/LoginView';
import MainView from './src/main/MainView'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest ///在chrome浏览器中调试 Network可以看见自身的http请求
const AppNavigator = createStackNavigator({
  LoginView: { screen: LoginView },
  MainView: { screen: MainView },
},
  {//定义配置
    initialRouteName: 'LoginView',     //设置初始路由为Home
    mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏,隐藏所有导航
    onTransitionStart: () => { },  // 回调
    onTransitionEnd: () => { }  // 回调
  });
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

