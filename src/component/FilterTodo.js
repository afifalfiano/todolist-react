import { useState } from "react";
import './FilterTodo.css';

const FilterTodo = props => {

    const handlerFilter = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="filter">
        <label>Filter by status</label>
        <select value={props.selected} onChange={handlerFilter}>
            <option value="All">All</option>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        </div>
    )
}

export default FilterTodo;