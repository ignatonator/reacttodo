import {useEffect, useState} from 'react';
import './TodoForm.css'
function TodoForm({addTodo}){
    const[value,setValue]=useState("");
    const handleSubmit=e=>{
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        console.log(value)
        setValue("")
    }
    return(<form onSubmit={handleSubmit} className="todoForm">
        <input type="text"className='todoInput' value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo "/>
        <input type="submit"className='todoSubmit'value="Add"/>
    </form>)
}
export default TodoForm