import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from 'store/configureStore';

import CategoryTree from 'components/CategoryTree';

import AddTodo from 'components/AddTodo';
import AddRootCategory from 'components/AddRootCategory';
import AppHeader from 'components/AppHeader';
import TodoList from 'components/TodoList';
import TodoDetails from 'components/TodoDetails';
import SelectedTodoName from 'components/SelectedTodoName';
import CompleteProgress from 'components/CompleteProgress';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <View>
          <AppHeader />
          <CompleteProgress />
          <Content>
            <Sidebar>
              <Switch>
                <Route
                  exact
                  path="/:categoryId/:todoId"
                  component={SelectedTodoName}
                />
                <Route path="/" component={AddRootCategory} />
              </Switch>
              <Route path="/" component={CategoryTree} />
            </Sidebar>
            <Page>
              <Route path="/:categoryId" component={AddTodo} />
              <Switch>
                <Route exact path="/:categoryId" component={TodoList} />
                <Route path="/:categoryId/:todoId" component={TodoDetails} />
              </Switch>
            </Page>
          </Content>
        </View>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

const View = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: stretch;
  flex-grow: 1;
`;

const Page = styled.div`
  &:not(:empty) {
    flex-basis: 50%;
    padding-left: 20px;
    border-left: 1px solid #eee;
  }
`;

injectGlobal`
  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  #root {
    min-height: 100vh;
    display: flex;
  }
`;
