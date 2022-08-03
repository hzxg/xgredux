import React from 'react';

import { connect } from 'react-redux';
import {
  getInputChangeAction,
  addUser,
  deleteUser,
  deleteUser2,
  settlement,
  initGame,
  switchOnChange1,
  switchOnChange2,
  goBack,
  goforward,
} from './store/actionCreators';
import AppUI from './AppUI';
//import axios from 'axios';

const App = props => {
  const {
    inputValue,
    changeInputValue,
    list,
    list2,
    addUser,
    deleteUser,
    deleteUser2,
    settlement,
    initGame,
    switchOnChange1,
    switchOnChange2,
    goBack,
    goforward,
  } = props;
  return (
    <AppUI
      inputValue={inputValue}
      list={list}
      list2={list2}
      changeInputValue={changeInputValue}
      addUser={addUser}
      deleteUser={deleteUser}
      deleteUser2={deleteUser2}
      settlement={settlement}
      initGame={initGame}
      switchOnChange1={switchOnChange1}
      switchOnChange2={switchOnChange2}
      goBack={goBack}
      goforward={goforward}
    />
  );
};
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    list2: state.list2,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    addUser() {
      const action = addUser();
      dispatch(action);
    },
    deleteUser(index) {
      const action = deleteUser(index);
      dispatch(action);
    },
    deleteUser2(index) {
      const action = deleteUser2(index);
      dispatch(action);
    },
    switchOnChange1(index) {
      const action = switchOnChange1(index);
      dispatch(action);
    },
    switchOnChange2(index) {
      const action = switchOnChange2(index);
      dispatch(action);
    },
    settlement() {
      const action = settlement(new Date().toLocaleTimeString());
      dispatch(action);
    },
    initGame() {
      const action = initGame();
      dispatch(action);
    },
    goBack() {
      const action = goBack();
      dispatch(action);
    },
    goforward() {
      const action = goforward();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
