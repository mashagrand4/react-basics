import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Category from './Category';

class CategoryTree extends Component {
  render() {
    const { categories, openCategories, location } = this.props;
    if (location.pathname !== '/' && !categories.length) {
      return <Redirect to="/" />;
    }

    return (
      <View>
        {categories.map(function(category) {
          return (
            <Category
              key={category.id}
              category={category}
              openCategories={openCategories}
              location={location}
            />
          );
        })}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    openCategories: state.categoryTree.openCategories,
  };
}

export default connect(mapStateToProps)(CategoryTree);

const View = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
