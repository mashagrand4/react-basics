import { connect } from 'react-redux';

import { updateTodoListFilter } from '../../actions/todos';

import Search from '../common/Search';

function mapStateToProps(state) {
  return {
    value: state.todos.filter.search,
  };
}

function mapDispatchToProps() {
  return function(dispatch) {
    return {
      onChange: function(value) {
        dispatch(updateTodoListFilter('search', value));
      },
    };
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
