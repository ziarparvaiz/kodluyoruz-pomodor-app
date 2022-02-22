import React from 'react'
import Todo from "./Todo"

const TodoList = ({ todos }) => {//app.jsten gönderilen todos propsı
  return (
    <div className='todo-list'>
      { todos && todos.map((todo) => //eğer todos içinde bir şey varsa map ile dolaş
        <Todo key={todo.id} todo = {todo} /> //bunlara bir key değeri verdik, dolaştığımız elemanları Todo componentine props polarak göönderdik
      )}
    </div>
  )
}

export default TodoList;