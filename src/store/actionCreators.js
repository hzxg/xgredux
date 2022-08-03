import {
  CHANGE_INPUT_VALUE,
  ADD_USER,
  DELETE_USER,
  DELETE_USER2,
  SET_USER_TMP_COUNTS,
  SETTLEMENT,
  INITGAME,
  SWITCH_ON_CHANGE1,
  SWITCH_ON_CHANGE2,
  GOBACK,
  EDIT_USER_COUNT,
  GOFORWARD,
} from './actionTypes';
//import axios from 'axios';

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const addUser = () => ({
  type: ADD_USER,
});
export const deleteUser = index => ({
  type: DELETE_USER,
  index,
});
export const deleteUser2 = index => ({
  type: DELETE_USER2,
  index,
});
export const switchOnChange1 = index => ({
  type: SWITCH_ON_CHANGE1,
  index,
});
export const switchOnChange2 = index => ({
  type: SWITCH_ON_CHANGE2,
  index,
});
export const setusertmpcounts = (index, count) => ({
  type: SET_USER_TMP_COUNTS,
  index,
  count,
});
export const settlement = time => ({
  type: SETTLEMENT,
  time,
});

export const initGame = () => ({
  type: INITGAME,
});
export const goBack = () => ({
  type: GOBACK,
});
export const goforward = () => ({
  type: GOFORWARD,
});
export const editUserCount = (index, count, listindex) => ({
  type: EDIT_USER_COUNT,
  index,
  count,
  listindex,
});
