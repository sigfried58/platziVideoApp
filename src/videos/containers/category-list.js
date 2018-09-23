import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <Layout title="Categorías">
        <FlatList
          horizontal
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

CategoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({}))
};

CategoryList.defaultProps = {
  list: []
};

export default CategoryList;
