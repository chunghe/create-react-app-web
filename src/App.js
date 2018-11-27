import React, {Component} from 'react';
import {View, Text} from 'react-native';
// for web, createSwitchNavigator must import from '@react-navigation/core',
//  if import from 'react-navigation', following warning whill shown:
//    client?cd17:157 ./node_modules/react-native-gesture-handler/GestureHandler.js
//    Module not found: Error: Can't resolve './gestureHandlerRootHOC' in
//    '/Users/chunghe/dev/mlive-web/node_modules/react-native-gesture-handler'
import {SceneView, SwitchRouter, createNavigator} from '@react-navigation/core';
import {Link, createBrowserApp} from '@react-navigation/web';
import logo from './logo.svg';
import './App.css';
import {Svg, Rect, Circle, Path} from 'react-native-svg';

class MainView extends React.Component {
  render() {
    const {descriptors, navigation} = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];

    return (
      <SceneView
        component={descriptor.getComponent()}
        navigation={descriptor.navigation}
      />
    );
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <View>
            <Text>hello react native</Text>
          </View>
          <Svg height="100" width="100">
            <Rect x="0" y="0" width="100" height="100" fill="black" />
            <Circle cx="50" cy="50" r="30" fill="yellow" />
            <Circle cx="40" cy="40" r="4" fill="black" />
            <Circle cx="60" cy="40" r="4" fill="black" />
            <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
          </Svg>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link routeName="Detail">go to detail page</Link>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

HomeScreen.path = '';

class DetailScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ececec',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 48}}>Welcome detail page</Text>
      </View>
    );
  }
}

DetailScreen.path = 'detail';

const RootStack = createNavigator(
  MainView,
  SwitchRouter({
    Home: HomeScreen,
    Detail: DetailScreen,
  }),
  {},
);

export default createBrowserApp(RootStack);
