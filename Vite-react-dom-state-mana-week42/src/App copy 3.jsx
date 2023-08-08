import React, { useEffect } from "react";

// react.useState is called hook in react it reamins independent of rerenders

function App() {
  const [todoForToday , setTodoForToday] = React.useState([{
    title: "Title 1",
    description: " des 1 ",
    id: 1
  },]);

  console.log("render")
  React.useEffect(()=>{
      console.log("hi from useEffect")
        console.log("render")
        setInterval(()=>{
          setTodoForToday({
            title: "gotoooooo   " + Math.random(),
            description:"gooooogymnow",
            id:1
          })
        },1000)

     },[]);
// time out ony does once 
// interval keeps doing  putting it under useEffect will do propely at set ineteval 
// stilll feel it is not working
//2
// move to inside use effect


//1
  return (
    <div>
      {todoForToday.title}
      <br />
      {todoForToday.description}
      <br/>
      
    </div>
  )
}

export default App;