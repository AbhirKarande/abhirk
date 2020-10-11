import React, {useState} from 'react';
import './App.css';
var dicePhoto;

function App() {
  const [todos, setTodos] = useState([]);
  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoItem(i);
    }
  }
  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    //time out function is added so that there is a delay between todo state changes.
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  function updateTodoItem(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }
  function removeTodoItem(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }
  function toggleTodoComplete(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }
  return (
    <div className="app">
      <div className="header">
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoComplete(i)}>
                {todo.isCompleted}
              </div>
              <input type="text" value={todo.content} onKeyDown={e => handleKeyDown(e, i)}  nChange={e => updateTodoItem(e, i)}/>
            </div>
          ))}
        </ul>
      </form>
    </div>
  );

}


export default App;

