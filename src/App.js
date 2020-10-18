import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from 'antd';
import { BarsOutlined, DropboxOutlined, SkypeOutlined } from '@ant-design/icons';

const { Title } = Typography;
function App() {
  const[todoList, setTodoList] = useState([]);
  const addTodo = (value) => {
    setTodoList([...todoList, value]);
    console.log(todoList);
  };
  
  const appStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    width: '100vw',
    fontFamily: 'Arial',
  };
  return (
    <div style={ appStyle }>
      <Title type ="danger">To Do List</Title>
      <BarsOutlined />
      <DropboxOutlined />
      <SkypeOutlined />
      <InputField addTodo = {addTodo}/>
      <div style = {{
        display:'flex',
        flexDirection: 'column',
        alightItems: 'center',
        border: 'solid 1px lightgray',
        borderRadius: '6px',
        width: '40vw',
        padding: '2rem'
      }}>
        {todoList.map(todo =>
          <Todo
            title = {todo.title}
            description = {todo.description}
            date = {todo.date}
            />
          )}
      </div>
    </div>
  );
}

export default App;

function Todo({ title,description,date }){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderBottom: 'solid 1px lightgray',
      width: '40vw',
    }}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{date}</h3>
    </div>
  );
}

function InputField({ addTodo }) {
  const [value, setValue] = useState({ title: "", description: "", date: ""});

  const inputStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px lightgray',
    borderRadius: '6px',
    width: '40vw',
    padding: '2rem'
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value
    });
  };
  return (
    <div style = { inputStyle }>
      <input
        style={{ borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vw' }}
        placeholder = 'Enter in a title'
        value = { value.title }
        onChange = {e => handleChange(e)}
        id='title'
        ></input>
      <textarea
        style={{ borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vw' }}
        placeholder='Enter in a description'
        value = { value.description }
        onChange = {e => handleChange(e)}
        id='description'
        >
      </textarea>
      <input
        style={{borderWidth: '0', backgroundColor: 'whitesmoke', width: '15vw' }}
        type='date'
        placeholder='Enter date'
        value = { value.date }
        onChange = {e => handleChange(e)}
        id='date'
      >
      </input>

      <Button onClick={() => addTodo(value)} color = "secondary" variant = "contained">Submit</Button>
    </div>
  );
}
