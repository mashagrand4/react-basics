import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TextArea extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return <Input {...this.props} onChange={this.handleChange} />;
  }
}

export default TextArea;

const Input = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 10px;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;
