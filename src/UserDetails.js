import { InputNumber, Switch } from 'antd';
import { setusertmpcounts } from './store/actionCreators';

import { connect } from 'react-redux';
import EditCount from './EditCount';
function UserDetails(props) {
  const onChange = value => {
    // const action = setusertmpcounts(props.index, value);
    //store.dispatch(action);
    props.setusertmpcounts(props.index, value);
  };

  return (
    <div>
      <Switch
        onClick={props.onClick}
        checked={true}
        style={{ marginRight: '10px' }}
      />
      <InputNumber
        style={{ marginRight: '10px', width: '60px' }}
        onChange={onChange}
        value={props.list[props.index].tmpCount}
        keyboard={false}
      />
      <EditCount index={props.index} listindex={3} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    list: state.list,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setusertmpcounts(index, value) {
      const action = setusertmpcounts(index, value);
      dispatch(action);
    },
  };
};

//export default UserDetails;
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
