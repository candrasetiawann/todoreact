import React,{useState,useEffect} from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import EditTodo from './EditTodo'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

let id = 1;
function App() {
    const [input,setInput] = useState('');
    const [todos,setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        if(saved) {
            return JSON.parse(saved)
        }else{
            return []
        }
    });

    const [isEditing,setIsEditing] = useState(false);
    const [currentTodo,setCurrentTodo] = useState({});

    

    //save todos to localStorage 
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])


    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(input !== "" ){
            setTodos([
                ...todos,{
                    id:id++,
                    text:input
                }
            ])
        }
    setInput("");
    }

    //delete
    const handleDeleteClick = (id) => {
        const removeTodo = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(removeTodo);
    }

    const handleEditInputChange = (e) => {
        setCurrentTodo({...currentTodo,text:e.target.value})
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()

        updateTodo(currentTodo.id,currentTodo)
    }

    const handleEditClick = (todo) => {
        setIsEditing(true)
        setCurrentTodo({...todo})
    }


    const updateTodo = (id,updatedTodo) => {
        const updated = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo
        })
        setIsEditing(false)
        setTodos(updated)
    }

    

    
	return (
		<div className="App container">
        <h1>Todoify</h1>
        {isEditing ? (<EditTodo handleEditInputChange={handleEditInputChange} currentTodo={currentTodo} handleEditFormSubmit={handleEditFormSubmit} setIsEditing={setIsEditing} />) : (<AddTodo handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} input={input} />)}
        {todos.map((todo) => {
             return (
                 <TodoItem key={todo.id} todo={todo} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
             )
         })}                
            
		</div>
	)
}

export default App
