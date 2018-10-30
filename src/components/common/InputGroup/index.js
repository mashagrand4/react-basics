import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../../constants/colors';
import TextField from '../TextField';

const View = styled.div`
  display: flex;
  align-items: stretch;

  & > *:first-child {
    border-radius: 4px 0 0 4px;
  }

  & > *:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const Addon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  color: white;
  border: none;
  outline: none;
  background-color: ${colors.aero};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

class InputGroup extends Component {
  static Input = TextField;
  static Addon = Addon;

  render() {
    return <View>{this.props.children}</View>;
  }
}

export default InputGroup;
