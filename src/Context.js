import { removeItem, setItems, updateTodo } from "./Storage";

export const ACTIONS = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    UPDATE_TODO: "UPDATE_TODO",
    TOGGLE_COMPLETE: "TOGGLE_COMPLETE"

}
export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            setItems([...state, action.payload])
            return [...state, action.payload]

        case ACTIONS.TOGGLE_COMPLETE:

            updateTodo("toggle", action.payload)
            return (state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo
            }))

        case ACTIONS.DELETE_TODO:

            removeItem(action.payload)

            return state.filter(todo => todo.id !== action.payload.id)

        case ACTIONS.UPDATE_TODO:

            updateTodo("update", action.payload)

            return (state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, name: action.payload.name, };
                }
                return todo
            }))

        default: return state;

    }
}
