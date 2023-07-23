import React, { useContext, useState } from 'react'
import { ACTIONS } from './Context'
import { TaskContext } from './App'

const Modal = ({ todo }) => {
    const { dispatch, setModal } = useContext(TaskContext)
    const [name, setName] = useState("")


    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todo.id, name: name } })
        setModal({ status: false, todo: null });
    }

    return (
        <div className='modal-container'>
            <div className='modal-close'> <span className='close' onClick={() => setModal({ status: false, todo: null })}><i className="fa fa-xmark"></i></span></div>
            <div className='modal-content'>
                <span className='close' onClick={() => setModal({ status: false, todo: null })}><i className="fa fa-xmark"></i></span>
                <h2>Update This todo!</h2>
                <form onSubmit={handleUpdate}>
                    <input type="text" placeholder={todo.name} onChange={(e) => setName(e.target.value)} name="names" />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Modal