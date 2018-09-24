import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addCategoryTodo } from 'actions/todos';

import InputGroup from 'components/common/InputGroup';

class AddTodo extends Component {
  state = {
    todoText: '',
  };

  handleTodoTextChange = todoText => {
    this.setState({ todoText });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    this.props.addCategoryTodo(
      this.props.match.params.categoryId,
      this.state.todoText
    );
    this.handleTodoTextChange('');
  };

  render() {
    return (
      <View>
        <Form onSubmit={this.handleTodoSubmit}>
          <InputGroup>
            <InputGroup.Input
              onChange={this.handleTodoTextChange}
              placeholder="Todo text"
              value={this.state.todoText}
            />
            <InputGroup.Addon type="submit">Add</InputGroup.Addon>
          </InputGroup>
        </Form>
      </View>
    );
  }
}

export default withRouter(connect(null, { addCategoryTodo })(AddTodo));

const View = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;
const Form = styled.form``;
