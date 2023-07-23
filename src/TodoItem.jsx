import React, { useContext } from 'react'
import { ACTIONS } from './Context'
import { TaskContext } from './App'

const TodoItem = ({ todo }) => {

    const { dispatch, setModal } = useContext(TaskContext)

    return (
        <div className='todoItem'>
            <div className='todoText'>
                <p className='todoDescription'>{todo.name}</p>
                <div className='checkBox'>
                    <input type="checkbox" onChange={() => dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: todo })} checked={todo.isComplete} id={todo.id} /><label htmlFor={todo.id}></label>

                </div>
            </div>
            <div className={todo.isComplete ? "progress-complete" : "progress"}></div>
            <div className='todoButtons'>
                <button className='btn-update' onClick={() => setModal({ status: true, todo: todo })}>Update</button>
                <button className='btn-delete' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
            </div>

        </div>
    )
}

export default TodoItem