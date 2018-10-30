import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateCategoryName } from '../../actions/categories';

import InputGroup from '../common/InputGroup';
import colors from '../../constants/colors';
import FontIcon from '../common/FontIcon';

class CategoryName extends Component {
  constructor(props) {
    super();
    this.state = {
      inEditMode: false,
      categoryName: props.category.name,
    };
  }

  toggleEditMode = () => {
    this.setState({
      inEditMode: !this.state.inEditMode,
    });
  };

  updateTempCategoryName = categoryName => {
    this.setState({
      categoryName,
    });
  };

  saveCategoryName = event => {
    event.preventDefault();
    this.toggleEditMode();
    this.props.updateCategoryName(
      this.props.category.id,
      this.state.categoryName,
    );
  };

  render() {
    const { category, inEditTodoMode } = this.props;
    const { inEditMode, categoryName } = this.state;

    return (
      <Name>
        {(inEditMode && (
          <Form onSubmit={this.saveCategoryName}>
            <InputGroup>
              <InputGroup.Input
                value={categoryName}
                onChange={this.updateTempCategoryName}
              />
              <InputGroup.Addon type="submit">Save</InputGroup.Addon>
              <InputGroup.Addon
                onClick={this.toggleEditMode}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </InputGroup.Addon>
            </InputGroup>
          </Form>
        )) || (
          <Link to={`/${category.id}`} exact>
            {category.name}
          </Link>
        )}
        {!inEditMode &&
          !inEditTodoMode && (
            <ToggleEditNameMode onClick={this.toggleEditMode}>
              <FontIcon icon="pencil-square-o" />
            </ToggleEditNameMode>
          )}
      </Name>
    );
  }
}

export default withRouter(connect(null, { updateCategoryName })(CategoryName));

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled(NavLink).attrs({
  activeStyle: {
    color: colors.aero,
  },
})`
  color: initial;
  text-decoration: none;
  margin-right: 5px;
`;

const ToggleEditNameMode = styled.div`
  color: ${colors.aero};
  font-size: 22px;
  cursor: pointer;
  margin-left: 15px;
`;

const Form = styled.form``;
