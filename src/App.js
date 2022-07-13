import React from 'react';

import { connect } from 'react-redux';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getCompleteItemAction,
  //getTodolist,
  //initListAction,
  getInitList,
} from './store/actionCreators';
import AppUI from './AppUI';
//import axios from 'axios';

const App = props => {
  const {
    deleteTodoItem,
    inputValue,
    changeInputValue,
    addTodoItem,
    completeTodoItem,
    list,
  } = props;
  return (
    <AppUI
      inputValue={inputValue}
      list={list}
      changeInputValue={changeInputValue}
      addTodoItem={addTodoItem}
      deleteTodoItem={deleteTodoItem}
      completeTodoItem={completeTodoItem}
    />
  );
};
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    addTodoItem() {
      const action = getAddItemAction();
      dispatch(action);
    },
    deleteTodoItem(index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    },
    completeTodoItem(index) {
      const action = getCompleteItemAction(index);
      dispatch(action);
    },
    getInitList() {
      const action = getInitList();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
