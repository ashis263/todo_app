import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

export default function NewTodo(props) {

    const[todo, setTodo] = useState({"id": "", "title": "", "description": ""});

    const {id, title, description} = todo;

    const handleChange = (event) => {
        setTodo({...todo, id: uuidv4(), [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onChildData(todo);
        setTodo({title: "", description: ""})
    }

  return (
    <div className="newTodo">
        <h2>Add New ToDo</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Todo Title: </label>
            <input type="text" name="title" id="title" value={title} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="description">Todo Description: </label>
            <input type="textarea" name="description" id="description" value={description} onChange={handleChange} required/>
            <br />
            <br />
            <input type="submit" value="Add ToDo" />
        </form>
    </div>
  )
}
