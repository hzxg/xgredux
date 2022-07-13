import store from './store/index';
import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemComplete = this.handleItemComplete.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleStoreChange);

    const action = getInitList();
    store.dispatch(action);
    /* 使用thunk 中间件
    const action = getTodolist();
    store.dispatch(action);
    */
    /* 无中间件
    axios.get('/list.json').then(res => {
      const data = res.data;
      const action = initListAction(data);
      store.dispatch(action);
    });
    */
  }
  /*
  componentWillUnmount() {
    store.unsubscribe(this.handleStoreChange); // 取消订阅,清理已注册的监听
  }
  */

  render() {
    return (
      <AppUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        handleItemComplete={this.handleItemComplete}
      />
    );
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  handleItemComplete(index) {
    const action = getCompleteItemAction(index);
    store.dispatch(action);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
