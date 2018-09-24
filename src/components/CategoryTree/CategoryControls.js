import React from 'react';
import uniqueId from 'lodash.uniqueid';
import styled from 'styled-components';

import DeleteCategory from './DeleteCategory';

import AddSubCategory from './AddSubCategory';
import MoveTodo from './MoveTodo';

function CategoryControls({ categoryId, inEditTodoMode }) {
  return (
    <View>
      {(!inEditTodoMode && [
        <DeleteCategory key={uniqueId()} categoryId={categoryId} />,
        <AddSubCategory key={uniqueId()} categoryId={categoryId} />,
      ]) || <MoveTodo categoryId={categoryId} />}
    </View>
  );
}

export default CategoryControls;

const View = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 15px;
  }
`;
