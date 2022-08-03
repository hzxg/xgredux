import React from 'react';
import TableView from './TableView';

import { connect } from 'react-redux';
function TableData(props) {
  const columns = [];
  columns.push({
    title: 'o',
    width: 20,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  });
  for (let i = 0; i < props.list.length; i++) {
    columns.push({
      title: props.list[i].userName,
      dataIndex: props.list[i].userName,
      key: props.list[i].userName,
      width: 30,
    });
  }

  const data = [];
  const arr = {
    key: 0,
    name: `总`,
    //user4: props.list[4].userName,
    //user5: props.list[5].userName,
  };

  const arr2 = {};
  for (let i = 0; i < props.list.length; i++) {
    Object.defineProperty(arr2, props.list[i].userName, {
      value: props.list[i].count,
      writable: true,
      configurable: true,
      enumerable: true,
    });
  }
  const arr3 = Object.assign(arr, arr2);
  data.push(arr3);
  try {
    if (props.scorelist[0].key !== 0) {
      props.scorelist.reverse();
    }
  } catch (error) {}

  return <TableView data={props.scorelist} columns={columns} />;
}

const mapStateToProps = state => {
  return {
    scorelist: state.scorelist,
    list: state.list,
  };
};
export default connect(mapStateToProps, null)(TableData);
