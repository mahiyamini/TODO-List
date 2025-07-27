import { useState } from "react";

const Todoadd = ({addToDo,item,setItem}) => {
    

  return (
    <>
    <div className='parent-add'>
      <div className='add-to-do'>
        <h2><center>Create a ToDo</center></h2>
        <label className='labela'>Title</label>
        <input type='text' onChange={(e)=>setItem({...item,title: e.target.value})} value={item.title} className='input-f' required />
        <label className='labela'>Created on</label>
        <input type='date' onChange={(e)=>setItem({...item,date: e.target.value})} value={item.date} className='input-f' required />
        <button className='add-btn' onClick={addToDo}><strong>Add</strong></button>
      </div>
      </div>
      </>
  )
}

export default Todoadd