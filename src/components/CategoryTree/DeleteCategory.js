import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import colors from 'constants/colors';
import { deleteCategory } from 'actions/categories';

import FontIcon from 'components/common/FontIcon';
import Dialog from 'components/common/Dialog';
import Button from 'components/common/Button';

class DeleteCategory extends Component {
  state = {
    isDialogVisible: false,
  };

  toggleDialog = () => {
    this.setState({
      isDialogVisible: !this.state.isDialogVisible,
    });
  };

  handleCategoryDelete = () => {
    this.toggleDialog();
    this.props.deleteCategory(this.props.categoryId);
  };

  render() {
    return (
      <View>
        <FontIcon icon="trash" onClick={this.toggleDialog} />
        <Dialog isOpen={this.state.isDialogVisible}>
          <Dialog.Title>Category Delete</Dialog.Title>
          <Dialog.Content>
            Are you sure you want to delete this category?
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={colors.argent} onClick={this.toggleDialog}>
              No
            </Button>
            <Button onClick={this.handleCategoryDelete}>Yes</Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    );
  }
}

export default connect(null, { deleteCategory })(DeleteCategory);

const View = styled.div`
  color: #f4a3a3;
  font-size: 22px;
  cursor: pointer;
`;
