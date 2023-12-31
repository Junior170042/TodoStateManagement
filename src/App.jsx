import React, { createContext, useState, useReducer, useEffect } from 'react'
import Todo from './Todo'
import { reducer } from './Context'
import { saveTheme } from './Storage'

export const TaskContext = createContext()
const App = () => {

    const initialState = JSON.parse(localStorage.getItem('actions')) ?? []

    const [todo, dispatch] = useReducer(reducer, initialState);
    const [theme, setTheme] = useState(() => {
        const themes = localStorage.getItem('theme')
        if (themes) return themes
        else return 'light'
    })
    const [modal, setModal] = useState({
        status: false,
        todo: null
    });


    useEffect(() => {
        const body = document.querySelector("body")
        body.className = theme
        saveTheme(theme)
    }, [theme])

    return (
        <TaskContext.Provider value={{ todo, dispatch, modal, setModal, theme, setTheme }} >

            <Todo />
        </TaskContext.Provider>

    )
}

export default App