import React, { useEffect } from "react";

function App() {
  const [todoForToday , setTodoForToday] = React.useState([{
    title: "Title 1",
    description: " des 1 ",
    id: 1
  },
  {
    title: " Hello 2",
    description: " Des 2 ",
    id: 2
  }]);


  return (
    <div>
     {JSON.stringify(todoForToday)}
     <br />
     {todoForToday[0].title}
     <br />
     {todoForToday[1].title}
     <br />
     {todoForToday.map((todo)=>{
      return (
        <div>
          {todo.title}
          {todo.description}
          <br />
        </div>
      )
     })}
    {todoForToday.map((todo)=>{
      return (<ComponentTodo title={todo.title} description={todo.description}></ComponentTodo>)
    })}
    </div>
  )
}

function ComponentTodo(props){
  return <div style={{backgroundColor : "red"}}>
    {props.title}
    {props.description}
  </div>
}
export default App;