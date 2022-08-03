import { Timeline } from 'antd';
import React from 'react';
import './index.css';
import { connect } from 'react-redux';

const Timelines = props => (
  <Timeline
    style={{
      marginTop: '20px',
      marginLeft: '10px',
      marginRight: '10px',
      width: '300px',
    }}
  >
    {props.scorelist.map(i => (
      <Timeline.Item key={i.userName + i.time + Math.random(1, 100)}>
        {i.userName + '  ' + i.score + '  ' + i.time}
      </Timeline.Item>
    ))}
  </Timeline>
);
const mapStateToProps = state => {
  return {
    scorelist: state.scorelist,
  };
};

//export default Timelines;
export default connect(mapStateToProps, null)(Timelines);
