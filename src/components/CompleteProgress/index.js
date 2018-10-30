import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from '../../constants/colors';

import { getTodoProgress } from '../../reducers/todos';

function CompletedProgress({ progress }) {
  return <View progress={progress} />;
}

function mapStateToProps(state) {
  return {
    progress: getTodoProgress(state),
  };
}

export default connect(mapStateToProps)(CompletedProgress);

const View = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 0 40px;

  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: ${colors.aero};
    width: ${function(props) {
      return `${props.progress}%`;
    }};
  }

  &:after {
    content: '${function(props) {
      return `${props.progress}%`;
    }}';

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }
`;
