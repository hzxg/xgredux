import { Table } from 'antd';
import React from 'react';

function TableView(props) {
  return (
    <Table
      style={{
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '10px',
      }}
      columns={props.columns}
      dataSource={props.data}
      scroll={{
        x: 300,
        y: 700,
      }}
    />
  );
}
export default TableView;
