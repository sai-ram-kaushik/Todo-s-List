import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import React,{useState} from 'react';
import { AddTodo } from "./Components/AddTodo";
function App() {
  const onDelete = (todo)=>{
    console.log("I am on delete of todo",todo)
    // let index = todos.indexOf(todo)
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
       sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }


  const [todos, setTodos] = useState([]);

  return (
    <>
   <Header title="My Todos List" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
