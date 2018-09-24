import React from 'react';
import uniqueId from 'lodash.uniqueid';
import styled from 'styled-components';

import CategoryToggle from './CategoryToggle';
import CategoryControls from './CategoryControls';
import CategoryName from './CategoryName';

function Category({ category, openCategories, isEditTodoMode, location }) {
  const inEditTodoMode = location.pathname.match(/\//g).length === 2;
  return (
    <View>
      <Info>
        {(category.childCategories.length && (
          <CategoryToggle categoryId={category.id} />
        )) ||
          null}
        <CategoryName category={category} inEditTodoMode={inEditTodoMode} />
        <CategoryControls
          categoryId={category.id}
          inEditTodoMode={inEditTodoMode}
        />
      </Info>

      {openCategories.includes(category.id) && (
        <ChildCategories>
          {category.childCategories.map(function(childCategory) {
            return (
              <Category
                key={uniqueId()}
                category={childCategory}
                openCategories={openCategories}
                location={location}
              />
            );
          })}
        </ChildCategories>
      )}
    </View>
  );
}

export default Category;

const View = styled.div``;

const Info = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  padding: 15px;
  box-sizing: border-box;
`;

const ChildCategories = styled.div`
  box-sizing: border-box;
  margin-left: 20px;
`;
