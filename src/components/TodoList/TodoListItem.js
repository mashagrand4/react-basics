import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { toggleTodoStatus } from '../../actions/todos';

import FontIcon from '../common/FontIcon';
import CheckBox from '../common/CheckBox';
import TextLink from '../common/TextLink';

class TodoListItem extends Component {
  toggleTodoStatus = () => {
    this.props.toggleTodoStatus(this.props.todo.id);
  };

  render() {
    const { todo, match } = this.props;
    const redirectUrl = `${match.url}/${todo.id}`;
    return (
      <View>
        <TodoStatus
          isChecked={todo.completed}
          onClick={this.toggleTodoStatus}
        />
        <TodoText to={redirectUrl}>{todo.text}</TodoText>
        <TodoDetailsLink to={redirectUrl}>
          <FontIcon icon="pencil-square-o" />
        </TodoDetailsLink>
      </View>
    );
  }
}

export default connect(null, { toggleTodoStatus })(TodoListItem);

const View = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #eee;
`;

const TodoStatus = styled(CheckBox)`
  margin-right: 20px;
`;

const TodoText = TextLink.extend`
  font-size: 20px;
  font-weight: 500;
`;

const TodoDetailsLink = styled(Link)`
  margin-left: auto;
  font-size: 20px;
  color: initial;
`;
