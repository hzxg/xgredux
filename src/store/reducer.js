import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
  COMPLETE_TODO_ITEM,
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [
    { title: 'test1', complete: false },
    { title: 'test2', complete: false },
    { title: 'test3', complete: true },
  ],
};

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    //newState.list.push(newState.inputValue);
    newState.list.push({ title: newState.inputValue, complete: false });
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    /*
    newState.list.splice(
      newState.list.findIndex(data => data.index === action.value),
      1
    );
    */
    return newState;
  }
  if (action.type === COMPLETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    const completeItem = {
      title: newState.list[action.index].title,
      complete: true,
    };
    newState.list.splice(action.index, 1);
    newState.list.push(completeItem);
    /*
    newState.list.splice(
      newState.list.findIndex(data => data.index === action.value),
      1
    );
    */
    return newState;
  }
  return state;
};

export default reducer;
