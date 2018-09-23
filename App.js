/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import Loader from './src/loader/components/loader';
import API from './utils/api';

import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    loading: true
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    this.setState({
      suggestionList: movies,
      loading: false
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categoria</Text>
        {this.state.loading ? (
          <Loader />
        ) : (
          <SuggestionList list={this.state.suggestionList} />
        )}
      </Home>
    );
  }
}
