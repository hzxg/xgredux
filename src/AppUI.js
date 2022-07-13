import 'antd/dist/antd.min.css';
import { Input, List, Button } from 'antd';

const btnStyle = {
  marginLeft: '10px',
  float: 'right',
};

const AppUI = props => {
  return (
    <div>
      <Input
        value={props.inputValue}
        onChange={props.changeInputValue}
        placeholder="to do "
        style={{
          marginTop: '10px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '300px',
        }}
      />
      <Button onClick={props.addTodoItem} type="primary">
        add
      </Button>
      <div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  item.complete ? <strike>{item.title}</strike> : item.title
                }
              />

              <div>
                {item.complete ? (
                  ''
                ) : (
                  <button
                    style={btnStyle}
                    onClick={() => {
                      props.completeTodoItem(index);
                    }}
                  >
                    done
                  </button>
                )}
              </div>
              <button
                style={btnStyle}
                onClick={() => {
                  props.deleteTodoItem(index);
                }}
              >
                del
              </button>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default AppUI;
