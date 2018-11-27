import React, {Component} from 'react';
import {View, Text} from 'react-native';
import logo from './logo.svg';
import './App.css';
import {Svg, Rect, Circle, Path} from 'react-native-svg';

class App extends Component {
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

export default App;
