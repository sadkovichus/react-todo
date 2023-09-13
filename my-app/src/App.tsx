import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { addTodos } from './redux/actionCreaters/actionCreater';
import { useDispatch } from 'react-redux'
import './styles/App.scss'


function App() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const add = addTodos(dispatch);

  const submitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await add(value);
    setValue('')
  }

  return (
    <div className='wrapper'>
      <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => submitData(e)} className='added'>
        <input placeholder='Title' onInput={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="text" value={value}/>
        <button>Add todo</button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
