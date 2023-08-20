import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ACTIONS } from './Context'
import { TaskContext } from './App'

const Modal = forwardRef(({ todo }, ref) => {
    const { dispatch, setModal } = useContext(TaskContext)
    const [name, setName] = useState("")


    const handleUpdate = (e) => {
        e.preventDefault();

        if (!name) {
            notifyError("Please enter a valid todo!")
            return
        }

        dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todo.id, name: name } })
        setModal({ status: false, todo: null });
    }

    useEffect(() => {

        ref.current.focus()
    }, [])


    const notifyError = (message) => {

        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }


    return (
        <div className='modal-container'>
            <div className='modal-close'> <span className='close' onClick={() => setModal({ status: false, todo: null })}><i className="fa fa-xmark"></i></span></div>
            <div className='modal-content'>
                <span className='close' onClick={() => setModal({ status: false, todo: null })}><i className="fa fa-xmark"></i></span>
                <h2>Update This todo!</h2>
                <form onSubmit={handleUpdate}>
                    <input ref={ref} type="text" placeholder={todo.name} onChange={(e) => setName(e.target.value)} name="names" />
                    <button>Update</button>
                </form>
            </div>

            <ToastContainer />
        </div>
    )
})

export default Modal