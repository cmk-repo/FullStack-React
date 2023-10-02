import './App.css'
import { useState } from 'react';

// var todos = [{
//   title:"go Gym",
//   description:"get up and go to gym",
//   id:1
// },
// {  title:"go Gym",
// description:"get up and go to gym",
// id:1
// }]

// single todo was rendered
// let todo ={   title:"go Gym",
// description:"get up and go to gym",
// id:1}


// setInterval( ()=>{
//   todos.title = "Changed "
// },1000) 

// to make react see what is changing in state variable
// we have to determine in certain way, the above way 
// cannot be used



function App() {

// component will have function and state 
  // state variable creation 
const[todo,setTodo] = useState({
  title:"go Gym",
  description:"get up and go to gym",
  id:1
});

// updating state variable 
setInterval(()=>{
  setTodo({
    title : "nnn",
    description : "eat and sleep",
    id : 1
  })
},2000);


  return (
    <>
    <div>
    <h1> Hi There </h1>
    {todo.title}
    {todo.description}
    {todo.id}
    <TestComponent></TestComponent>
    <PersonName firstName={todo.title} lastName = {todo.description}> </PersonName>
    </div>
    </>
  )
}
// components should have CAPITAL letter
// States can be sent to compoenents as PROPRS like arduments
function PersonName(props){
  return <div> 
    {props.firstName} {props.lastName}
    </div>
}

// the name of component should be in PASCAL type declaration 
// Mean Capital first letterss
function TestComponent(){
return <div>
    Chandan M
  </div>
}

// npm run build to build the dist folder
export default App


