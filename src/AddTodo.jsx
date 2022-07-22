import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

const AddTodo = ({handleInputChange,handleFormSubmit,input}) => {
    return (
        <>
        <form onSubmit={handleFormSubmit} >
        <Form.Control
        type="text"
        onChange={handleInputChange}  value={input}
      />
             <Button className="mt-3" variant="primary" type="submit">Add Todo</Button>{' '}
        </form>
        </>
    )
}

export default AddTodo;