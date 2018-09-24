import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleCategoryInTree } from 'actions/categoryTree';
import colors from 'constants/colors';

import FontIcon from 'components/common/FontIcon';

function CategoryToggle({ isChecked, onClick }) {
  return (
    <View isChecked={isChecked} onClick={onClick}>
      {<FontIcon icon={isChecked ? 'angle-up' : 'angle-down'} />}
    </View>
  );
}

function mapStateToProps(state, props) {
  return {
    isChecked: state.categoryTree.openCategories.includes(props.categoryId),
  };
}

function mapDispatchToProps() {
  return function(dispatch, props) {
    return {
      onClick: function() {
        dispatch(toggleCategoryInTree(props.categoryId));
      },
    };
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryToggle);

const activeStyles = `
background-color: ${colors.aero};
color: white;
border-color: ${colors.aero};
`;

const View = styled.div`
  padding: 4px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    ${activeStyles};
  }

  ${function(props) {
    if (props.isChecked) {
      return activeStyles;
    }

    return '';
  }};
`;
