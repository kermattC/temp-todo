import React, { Fragment, useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const InputTodo = () => {
    const [description, setDescription] = useState('');
    const { getTodos } = useContext(TodoContext);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = fetch('http://localhost:5000/todos', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                }
            ).then (() => {
                getTodos();
                setDescription('');
            })
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>PERN Todo List</h1>
            <form className='d-flex' onSubmit={onSubmitForm}>
                <input type='text' 
                    className='form-control' 
                    value={description} 
                    onChange={e => setDescription(e.target.value)
                    }/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;