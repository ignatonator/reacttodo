import { useEffect, useState } from "react";
import './Card.css'
function Card({ todo, index, markTodo, removeTodo }){
    return(
    <div className="card"><div>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        </div>
          <div className="buttons"><button onClick={() => markTodo(index)}>✓</button>
          <button  onClick={() => removeTodo(index)}>✕</button></div>
        
      </div>
    
    )
}
export default Card;