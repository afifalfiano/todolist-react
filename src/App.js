import { useState } from 'react';
import './App.css';
import FilterTodo from './component/FilterTodo';
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
  const [currentFilter, setCurrentFilter] = useState('All');
  const userInputHandler = props => {
    if(props.hasOwnProperty('id')) {
      const data = enteredData.map(item => {
        if (item.id === props.id) {
          item = props;
        }
        return item;
      });
      setEnteredData([...data]);
    } else {
      props.id = +Math.random().toFixed(3);
      setEnteredData([...enteredData, props]);
    }
  }

  const changeStatusHandler = props => {
    const data = enteredData.map(item => {
      if (item.id === +props) {
        if (item.status === STATUS.TODO) {
          item.status = STATUS.IN_PROGRES
        } else if (item.status === STATUS.IN_PROGRES) {
          item.status = STATUS.COMPLETED
        } else {
          item.status = STATUS.TODO
        }
        setLastSelectTodo(item);
      }
      return item;
    });
    setEnteredData([...data]);

  }

  const userUpdateHandler = props => {
    if (props) {
      setLastSelectTodo({todo: '', status: ''});
    }
  }

  const filterHandler = item => {
    console.log(item, 'test');
    setCurrentFilter(item);
  }

  const dataFilter = enteredData.filter(todo => {
    if(currentFilter === 'All') {
      return todo;
    } else if (todo.status === currentFilter) {
      return todo;
    }
  });
  console.log(dataFilter, 'cek');
  return (
    <div className="wrapper">
      <UserInput saveNewData={userInputHandler} lastSelect={lastSelectTodo} handlerUpdate={userUpdateHandler} />
      <FilterTodo selected={currentFilter} onChangeFilter={filterHandler} />
      <TodoList data={dataFilter} changeStatus={changeStatusHandler} />
    </div>
  );
}

export default App;
