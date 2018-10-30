import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addNewCategory } from '../../actions/categories';

import InputGroup from '../common/InputGroup';

class AddRootCategory extends Component {
  state = {
    categoryName: '',
  };

  updateCategoryName = categoryName => {
    this.setState({
      categoryName,
    });
  };

  handleCategorySubmit = event => {
    event.preventDefault();
    this.props.addNewCategory(this.state.categoryName);
    this.updateCategoryName('');
  };

  render() {
    return (
      <View onSubmit={this.handleCategorySubmit}>
        <InputGroup>
          <InputGroup.Input
            onChange={this.updateCategoryName}
            value={this.state.categoryName}
            placeholder="Enter category title"
          />
          <InputGroup.Addon type="submit">Add</InputGroup.Addon>
        </InputGroup>
      </View>
    );
  }
}

export default connect(null, { addNewCategory })(AddRootCategory);

export const View = styled.form`
  margin-bottom: 30px;
`;
