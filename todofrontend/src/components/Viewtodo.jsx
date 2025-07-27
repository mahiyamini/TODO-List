
const Viewtodo = ({list,deleteItem,updateDateB,updateDateF}) => {
  return (
    <>
    <div className='todol'>
      <div className='list-todo'>
        {list.length > 0 ? (
          list.map((item) => (
            <div className="todo-item" key={item.id}>
              <h3 className='inpf'>{item.title}</h3>
              <p className='inpf' style={{fontSize:'12px'}}>{updateDateF(item.date)}</p>
              <div className='todo-btn'>
              <button className='btns'>Edit</button>
              <button className='btns' onClick={()=>{deleteItem(item.id)}}>Delete</button>
              </div>
            </div>
          ))
        ) : (<p style={{color:'white'}}>To do list is empty</p>)}
      </div>
      </div>
    </>
  )
}

export default Viewtodo