import { useEffect, useState } from 'react'

import './App.css'
import Header  from './components/Header';
import Todoadd from './components/Todoadd';
import Viewtodo from './components/Viewtodo';


function App() {
  const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [list,setList] = useState([]);
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
      <Header />
      <Todoadd title={title} date={date} addToDo={addToDo} setTitle={setTitle} setDate={setDate}/>
      <Viewtodo list={list} />  
   </>
      
  )
}

export default App
