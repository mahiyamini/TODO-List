import { useState } from "react";

const Todoadd = ({title,date,addToDo,setDate,setTitle}) => {
    

  return (
    <>
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
      </>
  )
}

export default Todoadd