import React, { useEffect, useState, useRef } from "react";
import "./TodoPopup.scss";
import TodoList from "../TodoList";
import { useTodoLayerValue } from "../../context/TodoContext";
import Swal from "sweetalert2";
import { IoCloseSharp } from 'react-icons/io5'

function TodoPopup(props) {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  //inputa yazı girildiğinde değişiklik yapacağız.

  const inputRef = useRef(null);
  //bir referans oluşturduk kullanmak için

  // useEffect(()=> {
  //   inputRef.current.focus();
  // },[]);

  const handleSubmit = (event) => {
    event.preventDefault(); //kaydetme işlemi yapıldığında sayfa otomatik referesh yapılmaz
    Swal.fire({
      fontSize: "14px",
      position: "bottom-end",
      icon: "success",
      title: "Yeni yapılacak listeye eklendi!",
      showConfirmButton: false,
      timer: 1500,
    });

    if (!content && content.length < 1) return 0;

    const newTodo = {
      id: Math.floor(Math.random() * 45646565),
      //random id oluşturuduk
      content, //content: content
      isCompleted: false, //yeni bir todo olduğu için tamamlanmadı
    };

    dispatch({
      //action tanımlaması
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent(""); //yeni eklendikten sonra contentin içini boşalltık
  };

  return props.trigger ? (
    <div className="Todo_popup">
      <div className="Todo_inner">
        <div className="Todo_header">
            <h2>Todo List</h2>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
            <IoCloseSharp />
            </button>
        </div>
        

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            className="todo-input"
            onChange={(event) => setContent(event.target.value)}
            value={content}
            ref={inputRef}
            placeholder="Add Task"
          />
          <button className="todo-button">Add Todo</button>
        </form>
        {/* TodoList componentine props yolladık */}
        <TodoList todos={todos} />
      </div>
    </div>
  ) : null;
}

export default TodoPopup;
