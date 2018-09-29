/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Loader from './src/loader/components/loader';
import API from './utils/api';

import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
      loading: false
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <View style={{ flex: 1, height: 100 }}>
          <Video
            source={{
              uri:
                'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
            resizeMode="contain"
          />
        </View>
        <Text>buscador</Text>
        <Text>categoria</Text>
        {this.state.loading ? (
          <Loader />
        ) : (
          <Fragment>
            <CategoryList list={this.state.categoryList} />
            <SuggestionList list={this.state.suggestionList} />
          </Fragment>
        )}
      </Home>
    );
  }
}
