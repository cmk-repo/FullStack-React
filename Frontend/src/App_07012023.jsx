import React, { useEffect } from "react";

function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Hit gym from 7-9",
    id: 1
  });

  setInterval(() => {
    setTodoForToday({
      title: "Go to gym please please please" + Math.random(),
      description: "Hit gym from 7-9",
      id: 1
    })
  }, 1000)

  return (
    <div>
      <RenderTodo todoForToday={todoForToday}></RenderTodo>
    </div>
  )
}

function RenderTodo(props) {
  return <div>
    {props.todoForToday.title}
    <br />
    {props.todoForToday.description}
  </div>
}

export default App;