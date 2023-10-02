import React, { useEffect } from "react";


// Custom hook
  // use todo to write all these logic
// keep rerending
function useChandanTodoHook() {
  const [TodoState , setTodoForToday] = React.useState([]); // hook 1

  console.log("render")
  React.useEffect(()=>{ // hook2
    fetch("http://localhost:3000/todos",{ method:"get"
  }).then((response)=>{
    response.json().then((data)=>{
      console.log(data);
      setTodoForToday(data); // this line now add all the files
    })
  });
      // make it fetch everyone sec by adding interval 
    setInterval(() => {
      fetch("http://localhost:3000/todos",{ method:"get"
    }).then((response)=>{
    response.json().then((data)=>{
      console.log(data);
      setTodoForToday(data); // this line now add all the files
    })
  });
    },1000)
  }, []);
  return TodoState;



}


// react.useState is called hook in react it reamins independent of rerenders
function App() {
  
  // const [TodoState , setTodoForToday] = React.useState([]); // hook 1

  // console.log("render")
  // React.useEffect(()=>{ // hook2
  //   fetch("http://localhost:3001/todos",{ method:"get"
  // }).then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data);
  //     setTodoForToday(data); // this line now add all the files
  //   })
  //   });
  // }, []);
  //

  //custom hook call
  const TodoState = useChandanTodoHook();

  return (
    <div>
      {TodoState.map(todo => {
        return <div>
        {todo.title}
        {todo.description}
          <button>Delete</button>
        </div>
      })}
    </div>
  )
}

export default App;