import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import TodoListFilters from '../TodoListFilters';

function AppHeader() {
  return (
    <View>
      <Logo>
        <HomeLink to="/">To-Do List</HomeLink>
      </Logo>
      <Route exact path="/:categoryId" component={TodoListFilters} />
    </View>
  );
}

export default AppHeader;

const View = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  font-weight: 500;
  color: initial;
`;

const HomeLink = styled(Link)`
  color: initial;
  text-decoration: none;
`;
