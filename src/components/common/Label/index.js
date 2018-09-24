import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 0.8em;
`;

class Label extends Component {
  static Text = Text;
  render() {
    const { children, ...props } = this.props;
    return <View {...props}>{children}</View>;
  }
}
export default Label;

const View = styled.label`
  display: inline-flex;
  ${function(props) {
    if (props.fluid) {
      return 'width: 100%';
    }

    return '';
  }};
  ${function(props) {
    if (props.direction === 'column') {
      return `
        flex-direction: column;
        & > *:first-child {
          margin-bottom: 5px;
        } 
      `;
    }

    return `
      > *:first-child {
        margin-right: 5px;
      }  
    `;
  }};
`;
