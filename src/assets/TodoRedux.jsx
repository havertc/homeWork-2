import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoRedux = () => {
    const todos=useSelector(state=>state.todos.todos)
    const dispatch=useDispatch()
    console.log(todos);

    const addNewTodo=(e)=>{
      e.preventDefault()
      
      const todoTitle=e.target.name.value.trim();

      if (todoTitle.length>0){
        const newTodo={title: todoTitle, id:todos.at(-1).id+1 || 1}
        console.log(newTodo);
        dispatch({type:'addTodo', payload: newTodo})
      }
    }
    const deleteTodo=(id)=>{
       dispatch({type:'deleteTodo', payload:id})
    }

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <input  type="text" name='name' placeholder='за базаром следи'/>
        <input type="submit" />
      </form>
        <ul>
            {todos.map((el)=>(
              <li key={el.id}>{el.title}
              <button onClick={() => deleteTodo(el.id)}>Удалить</button>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoRedux