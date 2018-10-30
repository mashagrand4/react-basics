import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../constants/colors';
import styled from 'styled-components';

import { addNewCategory } from '../../actions/categories';

import FontIcon from '../common/FontIcon';
import TextField from '../common/TextField';
import Button from '../common/Button';
import Dialog from '../common/Dialog';

class AddSubCategory extends Component {
  state = {
    isDialogVisible: false,
    categoryName: '',
  };

  toggleDialog = () => {
    this.setState({
      isDialogVisible: !this.state.isDialogVisible,
    });
  };

  handleCategoryAdd = () => {
    this.toggleDialog();
    this.props.addNewCategory(this.state.categoryName, this.props.categoryId);
  };

  handleCategoryNameChange = value => {
    this.setState({
      categoryName: value,
    });
  };

  render() {
    return (
      <View>
        <FontIcon icon="plus-circle" onClick={this.toggleDialog} />
        <Dialog isOpen={this.state.isDialogVisible}>
          <Dialog.Title>Add Category</Dialog.Title>
          <Dialog.Content>
            <p>Category name:</p>
            <TextField
              onChange={this.handleCategoryNameChange}
              value={this.state.categoryName}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={colors.argent} onClick={this.toggleDialog}>
              Cancel
            </Button>
            <Button onClick={this.handleCategoryAdd}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    );
  }
}

export default connect(null, { addNewCategory })(AddSubCategory);

const View = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: ${colors.argent};
`;
