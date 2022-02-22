import React, {useState} from 'react';
import { IoCloseSharp } from 'react-icons/io5'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineDone } from 'react-icons/md'
import { useTodoLayerValue } from '../context/TodoContext';
import clsx from "clsx";
import Swal from 'sweetalert2'

const Todo = ({todo}) => {

    const [editable, setEditable] = useState(false)
    const [content, setContent] = useState(todo.content)

    const [{}, dispatch] = useTodoLayerValue(); //bir action çağıracağız

    const removeTodo = (todoId) => {
      
      dispatch({
        type: "REMOVE_TODO",
        payload: todoId,
     })
     Swal.fire({
      title: 'Emin misin?',
      text: "Bu öğe silindiğinde geri alınamaz!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Silindi!',
          'Listeden bir eleman silindi.',
          'success'
        )
      }
    })

   }

   const completeTodo = (todoId) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,

   })
 }
 const updateTodo = ({todoId, newValue}) => {
  dispatch({
    type: "UPDATE_TODO",
    payload: {
      todoId,
      newValue,
    }

 })
}

 const todoStyle = clsx({//birleşmiş stiller dosyası
    ["todo-row"]: true, //classNamei todo-row olana her zaman bu stilleri dahil et
    ["completed"]: todo.isCompleted,
 })

  return (
    <div className={todoStyle}> 
      {/*completed kısmı app.css den geliyor oraya yazmıştık, üstü çizilicek,
      bunu kullanabilmek için clsx küütphanesini indirdik.*/}

      <div onClick={()=> (editable ? "": completeTodo(todo.id))}>
        { //yukarıda artık editleme esnasında üstünü çizmeyecek
          editable ? 
          (<input type="text" className="todo-input-edit" value={content} onChange = {(event) => setContent(event.target.value)} />) 
          : (todo.content)
        }
      </div>
      
      <div className='todo-icons'>
        <IoCloseSharp className="todo-icon" style={{ fill: "white" }} onClick={()=> removeTodo(todo.id)} />
        { editable ? (<MdOutlineDone className="todo-icon"  onClick={()=> {
        updateTodo({
           todoId: todo.id,
           newValue: content
        })
        
        setEditable(false);
        setContent("")
      }}/>
      ):
        (<BiEdit className="todo-icon" onClick={()=> setEditable(true)} />)
    }
      </div>
    </div>
  )
}

export default Todo;

