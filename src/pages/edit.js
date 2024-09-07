import React, { useState, useEffect } from 'react';
import '../pages/add.css';
import { useParams,useNavigate} from 'react-router-dom'

const Edit = () => {

const [edititem,setedititem] = useState('');
const [updatedata,setupdatedata] = useState([]);

console.log(edititem,'oso');

const { index } = useParams();
const navigate = useNavigate();


console.log(index,'check')


useEffect(() => {

    const editlist = localStorage.getItem('todolist')
     const arrydata = JSON.parse(editlist)
     setupdatedata(arrydata);
     setedititem(arrydata[index]);

    
},[index])


const handleupdate=()=>{
    const updatelist = [...updatedata];

    updatelist[index] = edititem;
    setupdatedata(updatelist);
    localStorage.setItem('todolist',JSON.stringify(updatelist));
    navigate('/');
}

const handlechange=(e)=>{
    setedititem(e.target.value);
}

  return (
    <div>
      <div className='container'>
        <div className='input-style'>
          <input
            type='text'
            name='add'
            id='add'
            onChange={handlechange}
            value={edititem}
            className='input-i'
          />
        </div>
        <div className='btn'>
          <button  onClick={handleupdate}className='btn-i'>UPDATE</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;



import React from 'react'

import React from 'react'


