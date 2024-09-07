import React, { useState, useEffect } from 'react';
import '../pages/add.css';
import Todo from './todo';

const Addtoto = () => {

  
  const [mydata, setmydata] = useState([]);
  const [newitem, setnewitem] = useState('');

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('todolist');
    if (storedData) {
      setmydata(JSON.parse(storedData)); // Parse the JSON string back into an array
    }
  }, []);

  const handleadd = () => {


    if (newitem.trim() === '') return; // Prevent adding empty items

    const updatedList = [...mydata, newitem];
    setmydata(updatedList); // Update state
    localStorage.setItem('todolist', JSON.stringify(updatedList)); // Save to localStorage
    setnewitem(''); // Clear input field
  };

  const handlechange = (e) => {
    setnewitem(e.target.value);
  };

  return (
    <div>
      <div className='container'>
        <div className='input-style'>
          <input
            type='text'
            name='add'
            id='add'
            onChange={handlechange}
            value={newitem}
            className='input-i'
          />
        </div>
        <div className='btn'>
          <button onClick={handleadd} className='btn-i'>ADD</button>
        </div>
      </div>
      <Todo mydata={mydata} setList={setmydata} /> {/* Pass setmydata as setList */}
    </div>
  );
};

export default Addtoto;
