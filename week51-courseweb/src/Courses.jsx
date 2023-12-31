import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState,useEffect } from "react";
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

// 2. october 10th to reduce the expensive operation reduce re rendering 
// because the course is in top levelk component 
// using state management libraries  redux recoil, zustand

function Courses() {
    const [courses,setCourses] = useState([]); // replacing in line 23. trying to remove conneciton to Courses 
    //const [courses,setCourses] = useRecoilState(coursesState); // this will still re-render the whole thing 
   // const setCouses = useSetRecoilState(coursesState)

    useEffect(() => { // stop multiple requsts sending
        fetch("http://localhost:3000/admin/courses", {
          method: "GET",
          headers: { Authorization: "Bearer " + localStorage.getItem("randomkey") },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.courses);
            setCourses(data.courses);
             // JSON.stringify(courses)
          });
      }, []);
    
    
    return( 
        // add grid system here 
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      {courses.map(course => <Fn_map course={course} />)}
    </div>
       // <Course course = {courses[0]} /> .map function will spit out all to max length automaticaly
       // <Course course = {courses[1]} />
       // <Course course = {courses[2]} />
    )
}
  
export function Fn_map(props){
    return ( 
    <Card style={{ minHeight:200, margin :10, width:300}}>
  
        {props.course.id}
       <Typography textAlign={"center"} ariant="h4">{props.course.title}</Typography> 
       <Typography textAlign={"center"} variant="subtitle">{props.course.descrition}</Typography>
       <img src={props.course.imageLink} style={{width:300}}></img>
        
    </Card>
    )
}
  export default Courses;

  // const coursesState = atom({
  //   key: 'coursesState', // unique ID (with respect to other atoms/selectors)
  //   default: '', // default value (aka initial value) 
  // });