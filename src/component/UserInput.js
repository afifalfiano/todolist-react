import { useEffect, useState } from "react";

import './UserInput.css';

const UserInput = props => {
    const [currentValue, setCurrentValue] = useState(props.lastSelect.todo);
    const [isValid, setIsValid] = useState(true);
    const changeTodoHandler = (event) => {
        console.log(currentValue)
        setCurrentValue(event.target.value);
    }

    useEffect(() => {
        const dataUpdate = props.lastSelect.todo;
        setCurrentValue(dataUpdate);
    }, [props.lastSelect.todo]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (currentValue !== '' && currentValue !== undefined) {
            setIsValid(true);
            let data = {todo: currentValue, status: 'Todo'}
            if (props.lastSelect?.id)  {
                data = {todo: currentValue, status: props.lastSelect.status, id: props.lastSelect.id};
                props.saveNewData(data);
                props.handlerUpdate(true);
            } else {
                props.saveNewData(data);
            }
            setCurrentValue('');
        } else {
            setIsValid(false);
        }
        
    }
    return (
        <div className="form-input">
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label className={`${!isValid ? 'invalid' : ''}`}>Todo</label>
                    <input className={`${!isValid ? 'bg-invalid' : 'bg-valid'}`} placeholder="your todo" type="text" value={currentValue} name="todo" onChange={changeTodoHandler} />
                </div>
            <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}

export default UserInput;