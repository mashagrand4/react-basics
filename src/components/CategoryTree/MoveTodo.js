import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import colors from 'constants/colors';

import { moveTodoIntoCategory } from 'actions/todos';

import FontIcon from 'components/common/FontIcon';

const MoveTodo = styled(FontIcon).attrs({
  icon: 'arrow-left',
})`
  color: ${colors.aero};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

function mapDispatchToProps() {
  return function(dispatch, props) {
    return {
      onClick: function() {
        // router sends empty params object
        const { pathname } = props.location;
        const [categoryId, todoId] = pathname.slice(1).split('/');
        dispatch(moveTodoIntoCategory(todoId, props.categoryId));
      },
    };
  };
}

export default withRouter(connect(null, mapDispatchToProps)(MoveTodo));
