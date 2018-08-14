/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categoria</Text>
        <Text>sugerencias</Text>
      </Home>
    );
  }
}
