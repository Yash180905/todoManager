
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { About } from './components/About';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
// import React from "react";
import {

  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {

    // console.log("i am onDelete", todo);
    // deleating this way does not work in react
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }
  const addTodo = (title, desc) => {

    // console.log(title,desc)
    let sno;
    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }
  // set todos is function which upadate these todos
  // const [todos, setTodos] = useState(initTodo)
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  return (
    <>
      <Router>
        {/* title is passed thro props and can be used in any child component using props.title */}
        <Header title="MyTodosList" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;
