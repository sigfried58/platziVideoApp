/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import store from './store';
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Loader from './src/loader/components/loader';
import Player from './src/player/containers/player';
import API from './utils/api';

import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: [],
    loading: true
  };
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
    this.setState({
      //   suggestionList: movies,
      //   categoryList: categories,
      loading: false
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>buscador</Text>
          <Text>categoria</Text>
          {this.state.loading ? (
            <Loader />
          ) : (
            <Fragment>
              <CategoryList />
              <SuggestionList />
            </Fragment>
          )}
        </Home>
      </Provider>
    );
  }
}
