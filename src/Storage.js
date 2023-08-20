const oldItems = JSON.parse(localStorage.getItem('actions')) ?? [];
export const setItems = (items) => {

    const receive_items = removeDuplicates(items);
    if (oldItems && oldItems.length != 0) {

        const newItems = removeDuplicates(oldItems)
        const todos = receive_items.concat(newItems);

        saveTodos(removeDuplicates(todos));
    }


    saveTodos(receive_items);

}

const saveTodos = (todo) => {
    localStorage.setItem("actions", JSON.stringify(todo));
}

export const removeItem = (todo) => {
    const newTodo = oldItems.filter(item => item.id !== todo.id);
    saveTodos(newTodo);
}

export const updateTodo = (type, todo) => {

    const find_to_update = oldItems.find(x => x.id === todo.id);

    if (find_to_update) {
        if (type == "update") {
            find_to_update.name = todo.name;

        } else {
            if (type == "toggle") {

                find_to_update.isComplete = !todo.isComplete;
            }
        }

        saveTodos(oldItems)

    }




}


const removeDuplicates = (arr) => {
    const hash = {};
    return arr.filter((current) => {
        const exists = !hash[current.name];
        hash[current.name] = true;
        return exists;
    });
}