import { createSlice } from "@reduxjs/toolkit";

// Load todos from localStorage
const load = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
};

const todoSlice = createSlice({
    name: "todos",
    initialState: load(),
    reducers: {
        addTodo: (state, action) => {
            const newTodo = [{ id: Date.now(), text: action.payload }, ...state];
            localStorage.setItem("todos", JSON.stringify(newTodo));
            return newTodo;
        },
        removeTodo: (state, action) => {
            const updatedTodos = state.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const updatedTodos = state.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            );
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        clearTodo: () => {
            localStorage.removeItem("todos");
            return [];
        },
    },
});

// Export actions
export const { addTodo, removeTodo, clearTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
