//import { useState } from 'react';
//import { takeEvery, select } from 'redux-saga/effects';
//import { SETTLEMENT } from './actionTypes';

/*
import { initListAction } from './actionCreators';
import axios from 'axios';

 
function* getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('网络请求失败');
  }
}
 */
/*
const getstate = state => state; 
function* settlement() {
  
  const state = yield select(getstate);

  yield console.log(state);
}
*/
//const [bak1, setBak1] = useState('');

function* mySaga() {
  // yield takeEvery(GET_INIT_LIST, getInitList);
  // yield takeEvery(SETTLEMENT, settlement);
}

export default mySaga;
