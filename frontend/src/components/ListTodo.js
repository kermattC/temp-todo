import React, { Fragment, useEffect, useContext } from 'react';
import { TodoContext } from './TodoContext';
import EditTodo from './EditTodo';

const ListTodos = () => {
    const { todos, getTodos } = useContext(TodoContext);

    useEffect(() => {
        getTodos();
    }, [])

    console.log("todos: ", todos);

    const deleteTodo = async(id) => {
        console.log("Deleting this todo: ", id)
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE' 
            // }).then(() => setTodos(todos.filter(todo => todo.todo_id !== id)))
            }).then(() => getTodos())
            console.log("Response: ", response)
            // setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <table className='table mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { /* Pass the todo as a prop so it can be used in the EditTodo component */ }
                    { todos.map(todo => 
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td> 
                            <td><button onClick={() => deleteTodo(todo.todo_id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>

    )
}

export default ListTodos;