import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import UserInput from './component/UserInput';

const STATUS = {
  COMPLETED: 'Completed',
  TODO: 'Todo',
  IN_PROGRES: 'In Progress'
};

const initialData = [
  {
    id: 1,
    todo: 'Learn react',
    status: STATUS.TODO
  },
  {
    id: 2,
    todo: 'Learn angular',
    status: STATUS.COMPLETED
  },
  {
    id: 3,
    todo: 'Learn nestjs',
    status: STATUS.IN_PROGRES
  },
]
function App() {
  const [enteredData, setEnteredData] = useState(initialData);
  const [lastSelectTodo, setLastSelectTodo] = useState('');
  const userInputHandler = props => {
    props.id = +Math.random().toFixed(3);
    setEnteredData([...enteredData, props]);
    console.log(enteredData);
  }

  const changeStatusHandler = props => {
    console.log(props, 'change');
    const data = enteredData.map(item => {
      if (item.id === +props) {
        if (item.status === STATUS.TODO) {
          item.status = STATUS.IN_PROGRES
        } else if (item.status === STATUS.IN_PROGRES) {
          item.status = STATUS.COMPLETED
        } else {
          item.status = STATUS.TODO
        }
      }
      return item;
    });
    setLastSelectTodo(data[0])
    setEnteredData([...data]);

    console.log(enteredData);
  }
  return (
    <div>
      <UserInput saveNewData={userInputHandler} lastSelect={lastSelectTodo} />
      <TodoList data={enteredData} changeStatus={changeStatusHandler} />
    </div>
  );
}

export default App;
