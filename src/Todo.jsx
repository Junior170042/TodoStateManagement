import React, { useContext } from 'react'
import { useState } from "react"
import TodoItem from './TodoItem'
import Modal from './Modal'
import { TaskContext } from './App'
import { ACTIONS } from './Context'

const Todo = () => {


    const { todo, dispatch, modal, setModal, theme, setTheme } = useContext(TaskContext)

    const [name, setName] = useState("");


    const newTodo = (name) => {
        return {
            name: name ? name : "New Todo",
            id: Date.now(),
            isComplete: false,
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo(name) })

    }


    return (
        <>
            <div className='toggleTheme'>
                <input onChange={() => setTheme(theme == "light" ? "dark" : "light")} type="checkbox" checked={theme == "dark" ? true : false} id="toggle_checkbox" />

                <label htmlFor="toggle_checkbox">

                </label>
            </div>
            <div className='container'>
                <h1 className="title">Todo aplication</h1>
                <form onSubmit={handleSubmit} className='todoForm'>
                    <input type="text" placeholder='Add todo..' onChange={(e) => setName(e.target.value)} name="todo" />
                    <button className='addTodo'>Add todo</button>
                </form>

                <div className='todo_container'>
                    {todo.length != 0 && todo.map(todo => <TodoItem setModal={setModal} key={todo.id} todo={todo} dispatch={dispatch}></TodoItem >)}
                </div>
            </div>
            {modal.status && <Modal todo={modal.todo} />}
        </>
    )
}

export default Todo
