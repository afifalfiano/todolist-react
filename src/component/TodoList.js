
import './TodoList.css';

const TodoList = props => {
    const changeStatus = (event) => {
        props.changeStatus(event.target.id);
    }

    const list = props.data.map(item => {

        let content = '';
            if (item.status === 'Completed') {
               content =  (
                    <>
                    <p className="todolist__todo"><del>{item.todo}</del></p>
                    <p className="todolist__status completed"><del>{item.status}</del></p>
                    </>
                )
            } else if (item.status === 'In Progress') {
                content =  (
                    <>
                    <p className="todolist__todo">{item.todo}</p>
                    <p className="todolist__status in_progress">{item.status}</p>
                    </>
                )
            } else { 
             content = (
                    <>
                    <p className="todolist__todo">{item.todo}</p>
                    <p className="todolist__status todo">{item.status}</p>
                    </>
            )
            }

        return (
            <div key={item.id} id={item.id} className="todolist__list" onClick={changeStatus}>
                {content}
            </div>
        )
    });
    
    return (
        <div className="todolist">
            {list}
        </div>
    )
}

export default TodoList;