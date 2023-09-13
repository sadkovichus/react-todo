import '../styles/components/TodoList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { ITodos } from '../types';
import { completedTodo, removeTodo } from '../redux/actionCreaters/actionCreater';

export const TodoList = () => {
  const todos = useSelector(state => state) as ITodos[];
  const dispatch = useDispatch();
  const remove = removeTodo(dispatch);
  const completed = completedTodo(dispatch);

  return (
    <ul className='list'>
        {
          todos.map(item => (
            <li className={item.completed ? 'completed' : ''} key={item.id}>
              <p>{item.title}</p>
              <div className='buttons'>
                {
                    item.completed
                    ? null
                    : <button onClick={() => completed(item.id)}>Complete</button>
                }
                <button onClick={() => remove(item.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
  )
}
