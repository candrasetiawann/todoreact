import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup,Button} from 'react-bootstrap';


const TodoItem = ({todo,handleDeleteClick,handleEditClick}) => {
  return (
    <div className="mt-3">
        <Card style={{ width: '18rem' }}>
      <Card.Header>Todo List</Card.Header>
            <ListGroup variant="info">
            <ListGroup.Item><h3>{todo.id}. {todo.text} </h3> {' '} <Button variant="danger" onClick={() => handleDeleteClick(todo.id)}>Delete</Button> {' '}
        <Button variant="success" onClick={() => handleEditClick(todo)}>Edit</Button> {' '}</ListGroup.Item>
            </ListGroup>
        </Card>
    </div>    
  )
}

export default TodoItem; 