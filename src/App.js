
import './App.css';
import TodoForm from './TodoForm';
import Card from './Card'
import {useEffect, useState} from 'react';
function App() {
  const [todos, setTodos] = useState(() => {
   
    const savedTodos = localStorage.getItem("todos");
    
    if (savedTodos) {
     
      return JSON.parse(savedTodos);
      
    } else {
      
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo=index=>{
    const newTodos=[...todos]
    newTodos[index].isDone=!newTodos[index].isDone
    setTodos(newTodos)
  }
  const removeTodo=index=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className='container'>
      <div className='todo'>
      <TodoForm addTodo={addTodo}/>
      <div className='todoList'>{todos.map((todo, index) => (
            <Card
              
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
            
          ))}
      </div>
      </div>
      
    </div>
    
    
  );
}

export default App;
