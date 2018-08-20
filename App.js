/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';

import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categoria</Text>
        <SuggestionList />
      </Home>
    );
  }
}
