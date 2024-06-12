import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch(`http://localhost:5000/todos`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, getTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
