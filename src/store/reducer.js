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
const defaultState = {
  round: 0,
  bakRound: 0,
  inputValue: '',
  list: [
    { userName: 'userName1', count: 0, tmpCount: 0 },
    { userName: 'userName2', count: 0, tmpCount: 0 },
    { userName: 'userName3', count: 0, tmpCount: 0 },
    { userName: 'userName4', count: 0, tmpCount: 0 },
  ],
  list2: [
    { userName: 'userName5', count: 0, tmpCount: 0 },
    { userName: 'userName6', count: 0, tmpCount: 0 },
    { userName: 'userName7', count: 0, tmpCount: 0 },
    { userName: 'userName8', count: 0, tmpCount: 0 },
  ],
  scorelist: [],
  list_bak: [],
  list2_bak: [],
  scorelist_bak: [],
};

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === GOBACK) {
    const newState = JSON.parse(JSON.stringify(state));

    const i = newState.round;
    if (i > 0) {
      newState.scorelist = newState.scorelist_bak[i - 1];

      newState.list = newState.list_bak[i - 1];
      newState.list2 = newState.list2_bak[i - 1];

      newState.round = newState.round - 1;
    } else {
      alert('到最开始了');
    }
    return newState;
  }
  if (action.type === GOFORWARD) {
    const newState = JSON.parse(JSON.stringify(state));

    const i = newState.round;
    const ii = newState.bakRound;
    if (i < ii) {
      newState.scorelist = newState.scorelist_bak[i + 1];
      newState.list = newState.list_bak[i + 1];
      newState.list2 = newState.list2_bak[i + 1];
      newState.round = newState.round + 1;
    } else {
      alert('返回到最新一局了');
    }

    return newState;
  }
  if (action.type === ADD_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue === '') {
      alert('输入名字');
    } else {
      if (newState.list.find(l => l.userName === newState.inputValue)) {
        alert('输入名字已存在');
      } else {
        newState.list.push({
          userName: newState.inputValue,
          count: 0,
          tmpCount: 0,
        });
        newState.inputValue = '';
        return newState;
      }
    }
  }
  if (action.type === DELETE_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === DELETE_USER2) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list2.splice(action.index, 1);
    return newState;
  }

  if (action.type === SWITCH_ON_CHANGE1) {
    const newState = JSON.parse(JSON.stringify(state));
    const changeUser = {
      userName: newState.list[action.index].userName,
      count: newState.list[action.index].count,
      tmpCount: 0,
    };
    newState.list.splice(action.index, 1);
    newState.list2 = [...newState.list2, changeUser];

    return newState;
  }
  if (action.type === SWITCH_ON_CHANGE2) {
    const newState = JSON.parse(JSON.stringify(state));
    const changeUser = {
      userName: newState.list2[action.index].userName,
      count: newState.list2[action.index].count,
      tmpCount: 0,
    };
    newState.list2.splice(action.index, 1);
    newState.list = [...newState.list, changeUser];
    return newState;
  }

  if (action.type === SET_USER_TMP_COUNTS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list[action.index].tmpCount = action.count;
    return newState;
  }
  if (action.type === SETTLEMENT) {
    const newState = JSON.parse(JSON.stringify(state));
    const newState2 = JSON.parse(JSON.stringify(state));
    if (newState.round === 0) {
      Object.defineProperty(newState.list_bak, newState.round, {
        value: newState2.list,
        writable: true,
        configurable: true,
        enumerable: true,
      });
      Object.defineProperty(newState.list2_bak, newState.round, {
        value: newState2.list2,
        writable: true,
        configurable: true,
        enumerable: true,
      });
      Object.defineProperty(newState.scorelist_bak, newState.round, {
        value: newState2.scorelist,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }

    for (let i = 0; i < newState.list.length; i++) {
      for (let ii = 0; ii < newState.list.length; ii++) {
        if (newState.list[i] !== newState.list[ii]) {
          newState.list[i].count =
            newState.list[i].count - newState.list[ii].tmpCount;
        }
      }
    }
    for (let i = 0; i < newState.list.length; i++) {
      newState.list[i].count =
        newState.list[i].count +
        newState.list[i].tmpCount * (newState.list.length - 1);
    }
    newState.scorelist.splice(
      newState.list.find(l => l.key === 0),
      1
    );

    const arr = {
      key: newState.scorelist.length + 1,
      name: newState.scorelist.length + 1,
    };
    const arr2 = {};
    for (let i = 0; i < newState.list.length; i++) {
      const score = newState.list[i].count - newState2.list[i].count;
      Object.defineProperty(arr2, newState.list[i].userName, {
        value: newState.list[i].tmpCount + '|' + score,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
    const ss = Object.assign(arr, arr2);

    const arr0 = {
      key: 0,
      name: '总',
    };
    const arr22 = {};
    newState.scorelist = [ss, ...newState.scorelist];

    for (let i = 0; i < newState.list.length; i++) {
      Object.defineProperty(arr22, newState.list[i].userName, {
        value: newState.list[i].count,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
    for (let i = 0; i < newState.list2.length; i++) {
      Object.defineProperty(arr22, newState.list2[i].userName, {
        value: newState.list2[i].count,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
    const ss2 = Object.assign(arr0, arr22);

    newState.scorelist = [ss2, ...newState.scorelist];

    for (let i = 0; i < newState.list.length; i++) {
      newState.list[i].tmpCount = 0;
    }
    newState.round = newState.round + 1;
    newState.bakRound = newState.round;
    Object.defineProperty(newState.list_bak, newState.round, {
      value: newState.list,
      writable: true,
      configurable: true,
      enumerable: true,
    });
    Object.defineProperty(newState.list2_bak, newState.round, {
      value: newState.list2,
      writable: true,
      configurable: true,
      enumerable: true,
    });
    Object.defineProperty(newState.scorelist_bak, newState.round, {
      value: newState.scorelist,
      writable: true,
      configurable: true,
      enumerable: true,
    });

    return newState;
  }
  if (action.type === INITGAME) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.round = 0;
    newState.bakRound = 0;
    newState.list = [];
    newState.list2 = [];
    newState.scorelist = [];
    newState.list_bak = [];
    newState.list2_bak = [];
    newState.scorelist_bak = [];
    return newState;
  }
  if (action.type === EDIT_USER_COUNT) {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.listindex === 1) {
      newState.list[action.index].count = action.count;
    }
    if (action.listindex === 2) {
      newState.list2[action.index].count = action.count;
    }
    return newState;
  }
  return state;
};

export default reducer;
