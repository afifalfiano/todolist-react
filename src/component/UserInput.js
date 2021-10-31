import { useEffect, useState } from "react";


const UserInput = props => {
    const [currentValue, setCurrentValue] = useState('');
    const changeTodoHandler = (event) => {
        console.log(currentValue)
        setCurrentValue(event.target.value);
    }

    useEffect(() => {
        if (props.lastSelect !== null) {
            const dataUpdate = props.lastSelect.todo;
            setCurrentValue(dataUpdate);
        }
    }, [props.lastSelect?.todo]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(currentValue);
        let data = {todo: currentValue, status: 'Todo'}
        if (props.lastSelect?.id)  {
            data = {todo: currentValue, status: props.lastSelect.status, id: props.lastSelect.id};
            props.saveNewData(data);
            props.handlerUpdate(true);
        } else {
            props.saveNewData(data);
        }
        setCurrentValue('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Todo</label>
                    <input type="text" value={currentValue} name="todo" onChange={changeTodoHandler} />
                </div>
            <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}

export default UserInput;