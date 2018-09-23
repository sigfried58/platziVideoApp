import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

SuggestionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({}))
};

SuggestionList.defaultProps = {
  list: []
};

export default SuggestionList;
