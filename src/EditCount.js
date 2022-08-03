import { Button, Modal, Slider, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
//import Slider from './Slider';

import { editUserCount, setusertmpcounts } from './store/actionCreators';

import { connect } from 'react-redux';
const EditCount = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [sliderx1Value, setSliderx1Value] = useState(0);
  const [sliderx10Value, setSliderx10Value] = useState(0);
  const [sliderx100Value, setSliderx100Value] = useState(0);

  const [sliderx1000Value, setSliderx1000Value] = useState(0);

  const onChange = value => {
    setInputValue(value);
  };
  const onChangex1 = newValue => {
    setSliderx1Value(newValue);
  };
  const onChangex10 = newValue => {
    setSliderx10Value(newValue);
  };
  const onChangex100 = newValue => {
    setSliderx100Value(newValue);
  };
  const onChangex1000 = newValue => {
    setSliderx1000Value(newValue);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (props.listindex === 3) {
      props.setusertmpcounts(props.index, inputValue);
    } else {
      props.editUserCount(props.index, inputValue, props.listindex);
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    setInputValue(
      sliderx1Value +
        sliderx10Value * 10 +
        sliderx100Value * 100 +
        sliderx1000Value * 1000
    );
  }, [sliderx1Value, sliderx10Value, sliderx100Value, sliderx1000Value]);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        修改
      </Button>
      <Modal
        title="设置分数"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputNumber
          style={{ width: '200px' }}
          defaultValue={0}
          min={-9999}
          max={9999}
          value={inputValue}
          onChange={onChange}
        />
        <Slider
          style={{ marginTop: '20px' }}
          min={0}
          max={9}
          onChange={onChangex1}
          value={typeof sliderx1Value === 'number' ? sliderx1Value : 0}
        />
        <Slider
          style={{ marginTop: '20px' }}
          min={0}
          max={9}
          onChange={onChangex10}
          value={typeof sliderx10Value === 'number' ? sliderx10Value : 0}
        />
        <Slider
          style={{ marginTop: '20px' }}
          min={0}
          max={9}
          onChange={onChangex100}
          value={typeof sliderx100Value === 'number' ? sliderx100Value : 0}
        />
        <Slider
          style={{ marginTop: '20px' }}
          min={0}
          max={9}
          onChange={onChangex1000}
          value={typeof sliderx1000Value === 'number' ? sliderx1000Value : 0}
        />
      </Modal>
    </>
  );
};
const mapStateToProps = state => {
  return {
    list: state.list,
    list2: state.list2,
    scorelist: state.scorelist,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editUserCount(index, count, listindex) {
      const action = editUserCount(index, count, listindex);
      dispatch(action);
    },
    setusertmpcounts(index, value) {
      const action = setusertmpcounts(index, value);
      dispatch(action);
    },
  };
};

//export default UserDetails;
export default connect(mapStateToProps, mapDispatchToProps)(EditCount);
