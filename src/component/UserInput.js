import { useState } from "react";


const UserInput = props => {
    const [currentValue, setCurrentValue] = useState('');
    const changeTodoHandler = (event) => {
        console.log(currentValue)
        setCurrentValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(currentValue);
        const data = {todo: currentValue, status: 'Todo'}
        props.saveNewData(data);
        setCurrentValue('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Todo</label>
                    <input type="text" value={currentValue} onChange={changeTodoHandler} ></input>
                </div>
            <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}

export default UserInput;