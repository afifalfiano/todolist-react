
import { useState } from 'react';
import './TodoList.css';

const TodoList = props => {
    const changeStatus = (event) => {
        console.log(event.target.id, 'cek');
        props.changeStatus(event.target.id);
    }

    const list = props.data.map(item => {

        let content = '';
            if (item.status === 'Completed') {
               content =  (
                    <>
                    <p><del>{item.todo}</del></p>
                    <p><del>{item.status}</del></p>
                    </>
                )
            } else { 
             content = (
                    <>
                    <p>{item.todo}</p>
                    <p>{item.status}</p>
                    </>
            )
            }

        return (
            <div key={item.id} id={item.id} className="todolist" onClick={changeStatus}>
                {content}
            </div>
        )
    });
    
    return (
        <>
            {list}
        </>
    )
}

export default TodoList;