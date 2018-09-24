import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import colors from 'constants/colors';

import FontIcon from 'components/common/FontIcon';

function RenameCategory() {
  return (
    <View>
      <FontIcon icon="pencil-square-o" />
    </View>
  );
}

export default RenameCategory;

const View = styled.div`
  color: ${colors.aero};
  font-size: 22px;
  cursor: pointer;
`;
