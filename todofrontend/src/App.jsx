import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header  from './components/Header';
import Todoadd from './components/Todoadd';
import Viewtodo from './components/Viewtodo';

function App() {
  const API_URL ="http://localhost:8000/api/"

  const formatDateB = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
};

    const formatDateF = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${day}-${month}-${year}`;
};
   
    const [newItem,setNewItem] = useState({title:"",date:""})
    const [list,setList] = useState([]);

     const fetchItems = () => {
    axios.get(API_URL)
      .then(res => setList(res.data))
      .catch(err => console.error(err));
  };
    const addItem = () => {
      newItem.date = formatDateF(newItem.date)
      console.log(newItem.date)
      axios.post(API_URL, newItem)
      .then(() => {
        fetchItems();
      })
      .catch(err => console.error(err));
      setNewItem({ title: "", date: "" });  // Reset form
  };
  // const updateItem = (id, updatedData) => {
  //   axios.put(`${API_URL}${id}/`, updatedData)
  //     .then(() => fetchItems())
  //     .catch(err => console.error(err));
  // };

  // DELETE: Delete mood
  const deleteItem = (id) => {
    axios.delete(`${API_URL}${id}/`)
      .then(() => fetchItems())
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  
  return (
    <>
      <Header />
      <Todoadd addToDo={addItem} item={newItem} setItem={setNewItem}/>
      <Viewtodo list={list} deleteItem={deleteItem} updateDateB={formatDateB} updateDateF={formatDateF}/>  
   </>
      
  )
}

export default App
