import React from 'react';
import '../pages/todo.css';
import {Link} from 'react-router-dom'

const Todo = ({ mydata, setList }) => {

  
  const handleDelete = (i) => {
    const newdata = mydata.filter((_, index) => index !== i);
    setList(newdata); 
    localStorage.setItem('todolist', JSON.stringify(newdata)); 
  };




  return (
    <div className="todo-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>To-Do List</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>


              <td><button onClick={() => handleDelete(index)}>delete</button></td>

                  <td> <Link to={`/edit/${index}`}>
                  <button>edit</button>
                </Link></td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
