import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

class Player extends Component {
  state = {
    loading: true,
    paused: false
  };
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    });
  };
  onLoad = () => {
    this.setState({
      loading: false
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text>Progress bar |</Text>
            <Text>time left |</Text>
            <Text>fullscreen |</Text>
          </ControlLayout>
        }
      />
    );
  }
}

export default Player;
