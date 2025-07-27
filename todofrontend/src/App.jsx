import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [title,setTitle] = useState('');
  const [date,setDate] = useState('');
  const [list,setList] = useState([])


  const addToDo = ()=>{
      if(title !== '' && date!== '')
      {
      setList([...list,{title,date}]);
      setTitle('');
      setDate('');  
    }
    else{
      alert("Fields should not be empty");
    }
  };
  return (
    
    <>
      <div className='header'>
        <h1>To Do List</h1>
      </div>
      <div className='parent-add'>
      <div className='add-to-do'>
        <h2><center>Create a ToDo</center></h2>
        <label className='labela'>Title</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} className='input-f' required />
        <label className='labela'>Created on</label>
        <input type='date' onChange={(e)=>setDate(e.target.value)} value={date} className='input-f' required />
        <button className='add-btn' onClick={addToDo}><strong>Add</strong></button>
      </div>
      </div>
      <div className='todol'>
      <div className='list-todo'>
        {list.length > 0 ? (
          list.map((item,index) => (
            <div className="todo-item" key={index}>
              <h3>{item.title}</h3>
              <p><strong>Date:</strong> {item.date}</p>
            </div>
          ))
        ) : (<p>To do list is empty</p>)}
      </div>
      </div>
   </>
      
  )
}

export default App
