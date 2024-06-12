import React, { Fragment, useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const EditTodo = ( { todo } ) => {
    const [ description, setDescription ] = useState(todo.description)
    const { getTodos } = useContext(TodoContext);

    // update description function
    const updateDescription = async(e) => {
        e.preventDefault();

        try {
            const body = { description };
            const response = fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then (() => {
                getTodos();
            })

            // window.location = ""
            console.log("Response: ", response);
        } catch (error) {
            console.error(error.message);
        }
    }

    // note that the data-target's id and the id for the div containing the modal-content are updated
    // to update the input field with the new text, remember to add an onChange handler
    
    // lastly, note that the main div, exit and close buttons all have an onClick that sets the description to the original description
        // this is in there because without it, the field will retain changes which will not accurately reflect the description shown in the table
    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}
            > Edit
            </button>
            
            <div id={`id${todo.todo_id}`} className="modal fade" role="dialog" onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>

                    </div>

            <div className="modal-body">
                <input className='form-control' type='text' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>

            <div className="modal-footer">
                <button 
                        type="button" 
                        className="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={e => updateDescription(e)}
                    >
                        Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={() => setDescription(todo.description)}
                    >
                        Close
                    </button>
            </div>
        </div>
  </div>
</div>

        </Fragment>
    )
}

export default EditTodo;