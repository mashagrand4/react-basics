import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateTodo } from '../../actions/todos';

import TextLink from '../common/TextLink';
import Label from '../common/Label';
import Button from '../common/Button';
import TextField from '../common/TextField';
import TextArea from '../common/TextArea';
import CheckBox from '../common/CheckBox';

class TodoDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      todoText: props.todo.text,
      todoCompleted: props.todo.completed,
      todoDescription: props.todo.description,
    };
  }

  getRedirectUrl() {
    const { pathname } = this.props.location;
    return pathname.slice(0, pathname.lastIndexOf('/'));
  }

  handleTodoTextChange = todoText => {
    this.setState({
      todoText,
    });
  };

  handleTodoUpdate = () => {
    this.props.updateTodo({
      ...this.props.todo,
      text: this.state.todoText,
      description: this.state.todoDescription,
      completed: this.state.todoCompleted,
    });
  };

  handleTodoDescriptionChange = todoDescription => {
    this.setState({
      todoDescription,
    });
  };

  toggleTodoStatus = () => {
    this.setState({
      todoCompleted: !this.state.todoCompleted,
    });
  };

  render() {
    return (
      <View>
        <TodoDetailsControls>
          <TextLink to={this.getRedirectUrl()}>
            <Button onClick={this.handleTodoUpdate}>Save changes</Button>
          </TextLink>

          <TextLink to={this.getRedirectUrl()}>
            <Button>Cancel</Button>
          </TextLink>
        </TodoDetailsControls>

        <Row>
          <Label direction="column">
            <Label.Text>Todo Text:</Label.Text>
            <TextField
              onChange={this.handleTodoTextChange}
              value={this.state.todoText}
              placeholder="Enter todo"
              required
            />
          </Label>
        </Row>
        <Row>
          <Label>
            <CheckBox
              isChecked={this.state.todoCompleted}
              onChange={this.toggleTodoStatus}
            />
            <Label.Text>Completed:</Label.Text>
          </Label>
        </Row>
        <Row>
          <Label fluid direction="column">
            <Label.Text>Description:</Label.Text>
            <TodoDescription
              component="textarea"
              value={this.state.todoDescription}
              onChange={this.handleTodoDescriptionChange}
            />
          </Label>
        </Row>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    todo: state.todos.list.find(function(todo) {
      return todo.id === props.match.params.todoId;
    }),
  };
}

export default connect(mapStateToProps, { updateTodo })(TodoDetails);

const View = styled.div``;
const TodoDetailsControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  > *:not(:first-child) {
    margin-left: 20px;
  }
`;

const Row = styled.div`
  margin: 25px 0;
`;

const TodoDescription = styled(TextArea)`
  width: 100%;
  height: 400px;
`;
