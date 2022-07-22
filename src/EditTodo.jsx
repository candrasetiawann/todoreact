import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';


const EditTodo = ({handleEditInputChange,handleEditFormSubmit,currentTodo,setIsEditiing}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
    <Form.Control type="text" value={currentTodo.text} onChange={handleEditInputChange}/>
    <Button className="mt-2" variant="primary" type="submit">Update</Button> {' '}
    <Button className="mt-2" variant="warning" onClick={() => setIsEditiing(false)} >Cancel</Button>
    </form>
  )
}

export default EditTodo;