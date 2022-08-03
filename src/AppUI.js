import 'antd/dist/antd.min.css';
import { Input, List, Button, Switch, message, Popconfirm } from 'antd';
import { useState } from 'react';
import UserDetails from './UserDetails';
import EditCount from './EditCount';

function AppUI(props) {
  const [switchChecked, setSwitchChecked] = useState(false);
  const onChange = checked => {
    setSwitchChecked(!switchChecked);
  };
  const onChange1 = (checked, index) => {
    if (!checked) {
      props.switchOnChange1(index);
    }
  };
  const onChange2 = (checked, index) => {
    if (checked) {
      props.switchOnChange2(index);
    }
  };
  const confirm = index => {
    props.deleteUser(index);
    message.success('已删除');
  };
  const confirm2 = index => {
    props.deleteUser2(index);
    message.success('已删除');
  };
  const confirm_initGame = () => {
    props.initGame();
    message.success('已重开');
  };

  const confirm_goBack = () => {
    props.goBack();
    message.success('返回上一局');
  };
  const confirm_goforward = () => {
    props.goforward();
    message.success('向前一局');
  };
  const cancel = e => {
    message.error('取消');
  };
  return (
    <div>
      <div>
        {switchChecked ? (
          <div>
            <Popconfirm
              title="确定重开吗？?"
              onConfirm={confirm_initGame}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                style={{
                  marginTop: '10px',
                  marginLeft: '10px',
                  marginRight: '10px',
                }}
                type="primary"
              >
                重开
              </Button>
            </Popconfirm>
            <Popconfirm
              title="确定返回上一局吗？?"
              onConfirm={confirm_goBack}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                style={{
                  position: 'absolute',
                  top: '0px',
                  marginLeft: '170px',
                  marginTop: '6px',
                }}
                type="primary"
              >
                后退
              </Button>
            </Popconfirm>

            <Popconfirm
              title="确定返回上一局吗？?"
              onConfirm={confirm_goforward}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                style={{
                  position: 'absolute',
                  top: '0px',
                  marginLeft: '240px',
                  marginTop: '6px',
                }}
                type="primary"
              >
                前进
              </Button>
            </Popconfirm>
            <Input
              value={props.inputValue}
              onChange={props.changeInputValue}
              placeholder="userName "
              style={{
                marginTop: '10px',
                marginLeft: '10px',
                marginRight: '10px',
                width: '142px',
              }}
            />
            <Button onClick={props.addUser} type="primary">
              添加
            </Button>
          </div>
        ) : (
          <Button
            style={{
              position: 'absolute',
              top: '0px',
              marginLeft: '245px',
              marginTop: '6px',
            }}
            onClick={props.settlement}
            type="primary"
          >
            结算
          </Button>
        )}
      </div>
      <Switch
        style={{
          position: 'absolute',
          top: '0px',
          marginLeft: '180px',
          marginTop: '13px',
        }}
        onChange={onChange}
        defaultChecked
      />
      <div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '360px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  item.count > 0 ? (
                    <p style={{ color: 'red' }}>
                      {item.userName} [ {item.count} ]
                    </p>
                  ) : (
                    <p style={{ color: 'green' }}>
                      {item.userName} [ {item.count} ]
                    </p>
                  )
                }
              />
              {switchChecked ? (
                <div>
                  <Switch
                    style={{ marginRight: '6px' }}
                    checked={true}
                    onClick={checked => onChange1(checked, index)}
                    //onChange={props.switchOnChange1(index)}
                  />
                  <EditCount index={index} listindex={1} />
                  <Popconfirm
                    title="确定删除吗？?"
                    onConfirm={() => {
                      confirm(index);
                    }}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{ marginLeft: '6px' }} type="primary">
                      删除
                    </Button>
                  </Popconfirm>
                </div>
              ) : (
                <div>
                  <UserDetails
                    onClick={checked => onChange1(checked, index)}
                    count={0}
                    index={index}
                  />
                </div>
              )}
            </List.Item>
          )}
        />
        {props.list2.length > 0 ? (
          <List
            style={{ marginTop: '10px', marginLeft: '10px', width: '360px' }}
            bordered
            dataSource={props.list2}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    item.count > 0 ? (
                      <p style={{ color: 'red' }}>
                        {item.userName} [ {item.count} ]
                      </p>
                    ) : (
                      <p style={{ color: 'green' }}>
                        {item.userName} [ {item.count} ]
                      </p>
                    )
                  }
                />
                {switchChecked ? (
                  <div>
                    <Switch
                      style={{ marginRight: '6px' }}
                      checked={false}
                      onClick={checked => onChange2(checked, index)}
                      // onChange={props.switchOnChange2(index)}
                    />
                    <EditCount index={index} listindex={2} />
                    <Popconfirm
                      title="确定删除吗？?"
                      onConfirm={() => {
                        confirm2(index);
                      }}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button style={{ marginLeft: '6px' }} type="primary">
                        删除
                      </Button>
                    </Popconfirm>
                  </div>
                ) : (
                  <div>
                    <Switch
                      style={{ marginRight: '6px' }}
                      checked={false}
                      onClick={checked => onChange2(checked, index)}
                      // onChange={props.switchOnChange2(index)}
                    />
                  </div>
                )}
              </List.Item>
            )}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default AppUI;
