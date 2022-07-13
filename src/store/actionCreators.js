import {
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  DELETE_TODO_ITEM,
  INIT_LIST,
  GET_INIT_LIST,
  COMPLETE_TODO_ITEM,
} from './actionTypes';
//import axios from 'axios';

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index,
});
export const getCompleteItemAction = index => ({
  type: COMPLETE_TODO_ITEM,
  index,
});
export const initListAction = data => ({
  type: INIT_LIST,
  data,
});

export const getInitList = () => ({
  type: GET_INIT_LIST,
});

/*
getCompleteItemAction
export const getTodolist = () => {
  return dispatch => {
    axios.get('/list.json').then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    });
  };
};
*/
